# Ubuntu upgrade to 24.04

[NobleUpgrades - Community Help Wiki](https://help.ubuntu.com/community/NobleUpgrades)



## Upgrading Ubuntu Desktops to 24.04 LTS

You can easily upgrade over the network with the following procedure.

1. Run the **update-manager** application.

2. In Update Manager, click the **Settings...** button, and enter your password to start the Software Sources application.

3. Select the sub menu **Updates** from the Software Sources application.

4. Confirm the "Notify me of a new Ubuntu version:" option is set to "For any new version", and change it if otherwise.

5. Close the Software Sources application and return to Update Manager.

6. In Update Manager, click the **Check** button to check for new updates.

7. If there are any updates to install, use the **Install Updates** button to install them.

8. Run **update-manager**.

9. If you want to upgrade early, before upgrades are officially supported, you can pass the **-d** option when running **update-manager**. Do this at your own risk. It is advised to check the [release notes for Ubuntu 24.04 LTS](http://wiki.ubuntu.com/NobleNumbat/ReleaseNotes) before doing so.

10. A message will appear informing you of the availability of the new release.

11. Click **Upgrade**.

12. Follow the on-screen instructions.



















--------------------------------------------------



[How to Upgrade Ubuntu 22.04 to 24.04 LTS: A Complete Guide - nixCraft](https://www.cyberciti.biz/faq/how-to-upgrade-from-ubuntu-22-04-lts-to-ubuntu-24-04-lts/)

# [How to Upgrade Ubuntu 22.04 to 24.04 LTS: A Complete Guide](https://www.cyberciti.biz/faq/how-to-upgrade-from-ubuntu-22-04-lts-to-ubuntu-24-04-lts/)

Author: Vivek Gite Last updated: May 14, 2024 [25 comments](https://www.cyberciti.biz/faq/how-to-upgrade-from-ubuntu-22-04-lts-to-ubuntu-24-04-lts/#comments)

[![See all Ubuntu Linux related FAQ](https://www.cyberciti.biz/media/new/category/old/ubuntu-logo.jpg)](https://www.cyberciti.biz/faq/category/ubuntu-linux/ "See all Ubuntu Linux related FAQ")

Ubuntu 24.04 LTS (Noble Numbat) was launched on April 25th, 2024. This new version will be supported for five years until June 2029. The armhf architecture now provides support for the Year 2038 problem. The upgrades include significant updates to core packages like Linux kernel, systemd, Netplan, toolchain upgrades for better development support, enhanced security measures, and performance optimizations. It also has an updated GNOME desktop environment and other default applications. Let us see how to upgrade Ubuntu 22.04 LTS to Ubuntu 24.04 LTS using the CLI over ssh-based session.  

Users of Ubuntu 23.10 will be offered an automatic upgrade to 24.04 shortly after its release. However, users of Ubuntu 22.04 LTS will only receive the automatic upgrade offer once **24.04.1 LTS becomes available, which is scheduled for August 15** . However, you can force an immediate upgrade using the -d option and jump from **22.04 to 23.10** and then finally to **24.04 LTS**. This is until August 15, 2024. After that date, you can directly jump from 22.04 to 24.04 LTS directly.  

| Tutorial details  |                                                                                                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Difficulty level  | [Intermediate](https://www.cyberciti.biz/faq/tag/intermediate/ "See all Intermediate Linux / Unix System Administrator Tutorials")                                                               |
| Root privileges   | [Yes](https://www.cyberciti.biz/faq/how-can-i-log-in-as-root/ "See how to login as root user")                                                                                                   |
| Requirements      | Linux terminal                                                                                                                                                                                   |
| Category          | Server Upgrade                                                                                                                                                                                   |
| OS compatibility  | [Linux](https://www.cyberciti.biz/faq/category/linux/ "See all Linux distributions tutorials") • [Ubuntu](https://www.cyberciti.biz/faq/category/ubuntu-linux/ "See all Ubuntu Linux tutorials") |
| Est. reading time | 7 minutes                                                                                                                                                                                        |

## Step 1 – Backup your system

Backing up your data before upgrading from Ubuntu 22.04 LTS to 24.04 LTS is vital for two reasons. First, even though thoroughly tested, unexpected issues can arise during the upgrade process. If something goes wrong, a backup ensures you can recover irreplaceable files like databases, code written in PHP/Perl/Python, documents, photos, or scripts. Second, upgrading to a new LTS version might introduce changes that cause some of your data incompatibility. A backup allows you to restore and migrate the data to a format compatible with the new Ubuntu version. Remember to back up your data before upgrading to Ubuntu. Don’t blame us if you lose everything!

### How do I backup important data or everything?

Cloud providers usually offer backup options, such as taking a snapshot of your cloud server (here is guide for [EC2](https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/ec2-backup.html) and [Lightsail VM](https://docs.aws.amazon.com/lightsail/latest/userguide/understanding-instance-snapshots-in-amazon-lightsail.html)). Alternatively, you can use various backup tools like [rsnapshot](https://www.cyberciti.biz/faq/linux-rsnapshot-backup-howto/), [tarsnap](https://www.cyberciti.biz/faq/how-to-compile-and-install-tarsanp-on-a-ubuntudebian-linux/), [restic](https://restic.net/), [kbackup](https://apps.kde.org/kbackup/), [duplicity](https://duplicity.us/), [bacula](https://www.bacula.org/), and [Déjà Dup](https://apps.gnome.org/DejaDup/). Testing your backups and verifying that they can be restored is necessary, as is finding out how long it takes to restore the data.

## Step 2 – Update your system

Run the [apt command](https://www.cyberciti.biz/faq/ubuntu-lts-debian-linux-apt-command-examples/ "apt Command Examples for Ubuntu/Debian Linux") to upgrade all installed packages on the Ubuntu 22.04 LTS:  
`$ sudo apt update   $ sudo apt list --upgradable | more   $ sudo apt upgrade`  

[![Upgrading Ubuntu 22.04 LTS apps and packages to the latest version](https://www.cyberciti.biz/media/new/faq/2024/04/Upgrading-Ubuntu-22.04-LTS-apps-and-packages-to-the-latest-version-599x590.png)](https://www.cyberciti.biz/media/new/faq/2024/04/Upgrading-Ubuntu-22.04-LTS-apps-and-packages-to-the-latest-version.png)

Fig.01: Upgrading Ubuntu 22.04 LTS apps and packages to the latest version (click to enlarge)

You may see a message like this while patching 22.04 LTS system:

**Newer kernel available**
The currently running kernel version is 5.15.0-1030-aws which is not the expected kernel version 6.5.0-1018-aws.  
Restarting the system to load the new kernel will not be handled automatically, so you should consider rebooting. 

Hence, [reboot the Ubuntu Linux box](https://www.cyberciti.biz/faq/howto-reboot-linux/ "Reboot Linux System Command") using the [reboot](https://www.cyberciti.biz/faq/howto-reboot-linux/ "Reboot Linux System Command") or [shutdown](https://www.cyberciti.biz/faq/howto-shutdown-linux/ "How To Shutdown Linux Using Command Line"):  
`$ sudo reboot`  

[![Rebooting the Ubuntu 22.04 LTS machine](https://www.cyberciti.biz/media/new/faq/2024/04/Rebooting-the-Ubuntu-22.04-LTS-machine-487x599.png)](https://www.cyberciti.biz/media/new/faq/2024/04/Rebooting-the-Ubuntu-22.04-LTS-machine.png)

Fig.02: Rebooting the Ubuntu 22.04 LTS machine (click to enlarge)

## Step 3 – Upgrading from 22.04 LTS or 24.04 LTS

You must install ubuntu-release-upgrader-core package:  
`$ sudo apt install ubuntu-release-upgrader-core`  
Ensure the **Prompt** line in /etc/update-manager/release-upgrades is set to ‘**lts**‘ using the “[grep](https://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/ "How to use grep command In Linux / UNIX with examples")” or “[cat](https://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/ "cat Command in Linux / Unix with examples")”  
`$ grep 'lts' /etc/update-manager/release-upgrades   $ cat /etc/update-manager/release-upgrades`  

[![Check to see if LTS prompt set or not on Ubuntu 22.04 LTS](https://www.cyberciti.biz/media/new/faq/2024/04/Check-to-see-if-LTS-prompt-set-or-not-on-Ubuntu-22.04-LTS-599x328.png)](https://www.cyberciti.biz/media/new/faq/2024/04/Check-to-see-if-LTS-prompt-set-or-not-on-Ubuntu-22.04-LTS.png)

Fig.03: Checking if the LTS prompt config is set or not on Ubuntu 22.04 LTS (click to enlarge)

### Opening up TCP port 1022 using the [ufw command](https://www.cyberciti.biz/faq/how-to-set-up-ufw-firewall-on-ubuntu-24-04-lts-in-5-minutes/ "How to Set Up UFW Firewall on Ubuntu 24.04 LTS in 5 Minutes") or [iptables command](https://www.cyberciti.biz/tips/linux-iptables-examples.html "Linux 25 Iptables Netfilter Firewall Examples")

For those using ssh-based sessions, open an additional SSH port using the ufw command, starting at port 1022. This is the default port set by the upgrade procedure as a fallback if the default SSH port dies during upgrades. The syntax for the [ufw command](https://www.cyberciti.biz/faq/how-to-set-up-ufw-firewall-on-ubuntu-24-04-lts-in-5-minutes/ "How to Set Up UFW Firewall on Ubuntu 24.04 LTS in 5 Minutes") to [open SSH alternative TCP/1022 port with ufw](https://www.cyberciti.biz/faq/ufw-allow-incoming-ssh-connections-from-a-specific-ip-address-subnet-on-ubuntu-debian/ "How to open ssh 22/TCP port using ufw on Ubuntu/Debian Linux") is as follows:  
`$ sudo ufw allow 1022/tcp comment 'Open port ssh TCP/1022 as failsafe for upgrades'   $ sudo ufw status`  
Here is an example for iptables:  
`$ sudo /sbin/iptables -I INPUT -p tcp --dport 1022 -j ACCEPT`  
Open the TCP/1022 port using your cloud server firewall if you have one. Here is how to do it with the AWS [EC2 security groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html) or [Lightsail](https://docs.aws.amazon.com/lightsail/latest/userguide/understanding-firewall-and-port-mappings-in-amazon-lightsail.html) instance:  

[![Open the TCP port 1022 using the CLOUD server firewall](https://www.cyberciti.biz/media/new/faq/2024/04/Open-the-TCP-port-1022-using-the-CLOUD-server-firewall-599x361.png)](https://www.cyberciti.biz/media/new/faq/2024/04/Open-the-TCP-port-1022-using-the-CLOUD-server-firewall.png)

Fig. 04: Open the TCP port 1022 using the CLOUD server firewall (click to enlarge)

## Step 4 – Upgrading from Ubuntu 22.04 LTS to Ubuntu 24.04 LTS version

Finally, start the upgrade from Ubuntu 22.04 to 24.04 LTS version. Type:  
`$ sudo do-release-upgrade -d`  

Are you getting this error?

There is no development version of an LTS available.  
To upgrade to the latest non-LTS development release set Prompt=normal in 
/etc/update-manager/release-upgrades. 

There are multiple ways to upgrade Ubuntu 22.04 LTS before the release of 24.04.1 LTS, scheduled for August 15th, 2024. Here’s one safe method:

1. Edit the /etc/update-manager/release-upgrades file and set Prompt=normal. Run:  
   `$ sudo nano /etc/update-manager/release-upgrades`  
   Set:
   
   Prompt=normal
   
   Save and close the file.

2. Next, run:  
   `$ sudo do-release-upgrade`  
   Follow all onscreen instructions. This will get you **23.10 release** and reboot the system. Run:  
   `$ sudo reboot`

3. Then, again edit the /etc/update-manager/release-upgrades and set Prompt=lts. Type:  
   `$ sudo nano /etc/update-manager/release-upgrades`  
   Set:
   
   Prompt=lts
   
   Save and close the file.

4. Finally, type the following command and follow the rest of the guide to upgrade from 23.10 to 24.04 LTS:  
   `$ sudo do-release-upgrade -d`

This note will automatically disappear after August 15th, 2024, as there will be no need for this kind of workaround. As a seasoned sysadmin and developer, I recommend waiting until the release of 24.04.1 LTS (scheduled for August 15th, 2024) before upgrading from Ubuntu 22.04 LTS. This ensures superb stability and minimizes potential compatibility issues with your apps. However, you can use these instructions for testing purposes. This is a great way to check if your applications will work seamlessly with Ubuntu 24.04 LTS.

You will get welcome message as follows:

Checking for a new Ubuntu release
 
= Welcome to Ubuntu 24.04 LTS 'Noble Numbat' =
 
The Ubuntu team is proud to announce Ubuntu 24.04 LTS 'Noble Numbat'.
 
To see what's new in this release, visit:
  https://wiki.ubuntu.com/NobleNumbat/ReleaseNotes
 
Ubuntu is a Linux distribution for your desktop or server, with a fast
and easy install, regular releases, a tight selection of excellent
applications installed by default, and almost any other software you
can imagine available through the network.
 
We hope you enjoy Ubuntu.
....
...
To sign up for future Ubuntu announcements, please subscribe to Ubuntu's
very low volume announcement list at:
 
  http://lists.ubuntu.com/mailman/listinfo/ubuntu-announce
 
 
Continue [yN]

Then it will tell you about ssh port what you already opened:

Reading cache
 
Checking package manager
 
Continue running under SSH? 
 
This session appears to be running under ssh. It is not recommended 
to perform a upgrade over ssh currently because in case of failure it 
is harder to recover. 
 
If you continue, an additional ssh daemon will be started at port 
'1022'. 
Do you want to continue? 
 
Continue [yN]

Finally, you need to confirm to start upgrade procedure:

[![How to Upgrade from Ubuntu 22.04 LTS to Ubuntu 24.04 LTS using the CLI](https://www.cyberciti.biz/media/new/faq/2024/04/How-to-Upgrade-from-Ubuntu-22.04-LTS-to-Ubuntu-24.04-LTS-using-the-CLI-599x379.png)](https://www.cyberciti.biz/media/new/faq/2024/04/How-to-Upgrade-from-Ubuntu-22.04-LTS-to-Ubuntu-24.04-LTS-using-the-CLI.png)

Fig.05 : Upgrading Ubuntu from 23.04 or 22.04 to 24.04 (click to enlarge)

### Dealing with “Remove obsolete packages?” message

You will get message as follows:

Remove obsolete packages? 
 
27 packages are going to be removed. 
 
 Continue [yN]  Details [d]

You need to review those carefully and only remove those packages if you do not need them. Otherwise, choose ‘N’ option.

### System upgrade is complete

The movement has arrived. The system upgrade is complete. All you need to say ‘Y’ to reboot the system and pray that it comes online:  

[![Rebooting into Ubuntu 24.04 LTS server](https://www.cyberciti.biz/media/new/faq/2024/04/Rebooting-into-Ubuntu-24.04-LTS-server-599x328.png)](https://www.cyberciti.biz/media/new/faq/2024/04/Rebooting-into-Ubuntu-24.04-LTS-server.png)

Fig.06: Rebooting into Ubuntu 24.04 LTS server (click to enlarge)

## Step 5 – Verification

Use the command lsb_release command or [cat command](https://www.cyberciti.biz/faq/linux-unix-appleosx-bsd-cat-command-examples/ "cat Command in Linux / Unix with examples") to check your Ubuntu Linux version. This command queries the /etc/os-release and provides you with the version information:  
`$ cat /etc/os-release   $ lsb_release -a`

PRETTY_NAME="Ubuntu 24.04 LTS"
NAME="Ubuntu"
VERSION_ID="24.04"
VERSION="24.04 LTS (Noble Numbat)"
VERSION_CODENAME=noble
ID=ubuntu
ID_LIKE=debian
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
UBUNTU_CODENAME=noble
LOGO=ubuntu-logo

Check the Linux kernel version as follows using the uname command:  
`$ uname -mrs   Outputs:   Linux 6.8.0-1008-aws x86_64`  
[![Ubuntu 24.04 LTS SERVER](https://www.cyberciti.biz/media/new/faq/2024/04/Ubuntu-24.04-LTS-SERVER-599x421.png)](https://www.cyberciti.biz/media/new/faq/2024/04/Ubuntu-24.04-LTS-SERVER.png)

## Step 6 – Enabling 3rd party repos/mirros

After completing the upgrade to Ubuntu 22.04 LTS (or 23.10) to 24.04 LTS, ensure that you enable 3rd party mirrors and repositories; otherwise, you will not receive updates. Use the following [cd command](https://bash.cyberciti.biz/guide/Cd_command "Cd command - Linux Bash Shell Scripting Tutorial Wiki"):  
`$ cd /etc/apt/sources.list.d   $ ls -l`  
For example, my app repo was disabled during updates:  
`$ cat my-cool-apps.list`  
Outputs:

#deb [arch=amd64] https://dl.www.cyberciti.biz/linux/deb/ stable main

To enable it again, I commented out the line by removing the #:

deb [arch=amd64] https://dl.www.cyberciti.biz/linux/deb/ stable main

Then run the apt command:  
`$ sudo apt update   $ sudo apt upgrade`  
Finally, clean up unwanted and unused leftover packages:  
`$ sudo apt autoremove --purge`  
Make sure to remove the iptables/ufw firewall rule that was added earlier to open the alternate SSH port at TCP/1022. For example:  
`$ sudo ufw show added   # add the delete rule before the allow keyword   $ sudo ufw delete allow 1022/tcp comment 'Open port ssh tcp port 1022 as failsafe option for upgrades'`  
See “[How to delete a UFW firewall rule on Ubuntu / Debian Linux](https://www.cyberciti.biz/faq/how-to-delete-a-ufw-firewall-rule-on-ubuntu-debian-linux/ "How to delete a UFW firewall rule on Ubuntu / Debian Linux")” for more info.

## Wrapping up

Congratulations! You’ve successfully upgraded your Ubuntu system from 22.04 LTS or 23.10 to the latest 24.04 LTS using the command line. For in-depth details, explore the official Ubuntu 24.04 [release notes](https://discourse.ubuntu.com/t/noble-numbat-release-notes/39890) and read manual pages using “[man](https://bash.cyberciti.biz/guide/Man_command "Man command - Linux Bash Shell Scripting Tutorial Wiki")” or “[help](https://bash.cyberciti.biz/guide/Man_command "Man command - Linux Bash Shell Scripting Tutorial Wiki")”  
`$ man do-release-upgrade   $ man apt   $ man apt-get`

🥺 Was this helpful? Please add [a comment to show your appreciation or feedback](https://www.cyberciti.biz/faq/how-to-upgrade-from-ubuntu-22-04-lts-to-ubuntu-24-04-lts/#respond "Please add your comment below ↓ to show your appreciation or feedback to the author").

![nixCrat Tux Pixel Penguin](https://www.cyberciti.biz/media/new/cms/2024/04/tux_96.png)
