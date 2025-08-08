How to handle sign in Static Web
================================

Process
- input id/pwd in sign in page
- js count hPwd=hash(pwd+salt)
- get encData from different url base on hPwd
- save encData to cookie
- vars = map (Data), Data=dec(encData,hPwd), get encData from cookie, when new page load
- clean cookie. when cookie too old.

get from encData from special API, dAPI, 
- different user get different dAPI. Data save in different API for different user. 
- All the Web is static, these mean precompiled. So, chage data, need rebuild whole web again.
- Static Web can handle multi user, include sign in. need not DB/Dynamic server side code support.
- After decrypt encData to get Data, can map multi Vars.
- Save these Vars to cookie.
- the cookie data need be clean at end of session.

In each page, look cookie , get relative Vars to fill some items of this page.

