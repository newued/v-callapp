# v-callapp

vcallapp 是一个方便通过 vue 指令唤起 APP 的解决方案，能够满足大部分唤起客户端的场景,后期会进行一些功能扩展

如果你想了解一些唤端的原理知识，或者阅读下面的文档有不理解的名词，可以访问这篇博客 [H5 唤起 APP 指南](https://suanmei.github.io/2018/08/23/h5_call_app/) 。

如果你在使用 vcallapp 的过程中，有好的想法或者发现了 bug，提 Issue 就行，作者会及时跟进。

## Install

Install with [npm](https://www.npmjs.com/):

```sh
npm install --save vcallapp
```

## Usage

```js
const vcallapp = require("vcallapp");

or;

import vcallapp from "vcallapp";
```

## Demo

[vcallapp]()引入使用就可以在组件内使用。
示例：

```HTML

<template>
    <button v-callapp="callappInfo">v-callApp点击</button>
</template>

<script>

import vcallapp from 'vcallapp';

Vue.use(VIscroll);

export {
    data() {
        return {
            callappInfo:{
                trackUrl:'baidu1.com',
                deeplinkurl:'baidu2.com',
                staturl:'baidu3.com',
                landurl:'baidu4.com',
            }
        }
    },
}

</script>
```


## Options

实例化过程中，需要传递一个 options 对象给类，options 对象各属性需要严格按照下面的格式。

下面所有不是必填的，如果你不需要传值，就不要写这个属性，而不是传递一个空字符串或者空对象，callapp-lib 并未对这种情况进行严格的检测。

### v-callapp 表达式

必填: ✅

用来配置 URL Scheme 所必须的那些  字段。

- trackUrl

  类型: `string`  
  必填: ✅

  点击上报地址，必须是get方式，可以带任意query

- deeplinkurl

  类型: `string`  
  必填: ❎

  URL Scheme,跳转使用
- staturl

  类型: `string`  
  必填: ❎

  跳转失败的落地页地址。
- landurl

  类型: `string`  
  必填: ❎

 跳转发生之后的页面地址
