修復 grub 開機區
=======

#[ ubuntu系统grub引导修复](https://juejin.cn/post/6844904201647046670)

特别是在linux调整分区后，开机重启时会出现  
error : unknow filesystem  
```grub rescue>```  
的字样，系统就是进不去。这表示你的grub2的配置文件坏了……由于分区调整或分区UUID改变造成grub2不能正常启动，从而进入修复模式了（grub rescue)，也称救援模式。

在救援模式下只有很少的命令可以用：set , ls , insmod , root , prefix

复制代码

(1)set  查看环境变量，这里可以查看启动路径和分区。 
(2)ls   查看设备 
(3)insmod  加载模块 
(4)root  指定用于启动系统的分区,在救援模式下设置grub启动分区 
(5)prefix 设定grub启动路径

具体修复步骤如下：

- 1、查看分区：```grub rescue> ls ```回车  
  会出现如下字样：

(hd0) (hd0,msdos9) (hd0,msdos8) (hd0,msdos7) (hd0,msdos6) (hd0,msdos5) (hd0,msdos2) (hd0,msdos1)

注：上面是我的分区设备，每个人可能不一样，但原理都是一样的。
```grub> find /boot/grub/grub.conf``` 也行

- 2、寻找ubuntu所在分区：  
  （就是寻找你的Linux系统是装在以上哪个分区里）

```grub rescue> ls (hd0,msdos1)/```

若出现unknown filesystem字样，则尝试下一个……若出现的是你的ubuntu主文件夹下的文件夹和文件的名字，那就是的要找的分区了。

- 3、修改启动分区：（假如你找到的启动分区是hd0,msdos8）
  
  ```
  grub rescue>root=(hd0,msdos8)
  grub rescue>prefix=/boot/grub //grub路径设置  
  grub rescue>set root=(hd0,msdos8)  
  grub rescue>set prefix=(hd0,msdos8)/boot/grub  
  grub rescue>insmod normal //启动normal启动  
  grub rescue>normal  
  ```
  
  之后你就会看到熟悉的启动菜单栏了

- 4、进入命令行启动ubuntu

进入系统启动选项界面后还是进不去，因为你还没有真正的修改grub,这个要到ubuntu里修改,进入系统启动项界面后，按C进入命令行模式。  

```
grub >set root=hd0,msdos8  
grub >set prefix=(hd0,msdos8)/boot/grub  
grub >linux /vmlinuz-xxx-xxx root=/dev/sda8 //里边的xxxx可以按Tab键，如果有acpi问题,在最后加一句acpi=off  
grub >initrd /initrd.img-xxx-xxx  
grub >boot  
```

这样就可以进入了

- 5、进入ubuntu修复grub

在ＵＢＵＮＴＵ的终端里运行

```
sudo update-grub
sudo grub-install /dev/nvme0n1 
or /dev/sda
```

- 6、重启，搞定！！

注：有时只修改1～3步骤，然后在菜单栏就可以进入系统了，且一切正常。  
在重启时，系统就只有一个光标在左上角不停的闪，咋也进不了系统。可能是启动项的问题，开机启动项改为硬盘启动就好了。

## 方法二：

首先制作 Ubuntu 启动 USB

复制代码代码如下：

复制代码

```
sudo dd if=ubuntu-13.10-desktop-amd64.iso of=/dev/sdb1 
```

#/dev/sdb1 为 USB 盘符`

- 1.使用启动 USB 进入 Ubuntu 试用环境

- 2.查看硬盘分区状况，获取 Linux 系统安装分区编号  
  ```sudo fdisk -l```

查看输出结果，然后根据文件类型和分区大小来判定 Linux 系统安装在哪块硬盘和安装的分区。我的电脑是在/dev/sda3安装了 Ubuntu。  
或者，打开 Gparted 图形化工具来查看分区信息也可以。  
挂载Ubuntu分区

- 3.已知Ubuntu安装在了/dev/sda3上，所以我们可以用下面命令来挂载Ubuntu安装分区。你需要将/dev/sda3换成自己的 Linux 安装分区。  
  
  ```
  sudo mount /dev/sda3 /mnt
  ```

- 4.挂载其他所需的目录（使用 --bind）

复制代码

```
sudo mount --bind /dev /mnt/dev 
sudo mount --bind /proc /mnt/proc 
sudo mount --bind /sys /mnt/sys
```

- 5.Chroot 到硬盘上的 Linux 系统  
  代码如下：

