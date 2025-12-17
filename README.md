# MiaoDemo - AI Code Deployment Platform

## 项目简介
MiaoDemo 是一个极简主义的 AI 前端代码生成与部署平台。用户可以通过与 AI 对话生成 HTML/CSS/JS 代码，实时预览，并一键部署到云端。同时支持社区作品展示与 Remix（二次创作）功能。

## 版本记录 (Changelog)

### v1.0.0 (2025-12-06)
*   **初始发布**: 完成了核心的 AI 对话生成、代码预览、一键部署和社区展示功能。
*   **备份位置**: `_backups/v1.0.0_[timestamp]/`
*   **主要文件**:
    *   `index.html`: AI 工作台与编辑器。
    *   `view.html`: 社区广场与作品详情页。

### v2.1.4 (2025-12-17)
*   **聊天代码块体验优化**: 聊天中的 Markdown 代码块默认折叠为“文件名/代码块(语言)”，点击展开查看。
*   **滚动条优化**: 展开后的代码块限制最大高度且自动换行，避免出现底部横向滚动条。

### v2.1.5 (2025-12-17)
*   **架构区默认折叠**: Architecture Map 默认折叠，界面更清爽。
*   **架构指引（多文件）**: 当 AI 输出多文件代码块时，自动识别文件列表；在架构区点击文件名可切换上方编辑器显示对应文件内容，同时生成更贴近“文件结构”的 Mermaid 简图。

### v2.1.6 (2025-12-17)
*   **架构区简化**: 去掉左侧文件列表，仅保留更清晰的架构图展示。
*   **图中可点文件**: Mermaid 架构图中的文件节点支持点击，自动切换到上方 Editor 并显示对应文件代码（单文件也会虚拟为 `index.html` 节点）。

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
4.  或者使用命令行启动本地静态服务（推荐用于 Cursor Browser / 多端口调试）：

```bash
npx serve . -p 3001
```

**关于版本控制**:
已接入 Git/GitHub 进行版本管理；如需离线回滚，也可使用 `_backups` 内的文件快照。

## 接口说明
*   `DIFY_API_BASE`: https://dify-api.miaodemo.com/v1
*   `POCKETBASE_URL`: https://db.miaodemo.com

## 已知风险与注意事项
*   由于使用 CDN，需要保持网络连接。
*   PocketBase 的读写权限需在后台配置好（Collections: projects, users）。
*   Dify API 需要配置允许 CORS。
## 下一步建议
*   建议安装 [Git](https://git-scm.com/) 以获得更专业的版本控制体验。
*   增加代码版本历史回滚功能。
*   支持更多前端框架模板（如 React/Vue）。

