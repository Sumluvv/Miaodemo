# MiaoDemo - AI Code Deployment Platform

## 项目简介
MiaoDemo 是一个极简主义的 AI 前端代码生成与部署平台。用户可以通过与 AI 对话生成 HTML/CSS/JS 代码，实时预览，并一键部署到云端。同时支持社区作品展示与 Remix（二次创作）功能。

## 核心功能
1.  **AI 工作台 (index.html)**:
    *   ChatGPT 风格的对话界面。
    *   实时代码预览与多标签页编辑器 (HTML/CSS/JS)。
    *   智能代码提取与解析。
    *   资源管理（图片上传与替换）。
    *   一键部署到 PocketBase。
2.  **社区与展示 (view.html)**:
    *   瀑布流/网格展示社区作品。
    *   全屏沉浸式预览。
    *   Remix 功能（跳转回工作台基于现有代码修改）。

## 技术栈
*   **Frontend**: 原生 HTML5, Tailwind CSS (CDN), Alpine.js (状态管理)。
*   **Backend / DB**: PocketBase (BaaS)。
*   **AI Engine**: Dify API。
*   **Utils**: Marked.js (Markdown), Prism.js (高亮), qrcode.js。

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

## 下一步建议
*   增加代码版本历史回滚功能。
*   支持更多前端框架模板（如 React/Vue）。


