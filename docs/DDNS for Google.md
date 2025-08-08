DDNS ddclient for google
===============
Can use this ddclient

0. Download from [Releases · ddclient/ddclient · GitHub](https://github.com/ddclient/ddclient/releases)

1. upzip
   
   ```
   tar xvfa ddclient-3.XX.X.tar.gz
   cd ddclient-3.XX.X
   ```

2. install service
   
   ```
   if missing command "autoreconf" then sudo apt install autoconf , make
   
   if missing command "curl" then sudo apt install curl
   
   ./configure \
   --prefix=/usr \
   --sysconfdir=/etc/ddclient \
   --localstatedir=/var
   
   make
   make VERBOSE=1 check
   sudo make install
   ```

3. edit configure
   
   ```
   sudo vi /etc/ddclient/ddclient.conf
   ```
   
    need to update the 
    "use", "google"

4. put in servce
   
   ```
   sudo cp sample-etc_systemd.service /etc/systemd/system/ddclient.service
   sudo systemctl enable ddclient.service
   sudo systemctl start ddclient.service
   ```

5. check it
   
   ```
   nslookup url
   curl https://dns.google/resolve?name=river.jwint.net&type=A
   ```
