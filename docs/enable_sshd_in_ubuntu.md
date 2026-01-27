# enable the SSH server in ubuntu



To enable the SSH server on Ubuntu, you need to install the `openssh-server` package, ensure the service is running, and allow the connection through the firewall (if active). 

Steps to Enable SSH

1.  Open a Terminal  
    Open the terminal on your Ubuntu system (Ctrl+Alt+T on desktop, or connect via console if on a server).
2.  Update System Packages  
    It's good practice to update your system's package list before installing new software.
    
    bash
    
    ```
    sudo apt update && sudo apt upgrade -y
    ```
    
3.  Install the OpenSSH Server  
    Install the `openssh-server` package from the official Ubuntu repositories. The SSH service should start automatically upon installation.
    
    bash
    
    ```
    sudo apt install openssh-server
    ```
    
4.  Verify the SSH Service Status  
    Check that the SSH service is running and enabled to start on boot:
    
    bash
    
    ```
    sudo systemctl status ssh
    ```
    
    You should see an output indicating `Active: active (running)`. Press `q` to exit the status screen.
5.  Configure Firewall (UFW)  
    Ubuntu uses UFW (Uncomplicated Firewall) by default. If your firewall is enabled, you must allow SSH traffic (port 22 by default).
    *   Check your firewall status:
        
        bash
        
        ```
        sudo ufw status
        ```
        
    *   If the status is active, allow SSH:
        
        bash
        
        ```
        sudo ufw allow ssh
        ```
        
    *   Confirm the new rule:
        
        bash
        
        ```
        sudo ufw status
        ```
        
         

Test the Connection

From another machine, you can test the connection using the SSH client: 

bash

```
ssh username@your_ubuntu_ip_address
```

Replace `username` with your actual Ubuntu username and `your_ubuntu_ip_address` with the IP address of the Ubuntu machine. You may need to use the `ip a` command on the Ubuntu machine to find its IP address. 

For further configuration and security best practices (like key-based authentication), consult the official [Ubuntu documentation](https://documentation.ubuntu.com/server/how-to/security/openssh-server/).
