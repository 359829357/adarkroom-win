# A Dark Room · 网页版

[A Dark Room](https://github.com/doublespeakgames/adarkroom)（MPL-2.0）的最小化文字冒险游戏，已做离线化处理，**双击 `web/index.html` 即可游玩，不需要终端、不需要服务器**。

## 快速开始

- 直接双击 `web\index.html`
- 或起本地服务（可选）：`node dev-server.mjs`，然后访问 `http://localhost:8080/?lang=zh_cn`

## 相对原版的改动

只动了三处，游戏逻辑一行没改：

1. `web/index.html` 顶部引入 `desktop-config.js`，首次启动默认简体中文（删掉 `localStorage.lang` 或加 `?lang=en` 回到英文）
2. jQuery 由 Google CDN 改为仓库自带的 `web/lib/jquery.min.js`（版本同为 1.10.1），国内不会卡在加载
3. 移除了 Google Analytics 统计脚本

## 目录

```
web/            游戏本体（含 scripts、css、img、audio、lang 语言包）
dev-server.mjs  零依赖静态服务器（可选）
docs/           原仓库文档
tools/          原仓库辅助脚本
```

## 存档

存在浏览器的 localStorage 里。`file://` 打开和 `localhost` 打开是两个独立来源，存档互不相通；换方式玩会从新档开始。

## 许可

游戏代码与素材版权归 Doublespeak Games，遵循 MPL-2.0，详见 `web/LICENSE.md`。
