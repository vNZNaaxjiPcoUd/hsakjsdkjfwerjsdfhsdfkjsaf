# DDNS google 

[Set up DNSSEC &amp; DNS security - Google Domains Help](https://support.google.com/domains/answer/6147083?hl=en)



## Use Dynamic DNS

**Important:** Dynamic DNS works with IPv4 and IPv6 addresses, but not at the same time.

Dynamic DNS allows you to direct your domain or a subdomain to a resource that's behind a gateway and has a dynamically assigned IP address. To use Dynamic DNS, you must use the default name servers of Google Domains.

If you set up Dynamic DNS with Google Domains, you can:

- Create an A or AAAA record for your domain or subdomain that makes the Google name servers expect a dynamic IP.
- Generate a username and password that your host or server can use to communicate the new IP address to the Google name servers.

After you set up Dynamic DNS, you must set up a client program on your host, server, or gateway that does the following:

- Detects IP address changes
- Uses the generated username and password
- Communicates the new address to the Google name servers

### Set up dynamic DNS

1. On your computer, sign in to [Google Domains](https://domains.google.com/registrar).
2. Select your domain.
3. Click Menu ![](https://storage.googleapis.com/support-kms-prod/BF599D703352033F81E4F91A97B44C1007A6) ![and then](https://lh3.googleusercontent.com/3_l97rr0GvhSP2XV5OoCkV2ZDTIisAOczrSdzNCBxhIKWrjXjHucxNwocghoUa39gw=w36-h36) **DNS**.
4. Select **Default name servers Google Domains (Active)**.
- If “Custom name servers (Active)” is selected, you already have custom name servers and can't use Google Domains’ Dynamic DNS service.
4. Click **Show advanced settings**.
5. Click **Manage dynamic DNS** ![and then](https://lh3.googleusercontent.com/3_l97rr0GvhSP2XV5OoCkV2ZDTIisAOczrSdzNCBxhIKWrjXjHucxNwocghoUa39gw=w36-h36) **Create new record**.
6. To assign a Dynamic IP, enter the name of the subdomain or root domain.
7. Click **Save**.

The following are some other options to manage your Dynamic DNS:

- **To view the record values:** Next to the record, click the triangle.
- **To view the username and password created for a record:** Click **View Credentials**.
- **To configure your gateway or client software so that it contacts the Google name servers:** Use the username and password created for the record.
- **To delete a record:**
   1. Go to “Resource records.”
   2. Next to “Dynamic DNS,” click the triangle.
   3. Select **Delete**.

### Set up a client program on your gateway, host, or server

There are several popular dynamic DNS clients in use, like DDclient and INADYN. Most routers can detect IP changes and communicate them with the name servers through their built-in software.

Configure your dynamic DNS client with the following:

- **Provider or DNS or Service:** The name of your DNS Provider
- **Username or credential:** The generated username in the Dynamic DNS record
- **Password or credential:** The generated password in the Dynamic DNS record

After you create the record and configure your client software, test the record. Enter the subdomain and domain into a browser, or appropriate client, and make sure they connect to the correct resource.

**Tip:** Google Domains uses the dyndns2 protocol.

### Examples

DDclient now has support for Google Domains.

| **DDclient with Google Domains Support**                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| ddclient.conf entries:`ssl=yes``protocol=googledomains``login=generated_username``password=generated_password``your_resource.your_domain.tld` |

General client configuration examples:

| **DDclient**  <br>without Google Domains support                                                                                                                                   | **INADYN**                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sample ddclient.conf entries:`protocol=dyndns2``use=web``server=domains.google.com``ssl=yes``login=generated_username``password=generated_password``your_resource.your_domain.tld` | Add the following to your inadyn.conf`system default@domains.google.com``username generated_username``password generated_password``alias sub.domain.tld` |

## Update your Dynamic DNS record with the API

Dynamic DNS client software automatically updates your dynamic DNS record. You can perform manual updates with the API by making a POST request or GET to the following URL:

`**domains.google.com/nic/update**`

The API requires HTTPS. Here’s an example request:

`https://username:password@domains.google.com/nic/update?hostname=subdomain.yourdomain.com&myip=1.2.3.4`

## Set a user agent

**Important:** You must also set a user agent in your request.

During a test with the URL directly above, `domains.google.com/nic/update`, web browsers generally add a user agent for you. The final HTTP query sent to our servers should be similar to this:

Example HTTP query:

`POST /nic/update?hostname=subdomain.yourdomain.com&myip=1.2.3.4 HTTP/1.1   Host: domains.google.com   Authorization: Basic base64-encoded-auth-string   User-Agent: Chrome/41.0 your_email@yourdomain.com`

**Request Parameters:**

| **Parameter**       | **Required or Optional**                                        | **Description**                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `username:password` | Required                                                        | The generated username and password associated with the host that is to be updated.                                                                                                                                                                             |
| `hostname`          | Required                                                        | The hostname to be updated.                                                                                                                                                                                                                                     |
| `myip`              | - Optional for IPv4.<br>- Required if you have an IPv6 address. | The IP address to which the host is set. If not supplied, we use the IP of the agent that sent the request.**Important:** If your agent uses an IPv6 address, `myip` is required. You can check your agent’s IP address at: https://domains.google.com/checkip. |
| `offline`           | Optional                                                        | Sets the current host to offline status. If an update request is performed on an offline host, the host is removed from the offline state.<br>Allowed values are:<br><br>- `yes`<br>- `no`                                                                      |

After the request is processed, one of the following responses is returned.

**Important:** Make sure you interpret the response correctly, or you risk blocking your client from our system.

| **Response**                  | **Status** | **Description**                                                                                                                                           |
| ----------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `good {user’s IP address}`    | Success    | The update was successful. You should not attempt another update until your IP address changes.                                                           |
| `nochg {user’s IP address}`   | Success    | The supplied IP address is already set for this host. You should not attempt another update until your IP address changes.                                |
| `nohost`                      | Error      | The hostname doesn't exist, or doesn't have Dynamic DNS enabled.                                                                                          |
| `badauth`                     | Error      | The username/password combination isn't valid for the specified host.                                                                                     |
| `notfqdn`                     | Error      | The supplied hostname isn't a valid fully-qualified domain name.                                                                                          |
| `badagent`                    | Error      | Your Dynamic DNS client makes bad requests. Ensure the user agent is set in the request.                                                                  |
| `abuse`                       | Error      | Dynamic DNS access for the hostname has been blocked due to failure to interpret previous responses correctly.                                            |
| `911`                         | Error      | An error happened on our end. Wait 5 minutes and retry.                                                                                                   |
| `conflict A<br>conflict AAAA` | Error      | A custom A or AAAA resource record conflicts with the update. Delete the indicated resource record within the DNS settings page and try the update again. |





# DDCLIENT

https://ddclient.net/







# Introduction

`ddclient` updates dynamic DNS entries for accounts on a wide range of dynamic DNS services.

This is applicable to a wide range of use cases. It’s commonly used when you have an IP address that changes regularly (e.g. on a residential network), that you want to keep service pointing at (e.g. your domain name).

# [](https://ddclient.net/#installation)Installation

See the [GitHub README](https://github.com/ddclient/ddclient?tab=readme-ov-file#installation).

# [](https://ddclient.net/#configuration)Configuration

ddclient has two primary means of configuration:

- (Recommended) The `ddclient.conf` file, which defaults to `/etc/ddclient/ddclient.conf`.
- Passing in arguments via [the command line](https://ddclient.net/#command-line-arguments).

There are three key pieces to configuring ddclient:

- [General settings](https://ddclient.net/general.html)
- [Routers](https://ddclient.net/routers.html): where should ddclient find your IP? For example, [ipify](https://www.ipify.org/), or one of 20+ others.
- [Protocols](https://ddclient.net/protocols.html): what should ddclient update when your IP changes? For example, [DuckDNS](https://www.duckdns.org/), [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/managing-dynamic-ip-addresses/), or one of [30+ others](https://ddclient.net/protocols.html).

## [](https://ddclient.net/#example)Example

A typical configuration file looks like:

```
# General config
daemon=300

# Router
usev4=webv4,webv4=ipify-ipv4

# Protocol
protocol=dyndns2
login=myUsername
password=myPassword
myhost.dyndns.org
```

With this config, executing `ddclient` would start a daemon that every 300 seconds would:

1. Get your IPv4 address from the ipify web service.
2. Login to your dyndns account with the given username and password, and update the `myhost.dyndns.org` domain to your current IPv4 address.

You can set up `ddclient` to run on automatically using other packages on your system, such as [systemd](https://github.com/ddclient/ddclient/blob/master/sample-etc_systemd.service), [cron](https://github.com/ddclient/ddclient/blob/master/sample-etc_cron.d_ddclient), [dhclient](https://github.com/ddclient/ddclient/blob/master/sample-etc_dhclient-exit-hooks), [dhcpc](https://github.com/ddclient/ddclient/blob/master/sample-etc_dhcpc_dhcpcd-eth0.exe) and others. There are additional sample startup scripts in the [GitHub repository](https://github.com/ddclient/ddclient).

## [](https://ddclient.net/#using-environment-variables)Using environment variables

As of version 3.11.0_1, ddclient supports using environment variables inside the configuration file. By appending ‘_env’ to a parameter, ddclient will interpret the value of that parameter as the name of an environment variable and use the value of that environment variable as the configuration value. This allows to keep sensitive information such as the login or password outside of the configuration file.

```
login_env=DDCLIENT_LOGIN
password_env=DDCLIENT_PASSWORD
myhost.dyndns.org
```

This example config file will use the value of the environment variables DDCLIENT_LOGIN and DDCLIENT_PASSWORD as the login and password for the domain myhost.dyndns.org respectively.

## [](https://ddclient.net/#command-line-arguments)Command-line arguments

For simplicity, it’s recommended you use the `ddclient.conf` file over command line arguments. If you can’t use the default location, you can use the `file` argument only to read config from a different file, e.g. `ddclient -file ddclientCustom.conf`

However, any arguments can also be provided via the command line when invoking ddclient. For example:

```
ddclient -daemon 300 -protocol dyndns2 -login myUsername -password myPassword myhost.dyndns.org
```

ddclient prioritizes command line arguments, then falls back to `ddclient.conf`, then falls back to in-built defaults.

# [](https://ddclient.net/#support)Support

If you need extra help, want to report a bug, or submit a feature request, [create a GitHub issue](https://github.com/ddclient/ddclient/issues/new). Before posting, check it is not a duplicate and the problem is present on the latest version of ddclient.

If you want to contribute code to ddclient, raise a pull request on GitHub.