```sudo chroot /mnt``` chroot命令把根目录切换到指定目录下

- 6.安装&更新 Grub

复制代码

```
grub2-install /dev/sda 
grub2-mkconfig -o /boot/grub2/grub.cfg
```

- 7.Grub 已经修复成功，我们还需要退出 chroot 环境、卸载已经挂载的设备与目录：

复制代码

```exit
sudo umount /mnt/dev 
sudo umount /mnt/proc 
sudo umount /mnt/sys 
sudo umount /mnt
```

- 8.重启。

可以进grub 这就好办了 >root (hd0,x) 提示： 输入（后 ，按 TAB键 自动补全 很好用的 。x表示你的linux根分区

复制代码

```
>linux /vmlinuz ro quiet  
>initrd /initrd.lz >boot
```

先找到menu.lst菜单文件：  
```find --set-root /boot/grub/menu.lst  ```
然后加载：  
Grub 命令索引```configfile /boot/grub/menu.lst``` 
菜单文件可以换成grub.conf试试。

－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

# [怎样修复grub开机引导(grub rescue)](https://www.cnblogs.com/jins-note/p/9513335.html)

很多时候，特别是在linux调整分区后，开机重启时会出现

        error : unknow filesystem

        grub rescue>

        的字样，系统就是进不去。这表示你的grub2的配置文件坏了……

        由于分区调整或分区UUID改变造成grub2不能正常启动，从而进入修复模式了（grub rescue)，也称救援模式。

        在救援模式下只有很少的命令可以用：set  ,  ls , insmod , root , prefix

        (1)set  查看环境变量，这里可以查看启动路径和分区。

        (2)ls   查看设备

        (3)insmod  加载模块

        (4)root  指定用于启动系统的分区,在救援模式下设置grub启动分区

        (5)prefix 设定grub启动路径

具体修复步骤如下：

       1、查看分区：grub rescue> ls   回车

            会出现如下字样：

            (hd0) (hd0,msdos9) (hd0,msdos8) (hd0,msdos7) (hd0,msdos6) (hd0,msdos5) (hd0,msdos2) (hd0,msdos1)

       注：上面是我的分区设备，每个人可能不一样，但原理都是一样的。

       2、寻找ubuntu所在分区：

           （就是寻找你的Linux系统是装在以上哪个分区里）

             grub rescue> ls (hd0,msdos1)/

            若出现unknown filesystem字样，则尝试下一个

            ……

            若出现的是你的ubuntu主文件夹下的文件夹和文件的名字，那就是的要找的分区了。

        3、修改启动分区：

             （假如你找到的启动分区是hd0,msdos8）         grub rescue>root=(hd0,msdos8)  
         grub rescue>prefix=/boot/grub                         //grub路径设置         grub rescue>set root=(hd0,msdos8)  
         grub rescue>set prefix=(hd0,msdos8)/boot/grub  
         grub rescue>insmod normal                            //启动normal启动

         grub rescue>normal

        之后你就会看到熟悉的启动菜单栏了

  4、进入命令行启动ubuntu

         进入系统启动选项界面后还是进不去，

       因为你还没有真正的修改grub,这个要到ubuntu里修改

进入系统启动项界面后，按C进入命令行模式

        grub >set root=hd0,msdos8

        grub >set prefix=(hd0,msdos8)/boot/grub

        grub >linux /vmlinuz-xxx-xxx root=/dev/sda8 //里边的xxxx可以按Tab键，如果有acpi问题,在最后加一句acpi=off  
        grub >initrd /initrd.img-xxx-xxx  
        grub >boot

       这样就可以进入了       5、进入ubuntu修复grub

 在终端里运行        sudo update-grub

                                        sudo grub-install /dev/sda

       6、重启，搞定！！

 注：我当时只是修改了1～3步骤，然后在菜单栏就可以进入系统了，且一切正常。

       可惜，在重启时，系统就只有一个光标在左上角不停的闪，咋也进不了系统。后来开机按F2，开机启动项改为硬盘启动就好了。

来源： <[怎样修复grub开机引导-luotaijia-ChinaUnix博客](http://m.blog.chinaunix.net/uid-27037833-id-3235145.html)>

------------------------------------------------------------

[Linux_修复GRUB引导故障的3种方法！_grub最简单恢复方法-CSDN博客](https://blog.csdn.net/Wsxyi/article/details/113705074)
