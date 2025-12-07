# MiaoDemo - AI Code Deployment Platform

## 项目简介
MiaoDemo 是一个极简主义的 AI 前端代码生成与部署平台。用户可以通过与 AI 对话生成 HTML/CSS/JS 代码，实时预览，并一键部署到云端。同时支持社区作品展示与 Remix（二次创作）功能。

## 版本记录 (Changelog)

### v2.1.0 (2025-12-07) - React 智能转译
*   **Feature**: 自动检测用户粘贴的 React/JSX 代码，并调用 Dify 自动转译为原生 HTML5。
*   **Enhancement**: 增强了 AI 代码提取正则，支持无 Markdown 标记的纯文本代码。
*   **Fix**: 优化图片资源扫描正则，支持单引号 `src` 属性。

### v2.0.0 (2025-12-07)
*   **架构可视化**: 集成 Mermaid.js，根据代码自动生成系统架构图。
*   **双向交互**: 支持预览区文字选取自动填充至聊天框。
*   **PWA 支持**: 新增一键注入 Manifest 功能，支持移动端安装。
*   **资源管理升级**: 自动扫描并替换图片资源，直接对接 PocketBase。

### v1.0.0 (2025-12-06)
*   **初始发布**: 完成了核心的 AI 对话生成、代码预览、一键部署和社区展示功能。

## 核心功能
1.  **AI 工作台 (index.html)**:
    *   ChatGPT 风格的对话界面。
    *   实时代码预览与多标签页编辑器 (HTML/CSS/JS)。
    *   智能代码提取与解析（支持 React 转 HTML）。
    *   资源管理（图片上传与替换）。
    *   一键部署到 PocketBase。
2.  **社区与展示 (view.html)**:
    *   瀑布流/网格展示社区作品。
    *   全屏沉浸式预览。
    *   Remix 功能（跳转回工作台基于现有代码修改）。

## 技术栈
*   **Frontend**: Native HTML5, Tailwind CSS (CDN), Alpine.js (Logic).
*   **Backend / DB**: PocketBase (BaaS).
*   **AI Engine**: Dify API.
*   **Utils**: Marked.js, Prism.js, Mermaid.js, QRCode.js.

## 安装与运行
本项目无需构建工具（No-Build）。
1.  直接下载 `index.html` 和 `view.html` 到本地文件夹。
2.  双击在浏览器中打开即可运行。
3.  或者使用 VS Code 的 "Live Server" 插件运行（推荐，以免遇到本地文件协议的 CORS 限制）。

## 接口说明
*   `DIFY_API_BASE`: https://dify-api.miaodemo.com/v1
*   `POCKETBASE_URL`: https://db.miaodemo.com

## 已知风险与注意事项
*   由于使用 CDN，需要保持网络连接。
*   PocketBase 的读写权限需在后台配置好（Collections: projects, users）。
*   Dify API 需要配置允许 CORS。
