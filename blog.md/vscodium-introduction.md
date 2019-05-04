# VSCodium – An Open Source Visual Studio Code Without Trackers

VSCodium是一个没有跟踪的开源VS代码编辑器

我们之前有介绍过Visual Studio Code，他是一款很好的代码编辑器。虽然VS Code是开源的免费软件，但是他的源代码只能在微软官方上获得，而且下载只能在一个包含遥测系统的封闭式源代码授权下进行。因此我们应该对今天介绍的的这个代码编辑器感到高兴。

VSCodium 是使用Visual Studio Code源码编译的的一个无跟踪，免费和开源构建的版本。因此开发人员不需要从包含遥测系统/追踪的源代码来构建VS代码。

通过使用特殊的原稿来很好的完成克隆vscode repo。从源代码来构建，然后上传生成的文件到VSCodium’s GitHub 免费发布遥测系统传递。

VSCodium 是从 Visual Studio Code 克隆出来的分支，因此它包含了 VS Code 的所有特性，除了图标不一样。

![VSCodium](https://www.fossmint.com/wp-content/uploads/2019/04/VSCodium-Clone-of-VSCode.png)

VSCodium的产品特征

- 免费使用
- 跨平台：适用于Windows, GNU/Linux, 和 Mac
- 开源，源代码可以在GitHub上得到。
- 本机支持多个语言。
- 使用扩展的附加功能。
- 智能和巧妙的实现代码。
- 先进和高级的建立调试程序。
- 原生支持Git。

和VS Code的一样，功能列表是列不完的。

## How to Install VSCodium on Linux

怎样在LINUX上安装VSCodium

按照这些步骤在任何基于debian的发行版(如Ubuntu)上来安装VSCodium。

添加GPG。

```sh
$ wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg | sudo apt-key add -
```

添加仓库。

```sh
$ echo 'deb https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/debs/ vscodium main' | sudo tee --append /etc/apt/sources.list.d/vscodium.list
```

更新并安装。

```sh
$ sudo apt update && sudo apt install vscodium
```

VSCodium默认安装在 ParrotOS 系统上，如果没有安装在你的系统上，可以用以下简单的命令安装。

```sh
$ sudo apt update && apt install vscodium
```

在 Fedora / Centos / OpenSUSE 这三个系统当中，你可以使用以下命令安装 VSCodium。

添加GPG秘钥通过以下命令安装 VSCodium。

```text
-------- On Fedora/CentOS/RHEL --------
# dnf config-manager --add-repo https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/rpms/
# dnf install vscodium
```

```text
-------- On OpenSUSE/SUSE --------
# zypper addrepo -t YUM https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/repos/rpms/ vscodium_mirror_on_gitlab
# zypper in vscodium
```

你可以阅读手册把 vs Code 的插件和偏好设置转换到 VSCodium.你还在使用不同的操作系统吗？这里将会介绍怎样在你的系统上安装 VSCodium。

你认为VSCodium怎么样？我想那些因为微软跟踪的信息而不想使用Visual Studio代码的开发人员会更喜欢使用VSCodium。在下面的评论部分告诉我们你的想法。