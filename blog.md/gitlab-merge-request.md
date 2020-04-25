# Gitlab Merge Request 按钮不见了

## 起因

因为一些原因执行了 Gitlab 恢复备份命令：

```sh
gitlab-rake gitlab:backup:create   # 创建备份命令
docker exec -it gitlab  gitlab-rake gitlab:backup:create # docker 中创建备份命令

gitlab-rake gitlab:backup:restore # 恢复命令
docker exec -it gitlab gitlab-rake gitlab:backup:restore # docker 中恢复备份命令
```

恢复过程中出现了一个奇怪的错误

```
NoMethodError: undefined method full_path' for nil:NilClass` encountered when restoring a backup.
```

关于这个问题的官方 issue

<https://gitlab.com/gitlab-org/gitlab-foss/-/issues/35662#designs-tab>

抱着侥幸的心理，在执行了一遍恢复命令，竟然成功了，不追究原因了。

恢复成功后不久，就有公司小伙伴找我投诉，说明明提交了分支，在 Branchs 中都看到了分支了，

但是就是没有 Merge Request 按钮。

![merge-request-not-found](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/gitlab-merge-request-no-found.png)

## 解决过程

一开始没有去细想 Gitlab 系统构建的基本思路，好后悔，走了很多弯路。

怀疑是系统恢复后 git 的某系记录不对了，其实按照 git 的设计，应该不会出现这样的问题，因为 git 是分布式设计，git 本地是完整的副本，合并的过程只不过是吧你本地的分支推送到服务器，在服务器中进行分支对比合并，所以思路就错了。

最后细想了下 Gitlab 的系统构建路：Gitlab 是一个在 git 之上构建的一个代码管理系统，其服务器存储代码是使用 git 的存储的，然后再其上构建一个WEB 系统，记录了用户信息、工程信息、分支信息、合并记录等等。说白了就是一个使用 git 管理代码的一个WEB系统。他也有自己的数据库（PostgreSQL）和服务（使用Ruby On Rails开发）。

那么 Gitlab 是怎么知道用户推送了 git 分支，并在界面上显示一个  Merge Request 按钮给用户的呢。

答案是 `hook`。

每个工程的 .git 目录下都有一个 `hooks` 文件夹，其作用就是在执行一些 git 命令的时候 git 提供的钩子脚本。

Gitlab 就是使用了这个钩子，当用户推送了代码分支后，执行 Gitlab 预先设置的 hook，通知分支推送事件，经过一系列验证后，在用户及界面上显示一个 Merge Request 按钮。

![gitlab-hooks](https://ravenq-1251588610.cos.ap-guangzhou.myqcloud.com/gitlab-hooks.png)

在 Gitlab 服务器上，我们可以找到仓库目录，并执行 ls -l 命令，查看：

```sh
git@gitlab:~/git-data/repositories/myrepo.git$ ls -al
total 48
drwxr-xr-x  6 git git 4096 Apr 21 10:38 .
drwxrwx---  6 git git 4096 Apr 20 09:55 ..
-rw-r--r--  1 git git  140 Apr 21 01:40 FETCH_HEAD
-rw-r--r--  1 git git   23 Apr 20 09:55 HEAD
-rw-r--r--  1 git git  173 Apr 20 09:55 config
-rw-r--r--  1 git git   73 Apr 20 09:55 description
lrwxrwxrwx  1 git git   47 Apr 21 10:38 hooks -> /opt/gitlab/embedded/service/gitlab-shell/hooks
drwxr-xr-x  2 git git 4096 Apr 20 09:55 hooks.old
drwxr-xr-x  2 git git 4096 Apr 20 09:55 info
drwxr-xr-x 51 git git 4096 Apr 21 01:46 objects
-rw-r--r--  1 git git 5614 Apr 20 09:55 packed-refs
drwxr-xr-x  7 git git 4096 Apr 21 01:38 refs
```
我们可以看到一个 `hooks` 的软连接，执行了gitlab的一个目录，这个目下就是的脚本 gitlab 接收 git 推送消息的入口。

在进入到一个没有 Merge Request 按钮的一个仓库：

```sh
git@gitlab:~/git-data/repositories/my-error-repo.git$ ls -al
total 48
drwxr-xr-x  6 git git 4096 Apr 21 10:38 .
drwxrwx---  6 git git 4096 Apr 20 09:55 ..
-rw-r--r--  1 git git  140 Apr 21 01:40 FETCH_HEAD
-rw-r--r--  1 git git   23 Apr 20 09:55 HEAD
-rw-r--r--  1 git git  173 Apr 20 09:55 config
-rw-r--r--  1 git git   73 Apr 20 09:55 description
drwxr-xr-x  2 git git 4096 Apr 20 09:55 hooks
drwxr-xr-x  2 git git 4096 Apr 20 09:55 info
drwxr-xr-x 51 git git 4096 Apr 21 01:46 objects
-rw-r--r--  1 git git 5614 Apr 20 09:55 packed-refs
drwxr-xr-x  7 git git 4096 Apr 21 01:38 refs
```

我们发现软连接没有了，那么问题很明显了，**就是缺失了这个软连接**。

经过查阅一些资料，其实 GitLab 有提供相关工具命令，来检测和修复这些问题：

```sh
gitlab-rake gitlab:check --trace # 检测命令
```

```sh
[git@gitlab myrepo.git]# gitlab-rake gitlab:check --trace
** Invoke gitlab:check (first_time)
** Invoke gitlab:gitlab_shell:check (first_time)
** Invoke environment (first_time)
** Execute environment
** Execute gitlab:gitlab_shell:check
Checking GitLab Shell ...

