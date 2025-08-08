# Adding DNS records to Squarespace
# Adding custom DNS records to your Squarespace-managed domain

#### Add custom DNS records to connect your site to the third-party tools you use, like Google Site Verification or Salesforce Marketing Cloud.

Last updated August 8, 2024

English

Use this guide to find where you can add more DNS records to your [DNS settings](https://support.squarespace.com/hc/en-us/articles/205812348). You'll only need to edit these records if you're using a third-party service that needs access to your domain.

Note

Our scope of support for DNS records is limited. We can help with showing you where to add records to your DNS settings. We can’t provide technical advice about DNS records or information about how DNS records work with other services. If you need more help, you can get peer-to-peer help in the Domains section of the [Squarespace Forum](https://forum.squarespace.com/forum/222-domains/) or contact the service you're trying to connect, using our [sample message](https://support.squarespace.com/hc/articles/217783698#toc-dns-records-help---ask-technical-questions-about-your-third-party-dns-records).

### When to use this guide

Follow this guide for help editing your DNS settings if:

- Your domain is registered with Squarespace
- Your domain is registered with a third party and connected to Squarespace using Nameserver Connect. At this time, the following records aren't available for connected domains: 
  - [SSHFP](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01HX7JHZ5H3S1MVDE7M5FD492R)

If your domain is connected via DNS Connect, edit your DNS settings in your account with your third-party domain provider instead of following this guide.

Tip

If you're not sure which of these applies to you, visit [Nameserver Connect vs. DNS Connect for domain connections](https://support.squarespace.com/hc/articles/8387079117581-Nameserver-Connect-vs-DNS-Connect-for-domain-connections#toc-dns-records-access-for-third-party-domains) to learn if your domain is using DNS Connect or Nameserver Connect.

## A records

A records point a domain name to the IP address of the hosting server.

If you’re using an A record to point a Squarespace subdomain, [follow the steps in our pointing guide](https://support.squarespace.com/hc/articles/215744668#toc-point-a-squarespace-subdomain).

To add an A record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **A**.
7. In the **Host** field, enter the host record you’re pointing.
8. In the **Data** field, enter the IP address you’re pointing to.
9. Click **Save** to add the record to your settings.

## AAAA records

An AAAA record points a domain name to an IP address. You'll need an AAAA record to point to a specific IPv6 address of a server.

To add an AAAA Record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **AAAA**.
7. In the **Host** field, enter the host record you’re pointing to. If you don't have a host value, you can leave the field blank or enter *@* to point the AAAA record to your domain.
8. In the **Data** field, enter the IPv6 address you’re pointing to.
9. Click **Save** to add the record to your settings.

Tip

If you see an error stating that your IPv6 address is invalid, it may be compressed. You can use AAAA record lookup tools (like [dnschecker.org](https://dnschecker.org/)) to find the full record.

## ALIAS records

An ALIAS record points one domain to another domain. 

To add an ALIAS record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **ALIAS**.
7. In the **Host** field, enter *@*.
8. In the **Data** field, enter the domain name you’re pointing to, like *example.com*.

Tip

If you've enabled [DNSSEC protection](https://support.squarespace.com/hc/articles/4404183898125#toc-dnssec) for your domain, an "ALIAS records are incompatible with DNSSEC" error message will appear when you try to add ALIAS records. You can fix this issue by [turning off DNSSEC](https://support.squarespace.com/hc/articles/4404183898125#toc-disable-dnssec-settings), and then adding the ALIAS records by following the steps above.

## CAA records

A Certification Authority Authorization (CAA) is a security record that provides additional confirmation for Certification Authorities (CA) when they’re validating an [SSL certificate](https://support.squarespace.com/hc/articles/205815898) associated with your site. In most cases, you don’t need CAA records, because all Squaresiace sites include free SSL certificates for automatic domain security. Most Squarespace sites don’t need CAA records because Squarespace protects your site and its content by offering [free SSL certificates for all domains](https://support.squarespace.com/hc/articles/205815898). 

If you have advanced security needs, you can purchase additional protection from a provider like [Cloudflare](https://support.squarespace.com/hc/en-us/articles/213469948).

You’ll need the CAA record from your provider to add to the **Data** field. CAA records contain a flag, tag and CA domain. They look something like this: *0 issue “example.org”*.

To add a CAA record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **CAA**.
7. In the **Host** field, enter *@*.
8. In the **Data** field, enter data from your provider. It should be in flag, tag and value format: *0 issue “example.org*.
9. Click **Save** to add the record to your settings.

## CNAME records

A CNAME record points a subdomain — which is anything that appears before your root domain, including “www” — to another domain name. CNAME records should always point to a URL. The URL can't contain special characters such as slashes (/) or colons (:).

You might need to add a CNAME record if:

- You’re running special services (such as an FTP)
- A third-party service requires a CNAME to verify domain ownership

If you’re using a CNAME record to point a Squarespace subdomain, [follow the steps in our pointing guide](https://support.squarespace.com/hc/articles/215744668#toc-point-a-squarespace-subdomain) instead.

To add a CNAME record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **CNAME**.
7. In the **Host** field, enter the host record.
8. In the **Data** field, enter the name you’re pointing to.
9. Click **Save** to add the record to your settings.

## DKIM and SPF records

DKIM and SPF records are types of [TXT records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#toc-txt-records) that authenticate your email account and prevent people from sending unauthorized emails from your account. If a third-party provider asks you to add a DKIM or SPF record to your Squarespace domain, you'll add it as a TXT or CNAME record. For many providers, DKIM is sufficient for their systems, but some may require an SPF record too.

You'll need a DKIM or SPF record from your provider to add to the **Data** field. For SPF records, this starts with *v=spf1*.

To add a DKIM or SPF record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **TXT** or **CNAME**.
7. In the **Host** field, enter the host or name information from your provider. If no host or name information is listed, enter *@* in this field.
8. In the **Data** field, enter the DKIM or SPF record from your provider.
9. Click **Save** to add the record to your settings.

### Merge SPF records

You can only add one SPF record to a Squarespace domain. If you need to add multiple SPF records, merge the records into one.

Note

If you’re seeing a “Custom records not saved” error message, delete your SPF records from your DNS settings before adding new SPF records.

To merge SPF records:

1. Look in your custom domain's DNS settings for one or more TXT records with @ host pointing to a v=spf1 value. These are SPF records.
2. Pick one of these SPF records to keep.
3. In the other SPF record or records, copy everything between **v=spf1** and the final **~all, ?all**, or **-all** in the record data.
4. Paste the information from the record or records into the data field for the record you're keeping before the final **~all, ?all**, or **-all** but after the existing data. There should be a space between each record's information.
5. Look at how the other SPF record or records end. If any of them end in **-all**, change this to ***~all***. Otherwise, leave it as *~all*.
6. Delete all the SPF records except the one you decided to keep and add data to, then save changes.

Here's an example:

![Example_of_a_merged_spf_record.png](https://support.squarespace.com/hc/article_attachments/11773739442061)

When you create your merged SPF record, replace "fancymail.com" and "businessmail.com" with your third-party provider's addresses. If you aren't sure what address they use, contact your providers for more help.

Note

If you have email forwarding setup, and also need to add multiple SPF records, [contact us](https://support.squarespace.com/hc/requests/new) for further assistance.

## DMARC records

A DMARC record is a type of [TXT record](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#toc-txt-records) that verifies your domain when you send [Email Campaigns](https://support.squarespace.com/hc/articles/360001280588) or other marketing using your custom email address. By adding a DMARC record and allowing mail providers to verify your domain, you can help minimize how often your marketing emails get [flagged as spam](https://support.squarespace.com/hc/articles/360001280768).

How you add the DMARC record depends on what service you use to send marketing emails:

- If you're sending Email Campaigns, [create your sender details](https://support.squarespace.com/hc/articles/360001280728) and your Squarespace domain will automatically verify. Should you have trouble verifying or accidentally delete the records, you can [delete and recreate your sender details to verify](https://support.squarespace.com/hc/articles/360001280728#toc-step-3---verify-your-domain).
- If you're sending marketing emails through a third-party service, contact the service provider for the records needed to verify your email address. Add the DMARC record in your DNS settings panel, noting these details:  
  - In the **Type** dropdown menu, select **TXT**.
  - In the **Host** field, enter *_dmarc* without your domain at the end. Our system automatically adds your domain.

## DS and DNSKEY records

DS and DNSKEY records contain security keys automatically added to your domain when [domain name system security extension (DNSSEC) protection](https://support.squarespace.com/hc/en-us/articles/4404183898125) is enabled. DNSSEC is an advanced form of domain security that uses DS and DNSKEY records to authenticate your domain’s DNS records.

Note

Due to regulatory reasons, DNSKEY records are only available for migrated .[de](https://support.squarespace.com/hc/en-us/articles/360027272972) and [.nl](https://support.squarespace.com/hc/en-us/articles/360061572111) domains [migrated from Google](https://support.squarespace.com/hc/en-us/articles/17131164996365).

To add more DS records, you can purchase them from a third party, like [Cloudflare](https://support.squarespace.com/hc/en-us/articles/213469948-Using-Cloudflare-with-Squarespace). You can add a total of up to eight DS records or DNSKEY records to your DNS settings.

Tip

You can add a maximum of eight records to the DNSSEC panel.

To add DS records or DNSKEY records:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain you're editing.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **DS** or **DNSKEY**.
7. In the **Host** field, enter the host or name information from your provider. If no host or name information is listed, enter *@* in this field.
8. In the **Data** field, enter the DS record from your provider. It should be in this format: *key_tag algorithm digest_type digest*.
9. Click **Save** to add the record to your settings.

## HTTPS

All Squarespace domains come with [free SSL certificates](https://support.squarespace.com/hc/articles/205815898) which provides basic HTTPS protection. Most Squarespace sites don’t need additional HTTPS protection. If you have advanced security needs, you can reach out to a third-party provider, like [Cloudflare](https://support.squarespace.com/hc/en-us/articles/213469948-Using-Cloudflare-with-Squarespace), to purchase additional HTTPS protection.

You’ll need the HTTPS record from your provider to add to the **Data** field.

To add an HTTPS record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **HTTPS**.
7. In the **Host** field, enter *@*.
8. In the **Data** field, enter data from your provider.
9. Click **Save** to add the record to your settings.

## MX records

An MX record tells servers where to route your email. In Squarespace, you’ll need to add MX records if you’re using a third-party custom email address with your Squarespace domain.

Usually, you’ll enter multiple MX records for one domain. Your email provider should provide the priorities to enter for each record.

If you’re using Google Workspace or Zoho Mail, save time by using our [preset records](https://support.squarespace.com/hc/articles/205812348#toc-add-a-record-using-presets) instead. If you’re adding any other MX records, use the **Custom Records** section.

### Option 1 - Add Google Workspace or Zoho Mail preset records

- If you signed up for a Google Workspace account through Squarespace, you don’t need to add the Google Workspace MX records — we do this for you automatically when you create your Google Workspace account. If you removed them, you can add them back with the preset.
- If you’re using Zoho Mail with your Squarespace domain, you’ll add the preset [when you link the account](https://support.squarespace.com/hc/articles/206541827#toc-step-3---add-preset-mx-records).
- For more about using presets, visit [Accessing your Squarespace domain's DNS settings](https://support.squarespace.com/hc/articles/205812348).

### Option 2 - Add custom records manually

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **MX**.
7. In the **Host** field, enter *@* (If you’re adding records to a subdomain, enter the subdomain here instead).
8. In the **Priority** field, enter the priority number for your provider. You can enter any number from *0* through *255*.
9. In the **Data** field, enter the mail server you’re directing to. This is usually a URL.
10. Click **Save** to add the record to your settings.

Repeat this process for all the MX records you need to add, changing the priority for each record as needed.

## NS records

When you register a domain with Squarespace, we automatically create nameservers to store your resource records. Resource records contain information about the underlying components of your domain, like your email provider or web host. You can add additional nameservers set up through another provider to your DNS settings.

You’ll need the NS record from your provider to add to the **Data** field.

To add an NS record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **NS**.
7. In the **Host** field, enter *@*.
8. In the **Data** field, enter data from your provider.
9. Click **Save** to add the record to your settings.

## PTR records

PTR records are used for the Reverse Domain Name System (DNS) lookup. PTR records confirm the validity of your domain’s IP addresses. PTR records are often used when setting up a mail server for a site.

You’ll need the PTR record from your provider to add to the **Data** field.

To add a PTR record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **PTR**.
7. In the **Host** field, enter *@*.
8. In the **Data** field, enter data from your provider.
9. Click **Save** to add the record to your settings.

## SRV records

An SRV record, or a Service Record, helps your domain connect to email or other services.

### Step 1 - Get information from your provider

Get the following values from the service you're connecting, and copy them somewhere easily accessible. You'll need them for Step 3.

| **Value Type**          | **Definition and Tips**                                                                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Service**             | - The service name of the SRV record<br>- Usually begins with an underscore, like *_smtp* or *_sip*                                                                                                                            |
| **Protocol**            | - The protocol that the service uses<br>- Usually begins with an underscore, like *_tcp* or *_tls*                                                                                                                             |
| **Priority (optional)** | - How long the server should cache this information<br>- Usually a number without commas, like *2000* or *43200*<br>- Might also be called the **TTL**<br>- If your provider didn’t assign a Priority or TTL, leave this blank |
| **Weight**              | - The weight of the SRV record, which determines the target to contact first<br>- Should be a single-digit number, like *1* or *5*                                                                                             |
| **Port**                | - The port number for the service<br>- Usually a number, like *80* or *5060*                                                                                                                                                   |
| **Target**              | - The host providing the service<br>- Should be a URL, like *server.test.com*                                                                                                                                                  |

### Step 2 - Add SRV record

Create a custom record in your DNS settings using the values from Step 1:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **SRV**.
7. In the **Host** field, delete the @ placeholder and enter the Service and Protocol, separated by a period. For example: *_service._protocol*
8. In the **Priority** field, enter the Priority or TTL number, if you have one. If you don’t have a Priority or TTL, leave this blank.
9. In the **Data** field, enter the Weight, Port, and Target, with a single space between each one. For example: *1 100 target.test.com*
10. Click **Save** to add the record to your settings.

## SSHFP records

A Secure Shell Fingerprint (SSHFP) record verifies the trustworthiness of the internet devices you’re connecting to through Secure Shell (SSH). SSHFP records are an option if you have advanced security needs. You can reach out to a third-party provider, like [Cloudflare](https://support.squarespace.com/hc/en-us/articles/213469948-Using-Cloudflare-with-Squarespace), to generate an SSHFP record.

You’ll need the SSHFP record from your provider to add to the **Data** field. For SSHFP records, it’s an Algorithm Type Fingerprint format. There are spaces in between the data string, and it looks something like this: *2 1 123456789abcdef.*

Accessing this feature

SSHFP is only available for domains registered with Squarespace. At this time, SSHFP is unavailable for domains that are registered with a third party and connected to Squarespace using Nameserver Connect.

To add an SSHFP record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **SSHFP**.
7. In the **Host** field, enter *@*.
8. In the **Data** field, enter data from your provider. It should be in this format: *2 1 123456789abcdef*.
9. Click **Save** to add the record to your settings.

## SVCB records

A Service Binding (SVCB) record adds multiple security certificates to a site. Most Squarespace sites don’t need SVCB records because because Squarespace protects your site and its content by offering [free SSL certificates for all domains](https://support.squarespace.com/hc/articles/205815898). If you have advanced security needs, you can reach out to a third-party provider, like [Cloudflare](https://support.squarespace.com/hc/en-us/articles/213469948-Using-Cloudflare-with-Squarespace), to generate an SVCB record.

You’ll need the SVCB record from your provider to add to the **Data** field.

To add an SVCB record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **SVCB**.
7. In the **Host** field, enter *@*. (If you’re adding records to a subdomain, enter the subdomain here instead).
8. In the **Data** field, enter data from your provider.
9. Click **Save** to add the record to your settings.

## TLSA records

A Transport Layer Security Authentication (TLSA) record helps validate any SSL or TLS certificates added to your site. TLSA records provide an additional layer of protection that verify your servers are secure. Most Squarespace records don’t need TLSA records because because Squarespace protects your site and its content by offering [free SSL certificates for all domains](https://support.squarespace.com/hc/articles/205815898). If you have advanced security needs, you can use a third-party provider, like [Cloudflare](https://support.squarespace.com/hc/en-us/articles/213469948-Using-Cloudflare-with-Squarespace), to generate a TLSA record.

You’ll need the TLSA record from your provider to add to the **Data** field.

To add an TLSA record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **TLSA**.
7. In the **Host** field, enter *@*.
8. In the **Data** field, enter TLSA record from your provider.
9. Click **Save** to add the record to your settings.

## TXT records

Use a TXT record to add special text to a hostname. Some providers may ask you to add a TXT record to help verify your domain or email address. The TXT field has a 255 character limit, which is 1024 bits.

To add a TXT record:

1. Open your [domains dashboard](https://account.squarespace.com/domains).
2. Click the domain name. If you have multiple Squarespace domains, you'll manage their DNS records separately.
3. Click **DNS**, and then click **DNS Settings**.
4. Scroll down to **Custom Records**.
5. Click **Add record**.
6. In the **Type** dropdown menu, select **TXT**.
7. In the **Host** field, enter the host name. To add your domain as the host name, enter @ into the **Host** field.
8. In the **Data** field, enter the TXT record value. This is a combination of letters, numbers, and symbols.
9. Click **Save** to add the record to your settings.

## Splitting DNS records

Several groups in charge of administering the internet require some DNS records to be 255 characters or smaller. If ‌any of your records are longer than 255 characters, you can split your long DNS record into smaller strings of characters to add multiple strings under one DNS record. You can use a third-party [online DNS record splitter tool](https://www.mailhardener.com/tools/dns-record-splitter) to automatically do this for you.

To split any long DNS record manually, you can follow our example below.

Tip

This example uses TXT records but is applicable to the following DNS records: [A records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01H9NCM0N3S8776G40TQ4QABGA), [AAAA records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01H9NCM0N4WJRT6C774WNVSRZS), [CNAME records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01H9NCM0N4832HDS7MJJT507T3), [DMARC records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01H9NCM0N4V4A7TA81M0P30H8V), [SPF records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01H9NCM0N4X0S4FGN8RQRYBTGR) and [TXT records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01H9NCM0N4N0TRYNVE66SG18CS).

Here's a TXT record that's over 255 characters:

v=EXAMPLE; k=rsa; p=MIIBIjANBabcdefgG9w0ABCDEFGHIJKMIIBCgABCDEFGpABCDFGnA12BzPUV46P3GeOoK2tAB1OCd2iefghi4JkLmnoPQ+EFGnA12BzPUV46P3GeOoK2tAB1OCd2iefghi4JkLi4JkLmnoPQ+3aBc1DEFGHIP12eAB!YJ/ABZfCDmnoPQ+3aBc1DEFGHIP12eAB!YJ/ABZfCDJk2LMNoP12eAB!YJ/ABZfCDuJE4HclTjAjrZkFAAhaHdAAA

To add the TXT record to the DNS settings, break the record into multiple strings that are under 255 characters, as seen below:

v=EXAMPLE1; k=rsa; p=MIIBIjANBabcdefgG9w0ABCDEFGHIJKMIIBCgABCDEFGpABCDFGnA12BzPUV46P3GeOoK2tAB1OCd2iefghi4JkLmnoPQ+EFGnA12BzPUV46P3GeOoK2tAB1OCd2iefghi4JkLi4JkLmnoPQ+3aBc1DEFGHIP12eAB!

YJ/ABZfCDmnoPQ+3aBc1DEFGHIP12eAB!YJ/ABZfCDJk2LMNoP12eAB!YJ/ABZfCDuJE4HclTjAjrZkFAAhaHdAAA

Individually add each TXT record [using the steps above](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#toc-txt-records), repeating the steps to add the remaining strings of characters.

## Troubleshooting

### The record isn't saving.

**Replace placeholder values**

When adding a custom record, ensure you replace the gray placeholder values in the **Host** and **Data** fields. These placeholders are examples of the correct format for your reference, but they aren't real. If you add the record without replacing these two fields, the record won't save properly.

The **Priority** field, however, is optional. You can save a record without entering a Priority.

**Check the Host field for the correct format**

If you’re adding custom records, your domain name is automatically added after any Host value.

For example, if your provider asks you to use a Host value of *mail.yourdomain.com*, you only need to enter *mail* in the **Host** field. Squarespace automatically adds *.yourdomain.com*, even though it’s not visible in the panel.

If your provider asks you to enter your domain without a value in front of it, like *yourdomain.com*, enter *@* in the **Host** field.

Note

It’s not possible to enter two CNAMEs with the same Host value.

If you receive a “This host is already in use" message, you’re adding information to a **Host** field that’s already in use by another **Host** field.

For example, if you try adding "www" to the **Host** field of a CNAME record and a TXT record, the records won't save. Your domain can only have one record using "www" as the host.

To fix this, consider editing the **Host** field of the record you're adding so it doesn't conflict.

**Check the Data field for the correct format**

If you receive an "Invalid IP address" or "Host name error" message, review the Data field to ensure the information is entered correctly. Remove any periods at the end of the value, as our system can't save records formatted this way.

**Check for conflicting records**

If you receive a "We were unable to save this record because it conflicts with an existing record" message, review the DNS settings already in place. This message appears due to conflicting DNS records.

To fix this, consider editing or deleting the domain's current records. You can also change the custom record you're adding so it doesn't conflict.

### Can't change the Priority field

You can only edit the Priority field when creating custom MX or SRV records. If you're adding any other type of custom record, the Priority field appears, but you can't click it.

### Error message in AAAA records: Not a valid IPv6 address

If you're adding an AAAA record, ensure that you've added the fully expanded version of the IPv6 address to the **Data** field. You'll know you're using a shortened address if there's a "Not a valid IPv6 address" error in DNS records, or if there's a double colon in the address instead of a single one.

For example, here are both versions of the same IPv6 address:

- Incorrect, shortened address: *2620:12a:8000::3*
- Correct, expanded address: *2620:12a:8000:0:0:0:0:3*

### Error message: Enter valid alias data

There are two reasons this error might happen. Your DNS record is longer than 255 characters, or there's an extra character in a text string.

To fix the issue:

1. If your DNS records are larger than 255 characters, [follow our steps](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd#h_01H9NCM0N4KWCCWTCACC4K3C5P) to split the records into shorter text strings. Then, add each string to your [DNS settings](https://support.squarespace.com/hc/articles/205812348#toc-open-your-domain-s-dns-settings).
2. Look for any typos in your DNS settings, and check for any extra characters at the end of the text string. For example, this error can sometimes occur if there's a "." at the end of a text string. Delete any extra characters and try adding the record again.
3. If you still have trouble, [contact us](https://support.squarespace.com/hc/requests/new) and we'll investigate.

[Adding custom DNS records to your Squarespace-managed domain &ndash; Squarespace Help Center](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-custom-DNS-records-to-your-Squarespace-managed-domain?platform=v6&websiteId=6670df127196c07119d035bd)

# 關於 email security 的大小事 — 設定篇 SPF

[#Security](https://tech-blog.cymetrics.io/tags/security/)[#Email Security](https://tech-blog.cymetrics.io/tags/email-security/)

![crystal](https://tech-blog.cymetrics.io/img/authors/crystal_logo.png)

[crystal](https://tech-blog.cymetrics.io/posts/crystal)

14 Jul 2021

上一次我們深入瞭解了 email security 的原理與應用場景，這次來看看 SPF、DKIM、DMARC 該如何設置吧！

請注意，這裡的『設定』並不是回答你『如何在 google 或是 Office365 設好這些紀錄』、『用 XX 服務結果信寄不到怎麼辦』，這種操作配置的教學文請參考官方文件，畢竟 email provider 千千百百家，各自可能有的問題更是難以彙整。

我想告訴你的『設定』是 SPF、DMARC 的 DNS 紀錄本身有哪些標籤，以及設置這些選項時可能不小心踩到哪些地雷，導致收信方的 email server 在驗證你的郵件時出現非預期地報錯，而判斷驗證失敗。另外，也會告訴你如果有多個子網域，或有使用第三方寄信服務時該怎麼辦。

總之，可以想成是回答你『我該怎麼理解這些紀錄』和『每個機制有哪些選項跟限制』，而不是針對單一 email provider 的教學文。

如果你還不太懂 SPF、DKIM、DMARC 是什麼，或是不清楚郵件傳遞過程中的各個角色與職責（MDA、MTA⋯⋯們），或是想了解更多範例與延伸議題，請看本系列其他篇：

有不懂或是想了解更多範例與延伸議題，請看本系列其他篇～  
如果你還不太懂 SPF、DKIM、DMARC 👉 [關於 email security 的大小事 — 原理篇](https://tech-blog.cymetrics.io/posts/crystal/email-sec-theory)  
如果你在找 DKIM、DMARC 的設定 👉 [關於 email security 的大小事 — 設定篇 DKIM、DMARC](https://tech-blog.cymetrics.io/posts/crystal/email-sec-settings-dkimdmarc)  
如果你想搭配設定範例 👉 [關於 email security 的大小事 — 範例篇](https://tech-blog.cymetrics.io/posts/crystal/email-sec-examples)  
如果你想了解延伸議題 👉 [關於 email security 的大小事 — 延伸篇](https://tech-blog.cymetrics.io/posts/crystal/email-sec-extra)

## SPF

先來看看 SPF。SPF 紀錄的語法說複雜不複雜，但各種小細節常常讓人頭疼，一個很完整的語法介紹可以參考 [Dmarcian-SPF record syntax](https://dmarcian.com/spf-syntax-table)。

如果想配著真實的信件看，建議你可以用 [mxtoolbox](https://mxtoolbox.com/SuperTool.aspx) 之類的工具一邊查詢 SPF 紀錄，一邊點開信件原始內容看 SPF 驗證結果：

![](https://tech-blog.cymetrics.io/img/posts/crystal/email-sec-settings-spf/spf-result-1920w.png)

這裡我們先講一下 SPF 驗證時會出現的幾種結果：

- `Pass`：IP 於列表中，驗證成功。採取行為是：accept
- `Fail`：IP 不在列表中，驗證失敗。採取行為是：reject
- `SoftFail`：IP 不在列表中，驗證失敗，但不要直接 reject。採取行為是：accept but mark（標注失敗）
- `Neutral`：不予置評，即使 IP 不在列表中也不視為失敗，視同 `None`。採取行為是：accept
- `None`：沒有足夠資訊得出結論（例如未找到 SPF 紀錄）。採取行為是：accept
- `PermError`：驗證過程出錯，例如格式錯誤的 SPF 紀錄。採取行為是：unspecified（未定義），交由收信方 email server 自行決定。
- `TempError`：驗證過程出錯，但沒有 PermError 嚴重。採取行為可能是 accept 或暫時 reject，由收信方 email server 自行決定。

SPF 的小地雷就在於，很多種設置上的小失誤可能導致 PermError、TempError、或是其他削弱 SPF 安全性的結果。因為我們無法預期收信方 email server 會採取什麼行為，所以也無法確保送到收件人手上的信件都有受到 SPF 紀錄的保護。要是對方遇到 Error 一律採取 accept，或是乾脆選擇忽略這筆 SPF 紀錄，那不就形同虛設了嗎？

下面我們看看 SPF 紀錄中的標籤： 8 個機制（mechanism）跟 2 種修飾（modifier），以及他們可能踩到地雷的情形。所有的標籤（tag）與標籤值（tag value）中間都不能有空白。此外，至少在出現更新版本的 SPF spec之前，現階段 SPF 紀錄開頭必須是 `v=spf1`。

![](https://tech-blog.cymetrics.io/img/posts/crystal/email-sec-theory/spf-1920w.png)

簡短的 SPF record（取自 維基百科）

以下我們稱信件的來源（也就是 `smtp.MailFrom`）為 sender-domain 或 sender-ip，標籤值為 target-domain 或 target-ip。

### Mechanisms

8 個 mechanism 為： `all, ip4, ip6, a, mx, ptr, exists, include`

SPF 紀錄驗證時是照著 mechanism 出現的順序比對的，比對結果為 match、 not-match、或 error 之一，一旦成功找到 match 或是發生 error 就會停下。

在每個 mechanism 前都可能帶有一個 qualifier 符號，為下列其一：

- `pass(+)`：若對到 sender-ip，結果 pass（即白名單）。預設值，可以省略（ `+all` 同 `all`）
- `neutral(?)`：None ，等同沒有 policy。
- `softfail(~)`：若對到 sender-ip，結果 fail，仍要標注並接受。
- `fail(-)`：若對到 sender-ip，結果 fail（即黑名單）。

##### all

語法為： `[qualifier]all`

必須在紀錄最末，是最後一個判斷條件。一般來說應設置最嚴謹的 `-all`，表示除了前述 mechanism 指定的 target IP 外一律拒絕（`fail(-)`），所以如果前面的 mechanism 都沒對到，最後就會失敗。

地雷：

- 缺少 `all`：`PermError`
- `all` 後面的任何標籤均會被忽略
- `?all, +all`：不管前面有沒有對到，都視為 pass。SPF 跟沒設一樣。

##### ip4, ip6

語法為：`[qualifier]ip4:target-ip[cidr-length]` 或 `[qualifier]ip6:target-ip[cidr-length]`

分別用 ipv4 與 ipv6 定義的 IP 列表，只要是 CIDR 表示法都可以，例如 `192.168.0.1/16`。斜線後的 prefix length 如果省略，會預設為 `/32`（ipv4）與 `/128`（ipv6）。

地雷：

- 不合法的 IP：`PermError`

##### a

語法為：`[qualifier]a:[target-domain][cidr-length]`

檢查 sender IP 是否在 target-domain 的 A 或 AAAA 紀錄中，即是否為 target-domain 所擁有的 IP。如果沒有寫 target-domain 就會默認為當前 SPF 紀錄的網域， `a` 等同 `a:sender-domain`。

##### mx

語法為：`[qualifier]mx:[target-domain][cidr-length]`

檢查 sender IP 是否在 target-domain 的 MX 紀錄中。如果沒有寫 target-domain 就會默認為當前 SPF 紀錄的網域， `mx` 等同 `mx:sender-domain`。

地雷：

- 若一個 MX 紀錄包含超過 10 個 A 或 AAAA 紀錄：`PermError`

##### ptr （已廢棄）

語法為：`[qualifier]ptr:[target-domain]`

進行 reverse DNS lookup，若得到的網域是 `smtp.MailFrom` 或其子網域，則 pass。此機制速度慢且會 .arpa name servers 的負擔，請勿使用。

地雷：

- 若一個 PTR 紀錄包含超過 10 個 A 或 AAAA 紀錄，只看前十個後面忽略

##### exists

語法為：`[qualifier]exists:target-domain`

若 target-domain 存在 A 紀錄，視為 pass。

##### include

語法為：`[qualifier]include:target-domain`

跟寫程式呼叫另一個函數的概念類似，會檢查 target-domain 的 SPF 紀錄並且一直遞迴查詢下去，直到比對過每一個 IP。但 include 不代表把對方的 SPF 紀錄 inline 插入自己的，而是跳到對方的 SPF 紀錄的 context 中比對，最後得到 match、 not-match、或 error 的結果。

在遞迴過程中，子紀錄的驗證結果對母紀錄的 include 機制的影響為：

- `Pass`→ include 判定：match
- `Fail, Softfail, Neutral`→ include 判定：not-match
- `PermError, None`→ include 判定：`PermError`
- `TempError`→ include 判定：`TempError`

include 機制適合用在核准外部（跨域）的 email provider，例如當我們使用第三方寄件服務時，就要把對方的 SPF 紀錄用 include 機制放到我們的SPF 紀錄。

### Modifiers

2 種修飾為： `redirect, exp`

##### redirect

語法為：`redirect:target-domain`

必須在紀錄最末，與 all 不可同時出現。若前面的 mechanism 驗證完畢但都沒有找到 match，就用 target-domain 的 SPF 紀錄取代自己的。與 include 的母子關係不同，這裡用 inline 概念插入，所以任何報錯視為當前 SPF 紀錄的 Error。

地雷：

- 若 target-domain 沒有 SPF 紀錄：`PermError`
- `all` 與 `redirect` 只能出現一個，若紀錄中兩者同時出現則 `redirect` 會被忽略

##### exp

語法為：`exp:target-domain`

代表 explanation，若 SPF 紀錄驗證結果為 `Fail`，會返回 target-domain 的 TXT 紀錄內的字串。

地雷：

- 若在 include 的 target-domain 的 SPF 紀錄中找到 exp，會忽略（母子關係）；若在 redirect 的 target-domain 的 SPF 紀錄中找到 exp，則會忽略原紀錄的 exp（取代關係）

### 其他地雷：

- DNS 回傳 NXDOMAIN（沒有 `smtp.MailFrom` 這個網域）：`None`
- 找到複數筆 SPF 紀錄：`PermError`
- SPF 紀錄開頭不是 `v=spf1`：`None`
- SPF 紀錄被設成 SPF 類型而不是 TXT 類型：SPF 類型作為 SPF 機制發展的過渡期使用，目前已廢棄，處理方式未定義
- 任何語法錯誤，例如 mechanism 或 modifier 拼錯字，或是中間多了空格等：`PermError`
- DNS 查詢 timeout 、server failure 等除了 success 與 nxdomain 的結果：`TempError`
- 發生大於兩次 void lookup，也就是 DNS query 回傳空白結果（success 與 nxdomain）：`PermError`
- 涵括除了 `all, ip4, ip6, exp`之外的所有標籤，以及往下遞迴時需要的 DNS query，總計超過 10 次 DNS lookup：`PermError`
- 若 redirect 或 include 的網域有重複（例如 SPF 紀錄有：`include: a.com include:b.com` 但是 [a.com](http://a.com/) 的 SPF 紀錄內已經有 `include:b.com`）或是 loop（a include b → b include c → c include a）的情況，不會報錯，但很可能會導致超過 10 次 DNS lookup
- 若驗證一筆 SPF 紀錄需要超過 20 秒：`TempError`
- 每個 modifier 在 SPF 紀錄只能各出現一次，若超過：`PermError`

### 多個子網域

如果你有多個會寄信的網域，就要為每一個分別設置 SPF 紀錄。如果它們是從同一個 email server 寄出去的，可以用 redirect 統一指向一筆紀錄，方便管理。

不寄信的網域（parked domain）請設置 `v=spf1 -all`。

### 第三方服務

如果你有使用第三方的寄件服務，例如 SendGrid，你可以在 SPF 紀錄中用 include 機制把第三方的 email server 涵蓋進來，例如 OneDegree 使用微軟 Outlook、MailChimp、FreshDesk、SendGrid 等服務：

```txt
v=spf1 include:spf.protection.outlook.com include:servers.mcsv.net include:email.freshdesk.com -all
```

眼尖的人可能會發現，上面的紀錄怎麼少了 `include:sendgrid.net`？

其實，你如果去查這幾個第三方服務的的 SPF 紀錄就會發現，FreshDesk 的 SPF 紀錄就已經有 `include:sendgrid.net` 這一行，因此我們就不用加啦！這樣也可以省下一筆 DNS lookup 的扣打，畢竟 10 次 DNS lookup 是很容易超過的。

這裡也順便回答一個非常常見的問題：

> 『超過 10 次 DNS lookup 怎麼辦』

只要你多用幾個第三方寄件服務，馬上就超過 10 次了，畢竟你 include 他算一次，他用到的 include、a、mx 等等也通通算你的！還不含你自己的一些 email server 呢！

解決這個問題有幾個撇步：

如果你有 lookup 到你自己的一些 email server，可以考慮用 ip4 ip6 直接 inline 插進來，例如：

```txt
// before  mydom.com -> include:sub1.mydom.com mx:sub2.mydom.com include:a.com  sub1.mydom.com(SPF) -> ip4:192.x.x.3 ip4:172.x.x.x/16  sub2.mydom.com(MX) -> 192.x.126.5//after  mydom.com -> ip4:192.x.x.3 ip4:172.x.x.x/16 ip4:192.x.126.5 include:a.com
```

或者，可以考慮把這個寄信的 domain 拆成幾個不同功用的 subdomain 然後把第三方寄件服務也依據用途瓜分下去，這樣每個 domain 都有自己的 10 次扣打。例如：

```txt
// before  mydomain.com -> include:a.com include:b.com include:c.com //after  mydomain.com -> include:a.com   customer.mydomain.com -> include:b.com   partnership.mydomain.com -> include:c.com
```

如果你很不幸地用到了一個第三方服務，他自己的 SPF 紀錄就要用到快 10 次 lookup，那只能說….換一個吧？（或是聯繫對方看看他們有什麼建議啦）

## 結論

恭喜大家搞懂三劍客裡最難設定的 SPF 啦！你可以在網路上找到的 SPF 紀錄檢查器通常不會把我們討論的地雷全都檢查一次，因為實在是太麻煩啦QQ 推薦你可以多用幾種工具配著這篇仔細檢視一下你的 SPF 紀錄，然後跟著下一篇設好 DMARC 後，就可以在每日的彙整報告中看到 SPF 通過跟失敗的紀錄囉！

### Reference:

1. [SPF RFC](https://datatracker.ietf.org/doc/html/rfc7208)
2. [DKIM RFC](https://datatracker.ietf.org/doc/html/rfc6376)
3. [DMARC RFC](https://datatracker.ietf.org/doc/html/rfc7489)

[關於 email security 的大小事 — 設定篇 SPF](https://tech-blog.cymetrics.io/posts/crystal/email-sec-settings-spf/)

[SPF Lookup](https://www.nslookup.io/spf-lookup/)

# 

How to Set Up DNS Records & Email Authentication for Google Workspace

Andy Cabasso

[Email outreach](https://postaga.com/category/email-outreach/)

June 24th

![Person setting up his google workspace.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/DNS-G-T.png&nocache=1)

Take a look through your cell phone’s address book.

How many people’s numbers do you know off by heart? Your own; maybe your significant other’s; and that’s probably about it.

Thing is, us humans aren’t great at remembering big strings of numbers.

Which is exactly why the Domain Name System (DNS) exists.

It’s basically the internet’s version of a phonebook, tasked with matching up a memorable, “human” domain name (like *postaga.com*) with the unique but distinctly *unmemorable* ID of the server on which it’s stored (like *104.21.32.161*).

If you’re switching to Google Workspace, you’ll need to make sure your email DNS records are pointing at Google.

Read on to find out how to set up DNS records for Google Workspace…

## What Are DNS Records & How Do They Enable Email Authentication?a

![Person wondering what DNS records are.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/DNS-G-1-1.png&nocache=1)

As the name suggests, DNS records are required to setup DNS authentication, which combines three separate [email authentication techniques](https://postaga.com/email-authentication-guide/#ftoc-heading-4:~:text=be%20much%20lower.-,The%20Three%20Pillars%20of%20Email%20Authentication%20Explained,-Which%20brings%20us):

- **Sender Policy Framework (SPF):** Allows domain owners to choose which servers can send emails on an organization’s behalf.
- **DomainKeys Identified Mail (DKIM):** Enables email recipients to find out if the sending domain owner sent and authorized an email.
- **Domain-based Message Authentication, Reporting & Conformance (DMARC):** Combines SPF and DKIM to authenticate emails, while also allowing domain owners to choose what happens with unauthenticated emails.

So DNS authentication isn’t just about demonstrating that the messages you *send* are legit; it also validates the authenticity of emails you receive.

In addition, there is another type of record that you will need to set up to enable Gmail / Google Workspace to send emails on your behalf: the MX Record. MX stands for Mail Exchange, and these records are the ones that enable Gmail to send emails for you.

## What are the Google Workspace DNS Records?

![Person introducing Google Workspace DNS records.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/DNS-G-2-1.png&nocache=1)

To be able to send out emails using Gmail / Google Workspace / G-Suite on behalf of your domain, you will need to set up certain DNS records to point to Google’s servers and to basically tell the Internet, “I am using Google to send my emails, so any emails you get from me coming from Google servers are legitimate.”

In the next section, we will go over specifically how to set up DNS records for Google Workspace for your domain based on a few different scenarios. But first, here are the main records you will need to add:

### **Google Workspace SPF Record**

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**        | **Time to Live (TTL*)** |
| --------------- | ------------------- | ----------------------------------- | ----------------------- |
| TXT             | Blank or @          | v=spf1 include:_spf.google.com ~all | 3600                    |

### **Google Workspace MX Records**

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination** | **Priority** | **Time to Live (TTL*)** |
| --------------- | ------------------- | ---------------------------- | ------------ | ----------------------- |
| MX              | Blank or @          | ASPMX.L.GOOGLE.COM           | 1            | 3600                    |
| MX              | Blank or @          | ALT1.ASPMX.L.GOOGLE.COM      | 5            | 3600                    |
| MX              | Blank or @          | ALT2.ASPMX.L.GOOGLE.COM      | 5            | 3600                    |
| MX              | Blank or @          | ALT3.ASPMX.L.GOOGLE.COM      | 10           | 3600                    |
| MX              | Blank or @          | ALT4.ASPMX.L.GOOGLE.COM      | 10           | 3600                    |

### **Google Workspace Verification**

This record is going to be completely unique to you. When you set up an account with Google Workspace for your website, Google needs to verify that you own and control your domain. You’ll do that by adding a TXT record that Google generates for you.

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**                                   | **Time to Live (TTL*)** |
| --------------- | ------------------- | -------------------------------------------------------------- | ----------------------- |
| TXT             | Blank or @          | [this will be provided by Google when you set up your account] | 3600                    |

### **DKIM Record**

This record also is going to be completely unique to you. When you set up an account with Google Workspace for your website, Google will generate a DKIM record for you to add to your DNS.

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**                                   | **Time to Live (TTL*)** |
| --------------- | ------------------- | -------------------------------------------------------------- | ----------------------- |
| TXT             | Blank or @          | [this will be provided by Google when you set up your account] | 3600                    |

## 3 Ways to Set Up DNS Records for Google Workspace

![Person setting up her DNS records.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/DNS-G-3.png&nocache=1)

There are three ways to set up DNS records for Google Workspace.

Which method will depend on:

- Where your DNS is hosted
- How you originally signed up for Google Workspace

Real quick though, sort out which situation is likely right for you.

The three options for Google Workspace DNS setup are:

1. Your DNS Is Hosted By Your Hosting Provider, But You Signed Up For Workspace Through Google
2. Your DNS Is Hosted By Your Hosting Provider & You Signed Up For Google Workspace Via Your Hosting Provider
3. Your Hosting Provider Doesn’t Host Your DNS, But You Did Use Them to Sign Up For Google Workspace

If you know which situation applies to you, you can skip down to the appropriate section below. If not, here’s a crash-course:

So, what’s the difference here?

When you buy a domain, you can do it from a variety of different sources. You can buy a domain from a domain name registrar and host such as Bluehost, Namecheap, or GoDaddy. Or, you can buy a domain straight from Google.

When you buy a domain, as a default, the name servers for your domain will point to the registrar where you purchased your domain.

But, you do not have to use their name servers. You could point your name servers to a third-party. Here are a few situations:

- You bought your domain with a registrar like GoDaddy or Bluehost, and you also use them as your hosting for your website. So, you kept your name servers pointing to them.
- You bought your domain with a registrar like GoDaddy or Namecheap, but you have your web hosting with another provider, like WPEngine or Bluehost, and so you pointed your name servers to them.
- You bought your domain with a registrar like Namecheap, but you pointed your nameservers to a service like Cloudflare to manage all your DNS records

So, to figure out which of the three options applies to you, we need to figure out where your name servers live:

1. Go to [MXtoolbox.com](https://mxtoolbox.com/)
2. Choose DNS Check from the drop-down menu
3. Enter your own domain name

![MXToolbox.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/unnamed.png&nocache=1)

Now, you can see where your name servers are.

If you scroll down, MXToolbox will tell you specifically:

![MXToolbox demo.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/unnamed-1.png&nocache=1)

Once you know where your DNS hosting / nameservers live, you will need to log into that provider to be able to edit your DNS records to add the Google Workspace records.

#### 1. Your DNS Is Hosted By Your Hosting Provider, But You Signed Up For Workspace Through Google

Does your [name server](https://postaga.com/learning/cold-email-setup/#:~:text=What%20is%20a%20name%20server%20and%20DNS%2C%20and%20where%20are%20my%20name%20servers%20located%3F) point to your hosting provider?

That means your hosting provider currently hosts your DNS.

And it *also* means that if you bought your Google Workspace account directly from Google, you’ll need to update your website’s MX records so that they point to Google instead. 

To do that, log in to your hosting account panel and find the MX records management page. Typically, they’ll be located in one of these places:

- DNS Management
- Mail Server Configuration
- Name Server Management

Note that in some cases, you’ll only be able to edit your MX records by switching on advanced settings.

Then, you will need to add the DNS records mentioned above (for quick reference, here they are again):

#### Google Workspace Verification

Make sure to log into your Google Admin account and go through the setup process for your domain. Then, Google will tell you to add a specific verification record to prove to Google that you own and control your domain. 

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**                                   | **Time to Live (TTL*)** |
| --------------- | ------------------- | -------------------------------------------------------------- | ----------------------- |
| TXT             | Blank or @          | [this will be provided by Google when you set up your account] | 3600                    |

#### Google Workspace SPF Record

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**        | **Time to Live (TTL*)** |
| --------------- | ------------------- | ----------------------------------- | ----------------------- |
| TXT             | Blank or @          | v=spf1 include:_spf.google.com ~all | 3600                    |

#### Google Workspace MX Records

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination** | **Priority** | **Time to Live (TTL*)** |
| --------------- | ------------------- | ---------------------------- | ------------ | ----------------------- |
| MX              | Blank or @          | ASPMX.L.GOOGLE.COM           | 1            | 3600                    |
| MX              | Blank or @          | ALT1.ASPMX.L.GOOGLE.COM      | 5            | 3600                    |
| MX              | Blank or @          | ALT2.ASPMX.L.GOOGLE.COM      | 5            | 3600                    |
| MX              | Blank or @          | ALT3.ASPMX.L.GOOGLE.COM      | 10           | 3600                    |
| MX              | Blank or @          | ALT4.ASPMX.L.GOOGLE.COM      | 10           | 3600                    |

#### DKIM Record

This record also is going to be completely unique to you. When you set up an account with Google Workspace for your website, Google will generate a DKIM record for you to add to your DNS. You will find this in your Google Admin when you first set up your email with Google Workspace.

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**                                   | **Time to Live (TTL*)** |
| --------------- | ------------------- | -------------------------------------------------------------- | ----------------------- |
| TXT             | Blank or @          | [this will be provided by Google when you set up your account] | 3600                    |

Also, if there are any existing MX records associated with your domain, you’ll need to delete them. 

You need to verify the changes in your Google Admin console by navigating to **Domains > Manage Domains** and clicking **Set up Google MX records:**

![MXToolbox demo.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/unnamed-2.png&nocache=1)

Confirm that you’ve completed the necessary steps, then sit back and wait for emails to start arriving in your Workspace account. This can verify in as little as a few minutes, but sometimes can take up to 72 hours. Don’t panic — you’ll keep receiving emails via your old email provider in the meantime if you have one.

#### 2. Your DNS Is Hosted By Your Hosting Provider & You Signed Up For Google Workspace Via Your Hosting Provider

Honestly, this is the simplest way to set up DNS records for Google Workspace.

Why?

Because your hosting provider should take care of all the leg work, including:

- Setting up your MX records
- Using a token in a TXT record to verify your domain 
- Updating your website’s SPF record

Easy, right?

Not too much to add here. Carry on.

#### 3. Your Hosting Provider *Doesn’t* Host Your DNS, But You *Did* Use Them to Sign Up For Google Workspace

Okay, so what if your name servers point to a company other than your hosting provider, but you signed up to Workspace via your hosting provider’s panel?

In that case, your provider should email you all the information you need to update your DNS records.

Again, you will need to add the specific Google Workspace-related DNS records to your DNS.

Then, you will need to add the DNS records mentioned above (for quick reference, here they are again):

#### Google Workspace Verification

Make sure to log into your Google Admin account and go through the setup process for your domain. Then, Google will tell you to add a specific verification record to prove to Google that you own and control your domain. 

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**                                   | **Time to Live (TTL*)** |
| --------------- | ------------------- | -------------------------------------------------------------- | ----------------------- |
| TXT             | Blank or @          | [this will be provided by Google when you set up your account] | 3600                    |

#### Google Workspace SPF Record

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**        | **Time to Live (TTL*)** |
| --------------- | ------------------- | ----------------------------------- | ----------------------- |
| TXT             | Blank or @          | v=spf1 include:_spf.google.com ~all | 3600                    |

#### Google Workspace MX Records

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination** | **Priority** | **Time to Live (TTL*)** |
| --------------- | ------------------- | ---------------------------- | ------------ | ----------------------- |
| MX              | Blank or @          | ASPMX.L.GOOGLE.COM           | 1            | 3600                    |
| MX              | Blank or @          | ALT1.ASPMX.L.GOOGLE.COM      | 5            | 3600                    |
| MX              | Blank or @          | ALT2.ASPMX.L.GOOGLE.COM      | 5            | 3600                    |
| MX              | Blank or @          | ALT3.ASPMX.L.GOOGLE.COM      | 10           | 3600                    |
| MX              | Blank or @          | ALT4.ASPMX.L.GOOGLE.COM      | 10           | 3600                    |

#### DKIM Record

This record also is going to be completely unique to you. When you set up an account with Google Workspace for your website, Google will generate a DKIM record for you to add to your DNS. You will find this in your Google Admin when you first set up your email with Google Workspace.

| **Record Type** | **Name/Host/Alias** | **Value/Answer/Destination**                                   | **Time to Live (TTL*)** |
| --------------- | ------------------- | -------------------------------------------------------------- | ----------------------- |
| TXT             | Blank or @          | [this will be provided by Google when you set up your account] | 3600                    |

Also, if there are any existing MX records associated with your domain, you’ll need to delete them. 

You need to verify the changes in your Google Admin console by navigating to **Domains > Manage Domains** and clicking **Set up Google MX records:**

![MXToolbox demo.](https://postaga.com/wp-content/webpc-passthru.php?src=https://postaga.com/wp-content/uploads/2022/06/unnamed-3.png&nocache=1)

Confirm that you’ve completed the necessary steps, then sit back and wait for emails to start arriving in your Workspace account. This can verify in as little as a few minutes, but sometimes can take up to 72 hours. Don’t panic — you’ll keep receiving emails via your old email provider in the meantime if you have one.

## To Wrap It All Up

Configured your DNS records for Google Workspace?

Great work!

If you’re planning to use your email account for link-building, sales outreach, content promotion, or PR, now’s the time to boost the deliverability of your email sequences.  
Find out how by reading our ultimate guide on [how to warm up an email account](https://postaga.com/warm-up-email/).

[How to Set Up DNS Records &amp; Email Authentication for Google Workspace](https://postaga.com/email-authentication-for-google-workspace/)

v=sp1 include:jwint.net include:gmail.com ~all

Question
dig @ns-cloud-b2.googledomains.com. jwint.net. TXT
Answer
jwint.net.    14400    TXT    "v=sp1 include:jwint.net include:gmail.com -all"
jwint.net.    14400    TXT    "v=spf1 include:mailgun.org ~all"

v=spf1 include:mailgun.org include:jwint.net include:gmail.com ~all

v=spf1 include:mailgun.org include:jwint.net include:gmail.com ~all

v=spf1 include:mailgun.org include:jwint.net include:gmail.com include:_spf.google.com ~all

v=spf1 include:spf.protection.outlook.com include:servers.mcsv.net include:email.freshdesk.com -all

v=spf1 include:mailgun.org include:_spf.google.com ~all

v=spf1 include:mailgun.org include:gmail.com ~all

dig @ns2.google.com. jwint.net. CNAME





[How to Set Up DNS Records &amp; Email Authentication for Google Workspace](https://postaga.com/email-authentication-for-google-workspace/)




