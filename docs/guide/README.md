# 介绍

  OA 系统是基于 Vue2.0，配合使用 Ant.design-vue 组件库的一套前端规范的基础。以后公司其他系统都必须参考OA系统规范进行开发

  ## 功能

    - 登录 / 注销

    - 权限认证
      - 页面权限
      - 数据权限

    - 基本功能
      - 公用组件
      - 请求拦截
      - 动态路由
      - 全局loading
      - 通用工具函数

  ## 前序准备

  ## 目录结构

    ├── README.md
    ├── babel.config.js
    ├── cypress.json
    ├── jsconfig.json
    ├── makefile
    ├── package.json
    ├── public
    │   ├── css
    │   ├── favicon.ico
    │   ├── index.html
    │   └── release.json
    ├── sentry-upload-sourcemaps.js
    ├── src
    │   ├── api
    │   ├── assets
    │   ├── axios
    │   ├── components
    │   ├── constants
    │   ├── directives
    │   ├── filters
    │   ├── main.js
    │   ├── modal-router
    │   ├── polyfills
    │   ├── router
    │   ├── store
    │   ├── styles
    │   ├── utils
    │   ├── vendor
    │   └── views
    ├── tests
    │   ├── e2e
    │   └── unit
    └── vue.config.js
  ## 安装
      # 克隆项目

      # 安装依赖
      npm install
      # 本地开发 启动项目
      
  :::tip 建议