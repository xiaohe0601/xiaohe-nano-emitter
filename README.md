<div align="center">
  <h1>xiaohe-nano-emitter</h1>
  <span>🛴 一个轻量级的事件发射器</span>
</div>

<br>

[![github stars][github-stars-src]][github-stars-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

小何同学 / [github@xiaohe0601](https://github.com/xiaohe0601) / [gitee@xiaohe0601](https://gitee.com/xiaohe0601)

### 🎉 特性

### 🚁 安装

#### PNPM

``` shell
pnpm add xiaohe-nano-emitter
```

#### YARN

``` shell
yarn add xiaohe-nano-emitter
```

#### NPM

``` shell
npm install xiaohe-nano-emitter
```

### 🛹 使用

#### 简单使用

``` javascript
import { createNanoEmitter } from "xiaohe-nano-emitter";

const emitter = createNanoEmitter();

const unbind = emitter.on("tick", (value: number) => {
  console.log("on tick", value);
});

emitter.emit("tick", 2); // 日志: on tick 2

unbind();
emitter.emit("tick", 2); // 不再打印日志
```

#### 类型定义

> 请查看 [jsdocs.io](https://www.jsdocs.io/package/xiaohe-nano-emitter)

### 🛸 链接

- [nanoevents](https://github.com/ai/nanoevents) Simple and tiny (107 bytes) event emitter library for JavaScript.

### 🐶 讨论交流

- ❓：若有疑问或BUG反馈，可提交[issues](https://github.com/xiaohe0601/xiaohe-nano-emitter/issues)
- 📫：[HeDianGeng0601@outlook.com](mailto:HeDianGeng0601@outlook.com)
- 🐧：暂未开通

### 🏆 开源协议

- MIT [LICENSE](./LICENSE)

<!-- Badges -->

[github-stars-src]: https://img.shields.io/github/stars/xiaohe0601/xiaohe-nano-emitter?style=flat&colorA=080f12&colorB=1fa669&logo=GitHub
[github-stars-href]: https://github.com/xiaohe0601/xiaohe-nano-emitter
[npm-version-src]: https://img.shields.io/npm/v/xiaohe-nano-emitter?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/xiaohe-nano-emitter
[npm-downloads-src]: https://img.shields.io/npm/dm/xiaohe-nano-emitter?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/xiaohe-nano-emitter
[bundle-src]: https://img.shields.io/bundlephobia/minzip/xiaohe-nano-emitter?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=xiaohe-nano-emitter
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/xiaohe-nano-emitter
[license-src]: https://img.shields.io/github/license/xiaohe0601/xiaohe-nano-emitter.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/xiaohe0601/xiaohe-nano-emitter/blob/main/LICENSE