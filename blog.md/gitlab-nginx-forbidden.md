# gitlab nginx 代理后 Forbidden 403 错误处理

## 环境：

- 使用 docker 启动的 gitlab 服务，端口为 8080
- 在同一台机器上使用 nginx 反向代理 8080 端口为 80 端口

## 现象：

不定时的出现 Forbidden 错误

## 解决方案

开始以为是 nginx 的问题，尝试了各种 nginx 配置修改，权限修改，都不行。

经过网上的一些资料搜索，发现是 gitlab 的问题。

gitlab 有个限制同一 ip 用错误的用户名密码单位时间内多次访问 gitlab 的限制。

找到原因就好解决了： 修改 gitlab/config/gitlab.rb 配置文件,吧 nginx ip 地址加入白名单

```rb
gitlab_rails['rack_attack_git_basic_auth'] = {
   'enabled' => true,
   'ip_whitelist' => ["127.0.0.1","<你的 nginx 机器 ip>","localhost"],
   'maxretry' => 10,
   'findtime' => 60,
   'bantime' => 3600
}
```

或者直接禁用此项功能。

```rb
gitlab_rails['rack_attack_git_basic_auth'] = {
   'enabled' => false,
   'ip_whitelist' => ["127.0.0.1"],
   'maxretry' => 10,
   'findtime' => 60,
   'bantime' => 3600
}
```
