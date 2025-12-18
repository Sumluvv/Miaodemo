# MiaoDemo - AI Code Deployment Platform

## 项目简介
MiaoDemo 是一个极简主义的 AI 前端代码生成与部署平台。用户可以通过与 AI 对话生成 HTML/CSS/JS 代码，实时预览，并一键部署到云端。同时支持社区作品展示与 Remix（二次创作）功能。

## 版本记录 (Changelog)

### v2.2.0 (2025-12-18)
*   **用户体系全面接入**: 深度集成 PocketBase，实现用户注册/登录、持久化 Session。
*   **项目全生命周期管理**: 
    *   新增“我的项目”侧边栏列表。
    *   支持项目的新建、保存（创建/更新）、加载与删除。
    *   **资源管理升级**: 实现了独立的 `assets` 集合，支持用户上传图片资源并自动关联到项目。
*   **数据库自动化**: 提供了 `scripts/setup_pocketbase.js` 脚本，用于一键初始化所有数据库表结构（Users, Projects, Versions, Assets）。

### v2.1.6 (2025-12-17)
*   **架构区简化**: 去掉左侧文件列表，仅保留更清晰的架构图展示。
*   **图中可点文件**: Mermaid 架构图中的文件节点支持点击，自动切换到上方 Editor 并显示对应文件代码。

## 核心功能
1.  **AI 工作台 (index.html)**:
    *   ChatGPT 风格的对话界面。
    *   实时代码预览与多标签页编辑器 (HTML/CSS/JS)。
    *   智能代码提取与解析。
    *   资源管理（图片上传与替换）。
    *   **用户中心**：登录/注册、项目云端同步。
2.  **社区与展示 (view.html)**:
    *   瀑布流/网格展示社区作品。
    *   全屏沉浸式预览。
    *   Remix 功能（跳转回工作台基于现有代码修改）。

## 技术栈
*   **Frontend**: 原生 HTML5, Tailwind CSS (CDN), Alpine.js (状态管理)。
*   **Backend / DB**: PocketBase (BaaS) - 托管在 Coolify。
*   **AI Engine**: Dify API。
*   **Utils**: Marked.js (Markdown), Prism.js (高亮), qrcode.js。

## 安装与运行
本项目无需构建工具（No-Build）。
1.  直接下载 `index.html` 和 `view.html` 到本地文件夹。
2.  双击在浏览器中打开即可运行。
3.  或者使用命令行启动本地静态服务（推荐）：

```bash
npx serve . -p 3001
```

## 数据库初始化
首次部署或更新数据库结构时，请运行：
```bash
# 1. 编辑 scripts/setup_pocketbase.js 填入你的 Admin 账号
# 2. 运行脚本
npm install pocketbase
node scripts/setup_pocketbase.js
```

## 接口说明
*   `DIFY_API_BASE`: https://dify-api.miaodemo.com/v1
*   `POCKETBASE_URL`: https://db.miaodemo.com

## 已知风险与注意事项
*   请确保 PocketBase 的 `assets` 集合允许公开读取（脚本已配置）。
*   Dify API 需要配置允许 CORS。
