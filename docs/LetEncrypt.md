Let encrypt
============

https://letsencrypt.org/

SSL support 

#### Tool
https://certbot.eff.org/

#### Nginx on MacOS
https://certbot.eff.org/instructions?ws=nginx&os=osx

0. Install Brew

   ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
2. Install certbot

   ```brew install certbot```
4. Turn off nginx

   ```brew services stop nginx```
6. Open 80 port from world to pc
7. Setup domainName to external IP
8. Run certbot

   ```sudo certbot certonly --standalone```
10. Run nginx

    ```brew services start nginx```
11. Opne port 443 from world to pc, can close port 80.
12. Setup nginx to serve SSH with cert,key
13. Check SSL connect.
   - ```https://externalIP/```
   - See nginx home page
