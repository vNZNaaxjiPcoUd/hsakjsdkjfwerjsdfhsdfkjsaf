Jekyll setup for markdown file render to html in github
====================================================================

[jeklly doc](https://jekyllrb.com/docs/variables/)

[liquid](https://shopify.github.io/liquid/)

[how to create a new share folder](https://jekyllrb.com/docs/step-by-step/09-collections/)

1. create a folder like _fname
2. add to _config.yml
    1. section as:
    2. turn on to share
3. create a same name html file, as fname.html
4. after update, try to get this fname.html to see you do list.

# layout
_layouts is the file that create some template for layout. default.html is the general for all if the template is not assigned. 

# _config.yml
must follow the yml format
```
collections:
  authors:
    output: true
  news:
    output: true
  localshareda10798f8b9bb16bd2baddba911c5c7:
    output: true
    
    
defaults:
  - scope:
      path: ""
      type: "authors"
    values:
      layout: "author"
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
```


# ref
- [https://jekyllrb.com/docs/step-by-step/09-collections/](https://jekyllrb.com/docs/step-by-step/09-collections/)
- [Liquid](https://shopify.github.io/liquid/basics/introduction/)
- [variable](https://jekyllrb.com/docs/variables/)




# [how to create a new collection](https://jekyllrb.com/docs/step-by-step/09-collections/)

1. create a folder like _fname
2. add to _config.yml
    1. section as:
    2. turn on to share
3. create a same name html file, as fname.html
4. after update, try to get this fname.html to see you do list.

# layout

_layouts is the file that create some template for layout. default.html is the general for all if the template is not assigned.

# _config.yml

must follow the yml format

```
collections:
  authors:
    output: true
  news:
    output: true
  localshareda10798f8b9bb16bd2baddba911c5c7:
    output: true


defaults:
  - scope:
      path: ""
      type: "authors"
    values:
      layout: "author"
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
```

# ref

- [Collections | Jekyll • Simple, blog-aware, static sites](https://jekyllrb.com/docs/step-by-step/09-collections/)
- [Liquid](https://shopify.github.io/liquid/basics/introduction/)
- [variable](https://jekyllrb.com/docs/variables/)
