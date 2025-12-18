# MiaoDemo - AI Code Deployment Platform

## 项目简介
MiaoDemo 是一个极简主义的 AI 前端代码生成与部署平台。用户可以通过与 AI 对话生成 HTML/CSS/JS 代码，实时预览，并一键部署到云端。同时支持社区作品展示与 Remix（二次创作）功能。

## 版本记录 (Changelog)

### v2.1.8 (2025-12-18)
*   **安全注册流程**: 实现了“注册 -> 邮件验证 -> 登录”的完整闭环。
    *   集成 SMTP 服务（支持 QQ/企业微信邮箱）。
    *   密码强度校验（大小写+数字，8位以上）。
    *   注册时带有“显示/隐藏密码”及实时匹配校验。
*   **社区广场升级**:
    *   新增项目 **Public/Private** 可见性开关。
    *   `view.html` 实现了基于公开状态的瀑布流展示。
*   **聊天持久化**: 项目的对话历史（Chat History）现已同步至数据库，刷新页面不丢失上下文。
*   **UI 体验优化**:
    *   重构了删除确认弹窗（Custom Modal），替代原生丑陋的 Confirm。
    *   优化了 Toast 提示框的视觉平衡与动画。
    *   侧边栏项目列表增加显眼的删除按钮（Hover 显现）。

### v2.1.7 (2025-12-18)
*   **用户体系全面接入**: 深度集成 PocketBase，实现用户注册/登录、持久化 Session。
*   **项目全生命周期管理**: 
    *   新增“我的项目”侧边栏列表。
    *   支持项目的新建、保存（创建/更新）、加载与删除。
    *   **资源管理升级**: 实现了独立的 `assets` 集合，支持用户上传图片资源并自动关联到项目。
*   **数据库自动化**: 提供了 `scripts/setup_pocketbase.js` 脚本，用于一键初始化所有数据库表结构（Users, Projects, Versions, Assets）。

## 核心功能
1.  **AI 工作台 (index.html)**:
    *   ChatGPT 风格的对话界面，支持上下文记忆。
    *   实时代码预览与多标签页编辑器 (HTML/CSS/JS)。
    *   智能代码提取与解析。
    *   资源管理（图片上传与替换）。
    *   **用户中心**：登录/注册、邮箱验证、项目云端同步。
2.  **社区与展示 (view.html)**:
    *   瀑布流/网格展示社区公开作品。
    *   全屏沉浸式预览（Iframe 隔离）。
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

## 数据库与环境初始化
首次部署时，请按顺序运行以下脚本进行初始化：

1.  **安装依赖**:
    ```bash
    npm install pocketbase nodemailer
    ```

2.  **初始化数据库结构**:
    编辑 `scripts/setup_pocketbase.js` 填入 Admin 账号，然后运行：
    ```bash
    node scripts/setup_pocketbase.js
    ```

3.  **配置 SMTP 邮件服务**:
    编辑 `scripts/setup_smtp.js` 填入邮箱授权码，然后运行：
    ```bash
    node scripts/setup_smtp.js
    ```

## 接口说明
*   `DIFY_API_BASE`: https://dify-api.miaodemo.com/v1
*   `POCKETBASE_URL`: https://db.miaodemo.com

## 安全提示
*   请确保不要将含有真实 Admin 密码或 SMTP 授权码的脚本提交到公开仓库。
*   PocketBase 的 `assets` 集合已配置为公开读取。
