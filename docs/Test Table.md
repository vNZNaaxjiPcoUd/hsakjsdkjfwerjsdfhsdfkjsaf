---
layout: default
lock: d0a4b3d376be0af335a4d748e48327cbc6a4fd9e12dbfef2cea690cf2393319f65ff1deef529a0bf49826c408ba4c757788bcf4cf9ad7b7a85ea018a57540087
salt: f862f1d08bf480f0a6c1f8db1914330976935c513eb154813220bad9fccad8a53f96d6ca0a12cead5d5fb2a65cbbd6e27d3b31d622f38c731e18de1d669df512d565ecea212aae
---

Test Table
====


{% assign pp = site.pages | sort_natural: "title" %}
{% for p in pp %} 
{% if p.title %} 

{% if p.layout == "movie" %}
movie [{{ p.title }}  ]({{ p.url }}) 
{% elsif p.layout == "s" %}
s [{{ p.title }}  ]({{ p.url }}) 
{% elsif p.layout == "hide" %}
hide [{{ p.title }}  ]({{ p.url }}) 
{% elsif p.layout == "shorturl" %}
shorturl [{{ p.title }}  ]({{ p.url }}) 
{% else %}
nomatch {{ p.layout }} [{{ p.title }}  ]({{ p.url }}) 
{% endif %}

{% endif %} 
{% endfor %}


