git init     //初始化本地仓库   *

touch   文件名.后缀   //创建文件

git status   //查询当前状态

git add 文件名.后缀  //把文件添加到暂存区

git add .  //把工作区所有内容添加到暂存区  *

git commit -m "注释内容"   //把缓存区内容提交到本地仓库  *

git log    //显示当前分支的所有提交历史

git reset --hard 版本号    //回滚到指定版本  版本号用git log查询

git reflog  //查看操作记录



git branch   //查看所有分支

git branch 分支名    //创建分支

git log --all --graph  //显示所有分支的提交历史

git checkout 分支名   //切换分支

git checkout -b 分支名   //创建并切换到该分支   如果该分支以存在则操作失败不会切换分支  * （会把执行当前命令分支的所有内容赋给新建的分支）

git merge 分支名  //把其他分支合并到当前分支（并不会删除支） *

git branch -d 分支名  //删除一个分支 ，会做各种检查

git branch -D 分支名  //强制删除一个分支，不会做任何检查



ssh-keygen -t rsa  //生成SSH公钥   （执行这行命令会让你输入数据，什么都不输直接回车就行）
 
cat ~/.ssh/id_rsa.pub   //查看SSH公钥




git remote add 给远程仓库起别名  远程仓库地址    //给本地添加远程仓库  *

git remote  //查看所有远程仓库

git  push 远程仓库别名  分支名   //把本地仓库指定分支推送到远程仓库的指定分支中

git  push 远程仓库别名  本地分支名:远程分支名   //把本地仓库指定分支推送到远程仓库的指定分支中  *

git branch -vv   //查看本地分支和远程仓库分支的对应关系

git push --set-upstream 远程仓库别名 本地分支名:远程分支名   //把本地仓库指定分支推送到远程仓库的指定分支中，并指定分支绑定  （之后再推送到远程仓库时可用直接 git push）**



git clone  远程仓库地址   拉取到本地后的文件夹名称     //克隆远程仓库到本地 

git fetch   //抓取  是指将远程仓库里的更新都抓取到本地(抓取分支)，不会进行合并分支
	
git branch --set-upstream-to=ForSomeTestR/dev dev  分支建立跟踪关系      ForSomeTestR/dev表示远程仓库别名/远程分支     后面的dev为本地分支 

git pull     //拉取  拉取前必须让分支建立跟踪关系！！！（同步本地仓库和远程仓库的代码）  是指将远程仓库里的更新都抓取到本地(抓取分支)然后进行自动合并分支  *



git reset --hard 版本号    //回滚到指定版本  版本号用git log查询 **
git使用流程
1 git clone
2 git checkout -b 创建并切换到子分支（会把执行当前命令分支的所有内容赋给新建的分支）
3 git merge 把主分支合并到子分支上   （如果有需要的话）
4 完成业务开发后git add
5 git commit 
6 git pull 同步本地仓库和远程仓库的代码  (拉取前必须让分支建立跟踪关系！！！)
7 git merge 把今天开发的子分支合并到主分支上
8 git push


 git config --global --unset http.proxy 
git config --global --unset https.proxy



1  git branch --set-upstream-to=ForSomeTestR/dev dev  分支建立跟踪关系      ForSomeTestR/dev表示远程仓库别名/远程分支     后面的dev为本地分支 
2  git pull
3  解决合并冲突
4  git push



回滚相关步骤：
1 git log
2 git reset --hard <merge-commit-id>   (硬回滚，<commit-id> 代表你想要回滚到的提交的唯一标识符)





 
