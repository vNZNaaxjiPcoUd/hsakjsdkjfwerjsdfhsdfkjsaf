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
1. Install certbot
   ```brew install certbot```
2. Turn off nginx
   ```brew services stop nginx```
3. Open 80 port from world to pc
4. Setup domainName to external IP
5. Run certbot
   ```sudo certbot certonly --standalone```
6. Run nginx
   ```brew services start nginx```
7. Check SSL connect.
   - ```https://externalIP/```
   - Show nginx home page
