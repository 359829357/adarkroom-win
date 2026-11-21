# A Dark Room · Windows 桌面版

把 [doublespeakgames/adarkroom](https://github.com/doublespeakgames/adarkroom)（MPL-2.0）的纯网页版封装成 Windows 可执行文件，用于和"直接 git clone 跑网页"做对比。

游戏逻辑未改动，只做了三处桌面化调整：`web/index.html` 顶部加 `desktop-config.js` 默认简体中文（删掉 `localStorage.lang` 或加 `?lang=en` 回到英文原版）；jQuery 改为本地文件、去掉 Google CDN 与统计脚本，双击即可离线运行。

## 目录

```
web/            游戏本体（原仓库文件，11 MB）
desktop/        Electron 入口
src-tauri/      Tauri 2 封装（NSIS 安装包 + 便携 exe）
dev-server.mjs  零依赖本地静态服务器（浏览器方式）
.github/workflows/build-win.yml   云端 Windows 构建
```

## 方式一：EXE（推荐给只想玩的人）

在 Actions 的 `build-windows` 里下载 artifact：

- `adarkroom-tauri-win` → `ADarkRoom-portable.exe`（免安装，约 15–20 MB，依赖系统自带 WebView2；Win10 21H2+/Win11 默认具备）
- `adarkroom-electron-win` → `ADarkRoom-portable-1.4.0.exe`（约 90–110 MB，自带 Chromium，兼容性最稳）

也可以本地构建（需要 Windows + Rust/Node）：

```bash
npm install
npm run dist:win                                   # Electron 便携版
npm install -g @tauri-apps/cli@^2 && tauri build   # Tauri 版
```

## 方式二：浏览器（推荐给要改代码的人）

```bash
git clone https://github.com/359829357/adarkroom-win.git
cd adarkroom-win
node dev-server.mjs        # 无需 npm install，打开 http://localhost:8080/?lang=zh_cn
```

或者直接双击 `web/index.html`（完全离线：jQuery 已本地化、无外链统计，打开即进游戏，无需终端）。

## 存档位置

- Tauri：`%LOCALAPPDATA%\games.doublespeakgames.adarkroom\EBWebView\` 下的 localStorage
- Electron：`%APPDATA%\A Dark Room\Local Storage\`
- 浏览器：对应站点/文件路径的 localStorage

三者互不相通，对比时进度不会串。

## 许可

游戏代码与素材版权归 Doublespeak Games，遵循 MPL-2.0，见 `web/LICENSE.md`。本仓库只增加桌面封装层。
