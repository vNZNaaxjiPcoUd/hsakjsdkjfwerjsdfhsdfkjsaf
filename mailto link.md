mail to link
============


HTML mailto Parameters
You can also add additional parameters to your mailto link to make the user experience more seamless. A mailto link accepts the following parameters:

mailto (required): specifies the recipient email address(es)
subject (optional): creates a subject line for the email
cc (optional): adds one or more carbon-copy recipient
bcc (optional): adds one or more blind-carbon-copy recipient
body (optional): adds body text to the email
When adding optional parameters, always place the mailto parameter first, then follow the parameter with the ? delimiter character. Separate multiple optional parameters with the & character.

```
<h2>mailto demo</h2>
<p><a href="mailto:jamie@fakeemail.com, jane@fakeemail.com" target="_blank">Send an email!</a></p>
```

```
<h2>mailto with subject</h2>
<p><a href="mailto:jamie@fakeemail.com?subject=This is an email" target="_blank">Send an email!</a></p>
<h2>mailto with cc and bcc</h2>
<p><a href="mailto:jamie@fakeemail.com?cc=jane@fakeemail.com, &bcc=john@fakeemail.com" target="_blank">Send an email!</a></p>
<h2>mailto with body</h2>
<p><a href="mailto:jamie@fakeemail.com?body=Hello! This is the body of my email. Thanks!" target="_blank">Send an email!</a></p>
```

```
<a href=”mailto:piotr@mailtrap.io,john@mailtrap.io,kate@mailtrap.io?subject=Give%20me%20all%20your%20bitcoins&body=Here%20are%20my%20parents'%20credit%20card%20numbers%3A%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Customer”>I want free Bitcoins</a>
```

```
<script>
function sendEmail() 
{
    window.location = "mailto:xyz@yourapplicationdomain.com";
}
</script>
<div onclick="sendEmail();">Send e-mail</div>
```

```
function sendEmail() {
    var mail = 'mailto:contact@test.com';
    var a = document.createElement('a');
    a.href = mail;
    a.click();
};
```
