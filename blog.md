*博客几经开通关闭，由于太懒而久久不会维护，又时常想记下些什么。趁着阿里云这次的学生服务器活动，又再一次搭起新的博客。*

*Wordpress 虽好，各种插件能够满足几乎所有的需求，但是带来的是臃肿的架构。最近在使用 NodeJS 作为主要开发语言，所以选择了新兴的 Ghost。（本来想自己重造轮子，无奈想了一下代码量有点巨大，还是暂且放下这个念想。）*

*虽然使用成熟的博客平台，但是外观肯定要自己来定制的，所以第一件事情就是要给 Ghost 写一套皮肤。*

BiBi 完毕，开始进入正题。

准备工作：
--------

* 主题官方文档：[http://themes.ghost.org]()
* 模板官方文档：[http://handlebarsjs.com]()
* 前端框架文档：[http://www.getmdl.io]()

Ghost 使用 [Handlebars](http://handlebarsjs.com) 作为模版引擎，语法与大多数模板语法相似，大概了解一下。

比较喜欢 Material Design 的风格，所以我选择了[Material Design Lite](http://www.getmdl.io) 作为前端框架。

Github
------

[https://github.com/Herobs/GhostTheme]()

文件结构
-------

文件同官方文档推荐的结构：

    .
    ├── README.md
    ├── assets/
    │   ├── css/
    │   │   ├── font-awesome.min.css
    │   │   ├── ghost.css
    │   │   └── material.min.css
    │   ├── fonts/
    │   │   ├── FontAwesome.otf
    │   │   ├── SonsieOne-Regular.ttf
    │   │   ├── fontawesome-webfont.eot
    │   │   ├── fontawesome-webfont.svg
    │   │   ├── fontawesome-webfont.ttf
    │   │   ├── fontawesome-webfont.woff
    │   │   └── fontawesome-webfont.woff2
    │   ├── images/
    │   │   ├── favicon.ico
    │   │   └── logo.png
    │   └── js/
    │       ├── ghost.js
    │       ├── jquery.min.js
    │       └── material.min.js
    ├── blog.md
    ├── bower.json
    ├── default.hbs
    ├── index.hbs
    ├── package.json
    ├── partials/
    │   ├── loop.hbs
    │   ├── navigation.hbs
    │   └── pagination.hbs
    └── post.hbs

开始编码：
========

导航栏
-----

做的第一件事是导航栏的设计。
