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

小何 / [github@xiaohe0601](https://github.com/xiaohe0601) / [gitee@xiaohe0601](https://gitee.com/xiaohe0601)

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

``` typescript
import { createNanoEmitter } from "xiaohe-nano-emitter";

const emitter = createNanoEmitter();

// 监听tick事件
const unbind = emitter.on("tick", (value: number) => {
  console.log("on tick", value);
});

// 触发tick事件
emitter.emit("tick", 2); // 输出日志: on tick 2

// 移除单个监听
unbind();

// 再次尝试触发tick事件
emitter.emit("tick", 2); // 不再输出日志
```

#### 类型检查（TypeScript）

``` typescript
interface SomeEvents {
  set: (name: string, count: number) => void;
  tick: () => void;
}

const emitter = createNanoEmitter<SomeEvents>();

// 正确调用
emitter.emit("set", "prop", 1);
emitter.emit("tick");

// 类型检查不通过
emitter.emit("set", "prop", "1");
emitter.emit("tick", 2);
```

#### 移除监听

``` typescript
const emitter = createNanoEmitter();

const unbind1 = emitter.on("tick", () => {
  // ...
});

const unbind2 = emitter.on("tick", () => {
  // ...
});

// 移除单个监听，不影响该事件的其他监听（例如此处第二个tick监听仍然会被正常触发）
unbind1();

// 移除tick事件的所有监听
emitter.events["tick"] = [];
// 移除所有事件的所有监听
emitter.events = {};
```

#### 单次监听

> 可参考如下代码二次封装，也可以直接使用插件导出的 `Emitter`

``` typescript
class Ticker {

  constructor() {
    this.emitter = createNanoEmitter();
  }

  // ...

  once(event, callback) {
    const unbind = this.emitter.on(event, (...args) => {
      unbind();
      callback(...args);
    });

    return unbind;
  }

}
```

#### Emitter

> 可以直接使用 `Emitter` 以简化使用方式

``` typescript
import { Emitter } from "xiaohe-nano-emitter";

const emitter = new Emitter();

// 单次监听
emitter.once("tick", () => {
  // ...
});

// 移除所有事件的所有监听
emitter.clearEvents();
// 也可以指定移除tick事件的所有监听
emitter.clearEvents("tick");

// on、emit、unbind等其他使用方式与createNanoEmitter创建的emitter相同
```

还可以直接继承 `Emitter` 为某个 `class` 添加事件发射能力

``` typescript
class SomeClazz extends Emitter {

  // ...

  public test(): void {
    this.emit("test");
  }

}

const some = new SomeClazz();

some.on("test", () => {
  // ...
});
```

#### 类型定义

> 请查看 [jsdocs.io](https://www.jsdocs.io/package/xiaohe-nano-emitter)

### 🛸 链接

- [nanoevents](https://github.com/ai/nanoevents) Simple and tiny (107 bytes) event emitter library for JavaScript.

### 🐶 讨论交流

- ❓：若有疑问或BUG反馈，可提交[issues](https://github.com/xiaohe0601/xiaohe-nano-emitter/issues)
- 📫：[xiaohe0601@outlook.com](mailto:xiaohe0601@outlook.com)
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