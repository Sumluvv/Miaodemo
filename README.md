# MiaoDemo - AI Code Deployment Platform

## 项目简介
MiaoDemo 是一个极简主义的 AI 前端代码生成与部署平台。用户可以通过与 AI 对话生成 HTML/CSS/JS 代码，实时预览，并一键部署到云端。同时支持社区作品展示与 Remix（二次创作）功能。

## 版本记录 (Changelog)

### v2.2.0 (2026-05-30) - 验收修复版
*   **保存逻辑**: 修复 Deploy 保存时强制 `is_public=false`，导致公开开关失效、广场永远为空的问题。
*   **隐私规则**: `fix_rules.js` 收紧 projects/users 的 list/view/update 规则（私密作品不可被匿名读取；登录用户可点赞）。
*   **社区页**: 作者名显示修复（`name` / 邮箱前缀）；点赞需登录并有明确提示；移除「加载全部作品」的不安全回退。
*   **PWA**: 默认关闭「PWA Ready」勾选，与 v2.1.9 回滚说明一致。

### v2.1.9 (2026-01-23) - 生产环境就绪版
*   **稳定性加固**: 回滚了不稳定的 PWA 自动化注入与预览缩放功能，确保核心流程（生成、预览、保存、分享）坚如磐石。
*   **多设备预览**: 在预览模式下保留了 Mobile (375px), Tablet (768px), Desktop 切换功能。
*   **部署准备**: 完成了针对 `www.miaodemo.com` 域名的全量配置检查与规则修复。

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

## 核心功能
1.  **AI 工作台 (index.html)**:
    *   ChatGPT 风格的对话界面，支持上下文记忆。
    *   实时代码预览与多标签页编辑器 (HTML/CSS/JS)。
    *   智能代码提取与解析。
    *   资源管理（图片上传与替换）。
    *   **用户中心**：登录/注册、邮箱验证、项目云端同步。
    *   **多设备预览**：支持手机、平板、桌面三种视图。
2.  **社区与展示 (view.html)**:
    *   瀑布流/网格展示社区公开作品。
    *   全屏沉浸式预览（Iframe 隔离）。
    *   Remix 功能（跳转回工作台基于现有代码修改）。

## 技术栈
*   **Frontend**: 原生 HTML5, Tailwind CSS (CDN), Alpine.js (状态管理)。
*   **Backend / DB**: PocketBase (BaaS) - 托管在 Coolify。
*   **AI Engine**: Dify API。
*   **Utils**: Marked.js (Markdown), Prism.js (高亮), qrcode.js。

## 生产环境部署指南 (Production Guide)

本指南适用于将项目部署到 `www.miaodemo.com`。

### 1. 数据库准备 (PocketBase)
确保后端服务 `db.miaodemo.com` 正常运行，并按以下顺序执行初始化脚本：

1.  **安装依赖**:
    ```bash
    npm install pocketbase nodemailer
    ```

2.  **初始化核心结构 (Projects/Users/Assets)**:
    ```bash
    node scripts/setup_pocketbase.js
    ```
    *验证点：控制台输出 `Collection "projects" already exists` 或 `created`。*

3.  **补充字段与修复权限规则**:
    ```bash
    node scripts/add_chat_field.js
    # 复制 scripts/.env.example 为 scripts/.env 并填入 PB_ADMIN_EMAIL / PB_ADMIN_PASS
    node scripts/fix_rules.js
    ```
    *验证点：确保 `chat_history`、`likes` 字段存在；私密项目匿名访问返回 403/404；登录用户可点赞。*

4.  **配置邮件服务 (SMTP)**:
    编辑 `scripts/setup_smtp.js` 填入正确的 SMTP 凭证，然后运行测试：
    ```bash
    node scripts/setup_smtp.js
    ```

### 2. 前端部署
本项目为纯静态网站 (Static Site)，无需构建。

1.  **文件上传**: 将以下文件上传至 Web 服务器（如 Nginx, Vercel, 或 Coolify 的静态站点服务）的根目录：
    *   `index.html` (首页/工作台)
    *   `view.html` (展示页)
    *   `favicon.ico` (如有)
    
2.  **域名配置**:
    *   将 `www.miaodemo.com` 解析到你的 Web 服务器 IP。
    *   确保 HTTPS 证书已正确配置（必须使用 HTTPS，否则无法调用 Clipboard API 和 Service Worker）。

3.  **CORS 配置 (关键)**:
    *   登录 PocketBase 后台 -> Settings -> Application。
    *   在 "Allowed Origins" 中添加 `https://www.miaodemo.com`。

## 接口说明
*   `DIFY_API_BASE`: https://dify-api.miaodemo.com/v1
*   `POCKETBASE_URL`: https://db.miaodemo.com

## 常见问题排查
*   **保存项目报错 "Only superusers..."**: 请运行 `node scripts/fix_rules.js`。
*   **聊天记录不保存**: 请运行 `node scripts/add_chat_field.js`。
*   **预览白屏**: 检查浏览器控制台是否有 CSP (Content Security Policy) 报错，或 Dify API 是否超时。