GitLab Shell version >= 5.0.0 ? ... OK (5.0.0)
Repo base directory exists?
default... yes
Repo storage directories are symlinks?
default... no
Repo paths owned by git:git?
default... yes
Repo paths access is drwxrws---?
default... yes
hooks directories in repos are links: ...
myrepo ... wrong or missing hooks
  Try fixing it:
  sudo -u git -H /opt/gitlab/embedded/service/gitlab-shell/bin/create-hooks /var/opt/gitlab/git-data/repositories # 注意这句
  Check the hooks_path in config/gitlab.yml
  Check your gitlab-shell installation
  For more information see:
  doc/install/installation.md in section "GitLab Shell"
  Please fix the error above and rerun the checks.
my-error-repo ... wrong or missing hooks
  Try fixing it:
  sudo -u git -H /opt/gitlab/embedded/service/gitlab-shell/bin/create-hooks /var/opt/gitlab/git-data/repositories
  Check the hooks_path in config/gitlab.yml
  Check your gitlab-shell installation
  For more information see:
  doc/install/installation.md in section "GitLab Shell"
  Please fix the error above and rerun the checks.
  ...
```

通过执行结果发现 GitLab 已经告诉我们问题在哪里了，并且提供了修复命令

```sh
sudo -u git -H /opt/gitlab/embedded/service/gitlab-shell/bin/create-hooks /var/opt/gitlab/git-data/repositories
```

很可惜，我执行这条命令没成功，这也许也是我执行恢复命令后出现这个问题的原因吧，我猜想gitlab执行恢复命令的时候应该也有执行这条命令，只不过失败了而已。

命令失败了没关系，我们可以手动修复。CD 到 仓库目录执行：

1. 切换到 git 用户，注意一定要执行这句，不然创建的软连接权限不对

```sh
su git
```

如果你是用 docker 搭建的 GitLab 系统，可以先进入镜像：

```sh
docker exec -it gitlab /bin/bash
```

2. CD 到仓库，备份 hooks 文件夹

```sh
mv hooks hooks.old
```

3. 创建软连接

```sh
ln -s /opt/gitlab/embedded/service/gitlab-shell/hooks hooks
```

在重新推送分支，发现 Merge Request 按钮回来了。

## 小技巧

如果你的工程很多的话，可以写一个 Shell 脚本，遍历你的仓库目录，然后执行以上的步骤。

如果你对 Shell 脚本不熟系的话，还有一个小技巧，

```sh
gitlab-rake gitlab:check | grep 'wrong or missing hooks'
```

这样你就会得到有问题的仓库列表，复制到文本编辑器，批量替换下，就可以得到一个脚本了

```sh
cd /var/opt/gitlab/git-data/repositories/repo1.git && mv hooks hooks.old && ln -s /opt/gitlab/embedded/service/gitlab-shell/hooks hooks
cd /var/opt/gitlab/git-data/repositories/repo2.git && mv hooks hooks.old && ln -s /opt/gitlab/embedded/service/gitlab-shell/hooks hooks
cd /var/opt/gitlab/git-data/repositories/repo3.git && mv hooks hooks.old && ln -s /opt/gitlab/embedded/service/gitlab-shell/hooks hooks
cd /var/opt/gitlab/git-data/repositories/repo4.git && mv hooks hooks.old && ln -s /opt/gitlab/embedded/service/gitlab-shell/hooks hooks
cd /var/opt/gitlab/git-data/repositories/repo5.git && mv hooks hooks.old && ln -s /opt/gitlab/embedded/service/gitlab-shell/hooks hooks
...
```

复制执行就好了。注意切换到 git 用户哦~
