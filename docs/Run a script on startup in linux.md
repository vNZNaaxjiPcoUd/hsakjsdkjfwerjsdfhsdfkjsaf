# Run a Script on Startup in Linux

[Linux](https://www.tutorialspoint.com/articles/category/linux)[Open Source](https://www.tutorialspoint.com/articles/category/open-source)[Operating System](https://www.tutorialspoint.com/articles/category/Operating-System)

---

There are several ways to run a script on startup in [Linux](https://www.tutorialspoint.com/operating_system/os_linux.htm), depending on your specific distribution and the type of script you are trying to run.

- **Using systemd** − On systems that use systemd, you can create a systemd service file for your script and configure it to run on startup.

- **Using cron** − You can use the cron daemon to schedule your script to run at startup. You can add a line to the cron table (crontab) to run your script at a specific time on startup.

- **Using init.d** − On systems that use the older init.d system, you can create a script in the /etc/init.d directory and use the update-rc.d command to configure it to run on startup.

- **using .bashrc or .bash_profile** − you can add your script command in your .bashrc or .bash_profile to run the script on every terminal login.

- **Using /etc/rc.local** − you can add your script command to /etc/rc.local file, this file is executed on every startup.

It's important to note that the method you choose will depend on the specific details of your system and the script you are trying to run.

## Using cron

To run a script on startup using cron, you will need to do the following −

- Open a terminal and type "crontab -e" to open the cron table for editing.

- Add a new line at the bottom of the file in the following format −

@reboot /path/to/script arg1 arg2

- This line tells cron to run the script located at "/path/to/script" with arguments "arg1" and "arg2" when the system reboots.

- Save and exit the cron table.

- Verify that the script is correctly added by typing "crontab -l" in the terminal.

- Restart your system to test that the script is being run on startup

**Note** − @reboot can also be replaced by a specific time or interval if you want to schedule the script to run at a different time or interval.

### Example

/path/to/script arg1 arg2 --> this command run the script every minute.

It's important to note that the path to the script must be the full path, not a relative path. Also make sure the script has execute permission.

## Using rc.local

To run a script on startup using the rc.local file, you will need to do the following −

- Open a terminal and type "sudo nano /etc/rc.local" to open the rc.local file for editing.

- Add the following line before the "exit 0" line −

/path/to/script arg1 arg2

- This line tells the system to run the script located at "/path/to/script" with arguments "arg1" and "arg2" when the system starts up.

- Save and exit the file.

- Make the rc.local file executable by typing "sudo chmod +x /etc/rc.local" in the terminal.

- Restart your system to test that the script is being run on startup

It's important to note that the path to the script must be the full path, not a relative path. Also make sure the script has execute permission.

## Using init.d

To run a script on startup using the init.d system, you will need to do the following −

- Open a terminal and create a new script file in the /etc/init.d directory. You can use a text editor such as nano or vi to create the file.

- Add the following lines at the top of the script file −

#!/bin/sh
BEGIN INIT INFO
Provides: scriptname
Required-Start: $all
Required-Stop: $all
Default-Start: 2 3 4 5
Default-Stop: 0 1 6
Short-Description: Start scriptname at boot time
END INIT INFO

- These lines provide information to the init system about the script and when it should be run.

- Add the command to execute your script, for example: /path/to/script arg1 arg2

- Save and exit the file.

- Make the script file executable by typing "sudo chmod +x /etc/init.d/scriptname" in the terminal.

- Update the system to run the script on startup by typing "sudo update-rc.d scriptname defaults" in the terminal.

- Restart your system to test that the script is being run on startup

It's important to note that the path to the script must be the full path, not a relative path. Also make sure the script has execute permission.

## Using systemd

To run a script on startup using systemd, you will need to do the following −

- Create a new service file in the /etc/systemd/system directory. You can use a text editor such as nano or vi to create the file. The file name should be in the format of "yourscriptname.service"

- Add the following lines to the service file

[Unit]
Description=Description of your script
After=network.target
[Service]
ExecStart=/path/to/script arg1 arg2
Restart=always
User=root
Group=root
Type=simple
[Install]
WantedBy=multi-user.target

- Save and exit the file.

- Reload the systemd manager configuration by running the following command "sudo systemctl daemon-reload"

- Enable the service by running the following command "sudo systemctl enable yourscriptname.service"

- Start the service by running the following command "sudo systemctl start yourscriptname.service"

- Restart your system to test that the script is being run on startup

It's important to note that the path to the script must be the full path, not a relative path. Also make sure the script has execute permission.

The "After" field in the Unit section can be set to different values depending on the dependencies of your script, for example if your script requires the network to be up, it should have "network.target" as value, otherwise you can use "default.target"

## Conclusion

There are several ways to run a script on startup in Linux, including using systemd, cron, init.d, .bashrc or .bash_profile and rc.local. The method you choose will depend on the specific details of your system and the script you are trying to run. It is important to note that the path to the script must be the full path, not a relative path, also make sure the script has execute permission. Additionally, it's also important to keep in mind that the method of running script on startup may vary depending on the Linux distribution you are using, so it's a good idea to check the documentation or consult an expert if you are unsure.
