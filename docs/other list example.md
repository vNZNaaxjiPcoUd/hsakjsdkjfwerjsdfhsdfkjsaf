# Other list example


### news

{% for p in site.news %}[{{ p.title }}, ]({{ p.url }}){% endfor %}🍀

### page

{% for p in site.pages %}
[{{ p.url }}]({{ p.url }})
{% endfor %}🍀

### Post

{% for p in site.posts %}{{ p.date | date_to_string }}, {% endfor %}🍀



### doc.jwint

{% for p in site.addba911c5c7 | sort : "name" %}[{{ p.title }}, ]({{ p.url }}){% endfor %}🍀

