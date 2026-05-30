/**
 * MiaoDemo i18n — shared by index.html & view.html
 * Storage key: miaodemo_lang
 */
(function (global) {
    const STORAGE_KEY = 'miaodemo_lang';
    const FALLBACK = 'en';

    const LOCALE_META = [
        { code: 'zh', label: '简体中文', htmlLang: 'zh-CN' },
        { code: 'zh-TW', label: '繁體中文', htmlLang: 'zh-TW' },
        { code: 'en', label: 'English', htmlLang: 'en' },
        { code: 'ja', label: '日本語', htmlLang: 'ja' },
        { code: 'ko', label: '한국어', htmlLang: 'ko' },
        { code: 'es', label: 'Español', htmlLang: 'es' },
        { code: 'fr', label: 'Français', htmlLang: 'fr' },
        { code: 'de', label: 'Deutsch', htmlLang: 'de' },
    ];

    const en = {
        language: 'Language',
        pageTitleIndex: 'MiaoDemo AI Workbench',
        pageTitleView: 'MiaoDemo Community',
        myProjects: 'My Projects',
        untitled: 'Untitled',
        noHistory: 'No history yet',
        explore: 'Explore',
        communityPlaza: 'Community Plaza',
        signOut: 'Sign Out',
        loginRegister: 'Login / Register',
        deleteProjectTitle: 'Delete project',
        editor: 'Editor',
        preview: 'Preview',
        history: 'History',
        restore: 'Restore',
        deployNow: 'Deploy Now',
        htmlSupported: 'HTML/Tailwind/JS Supported',
        aiReady: 'AI Assistant Ready',
        aiReadyHint: 'Paste your generated code above, describe changes in the chat, and switch to Preview to see the result.',
        codePlaceholder: '<!-- Paste your Gemini/ChatGPT code here -->',
        chatPlaceholder: "Describe changes (e.g. 'Make the button blue')...",
        aiArchitect: 'AI Architect',
        detectedAssets: 'Detected Assets',
        replace: 'Replace',
        noImages: 'No images found',
        welcomeBack: 'Welcome Back',
        createAccount: 'Create Account',
        signInHint: 'Sign in to save projects and upload assets.',
        joinHint: 'Join the community to share your work.',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        passwordsNoMatch: 'Passwords do not match',
        signIn: 'Sign In',
        signUp: 'Sign Up',
        needAccount: 'Need an account? Sign up',
        haveAccount: 'Already have an account? Sign in',
        checkEmail: 'Check Your Email',
        checkEmailBody: "We've sent a verification link to your inbox. Please activate your account to sign in.",
        activatedSignIn: "I've Activated, Sign In",
        deployedSuccess: 'Deployed Successfully!',
        demoLive: 'Your demo is live on the cloud.',
        publicListing: 'Public Listing',
        visibleInPlaza: 'Visible in Community Plaza',
        open: 'Open',
        close: 'Close',
        deleteProject: 'Delete Project?',
        deletePermanent: 'This action is permanent and cannot be undone.',
        cancel: 'Cancel',
        delete: 'Delete',
        mobile: 'Mobile (375px)',
        tablet: 'Tablet (768px)',
        desktop: 'Desktop (Full)',
        plazaTitle: 'MiaoDemo Plaza',
        backWorkbench: 'Back to workbench',
        createNew: 'Create New',
        view: 'View',
        noPublic: 'No public projects yet.',
        beFirst: 'Be the first to build one!',
        loading: 'Loading...',
        byAuthor: 'by {name}',
        like: 'Like',
        loginToLike: 'Login to like',
        remix: 'Remix',
        scan: 'Scan',
        creator: 'Creator',
        unknown: 'Unknown',
        toastRestored: 'Restored unsaved work',
        toastRemixing: 'Remixing "{title}"',
        toastRemixFail: 'Cannot load project (private or missing).',
        toastPasteFirst: 'Paste code first!',
        toastAssetReplaced: 'Asset replaced',
        toastUploadFail: 'Upload failed',
        toastVersionRestored: 'Version restored',
        toastWelcome: 'Welcome, {name}',
        toastSignedOut: 'Signed out',
        toastLoaded: 'Loaded "{title}"',
        toastLoadFail: 'Failed to load project',
        toastUpdated: 'Project updated',
        toastCreated: 'Project created',
        toastSaveFail: 'Save failed: {msg}',
        toastDeleted: 'Project deleted',
        toastDeleteFail: 'Failed to delete',
        toastPublished: 'Published to Plaza',
        toastPrivate: 'Made private',
        toastVisibilityFail: 'Failed to change visibility',
        toastLoadPlazaFail: 'Failed to load community. Try again later.',
        toastPrivateProject: 'Not found or private — author only.',
        toastLoadError: 'Load failed. Try again later.',
        toastLoginToLike: 'Please sign in to like (Workbench → Login).',
        toastAlreadyLiked: 'You already liked this',
        toastThanksLike: 'Thanks for your like!',
        toastLikeFail: 'Like failed. Try again later.',
        toastPasswordMismatch: 'Passwords do not match.',
        toastPasswordRules: 'Password must be 8+ chars with A-Z, a-z, and 0-9.',
        toastRegisterFail: 'Registration failed. Email may be taken.',
        toastLoginFail: 'Login failed. Check email or password.',
        loadingAnalyzing: 'Analyzing request...',
        loadingConverting: 'Converting React to HTML...',
        loadingPreview: 'Loading preview...',
        loadingUploading: 'Uploading...',
        loadingSaving: 'Saving...',
        loadingRemix: 'Loading remix...',
    };

    const zh = {
        ...en,
        language: '语言',
        pageTitleIndex: 'MiaoDemo AI 工作台',
        pageTitleView: 'MiaoDemo 社区',
        myProjects: '我的项目',
        noHistory: '暂无历史项目',
        explore: '发现',
        communityPlaza: '社区广场',
        signOut: '退出登录',
        loginRegister: '登录 / 注册',
        deleteProjectTitle: '删除项目',
        editor: '编辑器',
        preview: '预览',
        history: '历史',
        restore: '恢复',
        deployNow: '立即部署',
        htmlSupported: '支持 HTML / Tailwind / JS',
        aiReady: 'AI 助手已就绪',
        aiReadyHint: '在上方粘贴生成的代码，在右侧对话中描述修改，切换到「预览」查看效果。',
        codePlaceholder: '<!-- 在此粘贴 Gemini/ChatGPT 生成的代码 -->',
        chatPlaceholder: '描述修改需求（例如：「把按钮改成蓝色」）…',
        aiArchitect: 'AI 助手',
        detectedAssets: '检测到的资源',
        replace: '替换',
        noImages: '未发现图片',
        welcomeBack: '欢迎回来',
        createAccount: '创建账号',
        signInHint: '登录以保存项目并上传资源。',
        joinHint: '加入社区，分享你的作品。',
        email: '邮箱',
        password: '密码',
        confirmPassword: '确认密码',
        passwordsNoMatch: '两次密码不一致',
        signIn: '登录',
        signUp: '注册',
        needAccount: '没有账号？去注册',
        haveAccount: '已有账号？去登录',
        checkEmail: '请查收邮件',
        checkEmailBody: '我们已向你的邮箱发送验证链接，请激活账号后再登录。',
        activatedSignIn: '已激活，去登录',
        deployedSuccess: '部署成功！',
        demoLive: '你的作品已上线。',
        publicListing: '公开到广场',
        visibleInPlaza: '在社区广场中展示',
        open: '打开',
        close: '关闭',
        deleteProject: '删除项目？',
        deletePermanent: '此操作不可撤销。',
        cancel: '取消',
        delete: '删除',
        mobile: '手机 (375px)',
        tablet: '平板 (768px)',
        desktop: '桌面 (全宽)',
        plazaTitle: 'MiaoDemo 广场',
        backWorkbench: '返回工作台',
        createNew: '新建作品',
        view: '查看',
        noPublic: '暂无公开作品。',
        beFirst: '来做第一个吧！',
        loading: '加载中…',
        byAuthor: '作者：{name}',
        like: '点赞',
        loginToLike: '登录后点赞',
        remix: '二次创作',
        scan: '扫码',
        creator: '创作者',
        unknown: '未知',
        toastRestored: '已恢复未保存的内容',
        toastRemixing: '正在 Remix「{title}」',
        toastRemixFail: '无法加载该项目（可能为私密或不存在）',
        toastPasteFirst: '请先粘贴代码',
        toastAssetReplaced: '资源已替换',
        toastUploadFail: '上传失败',
        toastVersionRestored: '已恢复该版本',
        toastWelcome: '欢迎，{name}',
        toastSignedOut: '已退出登录',
        toastLoaded: '已加载「{title}」',
        toastLoadFail: '加载项目失败',
        toastUpdated: '项目已更新',
        toastCreated: '项目已创建',
        toastSaveFail: '保存失败：{msg}',
        toastDeleted: '项目已删除',
        toastDeleteFail: '删除失败',
        toastPublished: '已发布到广场',
        toastPrivate: '已设为私密',
        toastVisibilityFail: '无法更改公开状态',
        toastLoadPlazaFail: '加载社区作品失败，请稍后重试',
        toastPrivateProject: '作品不存在或为私密，仅作者可查看',
        toastLoadError: '加载失败，请稍后重试',
        toastLoginToLike: '请先登录后再点赞（工作台 → 登录）',
        toastAlreadyLiked: '你已经点过赞了',
        toastThanksLike: '感谢点赞！',
        toastLikeFail: '点赞失败，请稍后重试',
        toastPasswordMismatch: '两次密码不一致',
        toastPasswordRules: '密码须 8 位以上，含大小写字母和数字',
        toastRegisterFail: '注册失败，邮箱可能已被使用',
        toastLoginFail: '登录失败，请检查邮箱或密码',
        loadingAnalyzing: '正在分析请求…',
        loadingConverting: '正在将 React 转为 HTML…',
        loadingPreview: '正在加载预览…',
        loadingUploading: '正在上传…',
        loadingSaving: '正在保存…',
        loadingRemix: '正在加载 Remix…',
    };

    const zhTW = {
        ...zh,
        language: '語言',
        pageTitleIndex: 'MiaoDemo AI 工作台',
        pageTitleView: 'MiaoDemo 社區',
        myProjects: '我的專案',
        noHistory: '暫無歷史專案',
        explore: '探索',
        communityPlaza: '社區廣場',
        signOut: '登出',
        loginRegister: '登入 / 註冊',
        deleteProjectTitle: '刪除專案',
        editor: '編輯器',
        preview: '預覽',
        history: '歷史',
        restore: '還原',
        deployNow: '立即部署',
        aiReadyHint: '在上方貼上產生的程式碼，在右側對話描述修改，切換到「預覽」查看效果。',
        codePlaceholder: '<!-- 在此貼上 Gemini/ChatGPT 產生的程式碼 -->',
        chatPlaceholder: '描述修改需求（例如：「把按鈕改成藍色」）…',
        detectedAssets: '偵測到的資源',
        replace: '替換',
        noImages: '未發現圖片',
        welcomeBack: '歡迎回來',
        createAccount: '建立帳號',
        signInHint: '登入以儲存專案並上傳資源。',
        joinHint: '加入社區，分享你的作品。',
        email: '電子郵件',
        password: '密碼',
        confirmPassword: '確認密碼',
        passwordsNoMatch: '兩次密碼不一致',
        signIn: '登入',
        signUp: '註冊',
        needAccount: '沒有帳號？去註冊',
        haveAccount: '已有帳號？去登入',
        checkEmail: '請查收郵件',
        checkEmailBody: '我們已向你的信箱發送驗證連結，請啟用帳號後再登入。',
        activatedSignIn: '已啟用，去登入',
        deployedSuccess: '部署成功！',
        demoLive: '你的作品已上線。',
        publicListing: '公開到廣場',
        visibleInPlaza: '在社區廣場中展示',
        open: '開啟',
        close: '關閉',
        deleteProject: '刪除專案？',
        deletePermanent: '此操作無法復原。',
        cancel: '取消',
        delete: '刪除',
        plazaTitle: 'MiaoDemo 廣場',
        backWorkbench: '返回工作台',
        createNew: '新建作品',
        view: '查看',
        noPublic: '暫無公開作品。',
        beFirst: '來當第一個吧！',
        loading: '載入中…',
        byAuthor: '作者：{name}',
        remix: '二次創作',
        scan: '掃碼',
        creator: '創作者',
        unknown: '未知',
    };

    const ja = {
        ...en,
        language: '言語',
        myProjects: 'マイプロジェクト',
        signOut: 'ログアウト',
        loginRegister: 'ログイン / 登録',
        editor: 'エディター',
        preview: 'プレビュー',
        deployNow: '今すぐデプロイ',
        communityPlaza: 'コミュニティ',
        plazaTitle: 'MiaoDemo プラザ',
        createNew: '新規作成',
        remix: 'リミックス',
        noPublic: '公開プロジェクトはまだありません。',
        signIn: 'ログイン',
        signUp: '登録',
        cancel: 'キャンセル',
        delete: '削除',
        close: '閉じる',
        open: '開く',
    };

    const ko = {
        ...en,
        language: '언어',
        myProjects: '내 프로젝트',
        signOut: '로그아웃',
        loginRegister: '로그인 / 회원가입',
        editor: '편집기',
        preview: '미리보기',
        deployNow: '지금 배포',
        communityPlaza: '커뮤니티',
        plazaTitle: 'MiaoDemo 플라자',
        createNew: '새로 만들기',
        remix: '리믹스',
        noPublic: '아직 공개 프로젝트가 없습니다.',
        signIn: '로그인',
        signUp: '가입',
        cancel: '취소',
        delete: '삭제',
        close: '닫기',
        open: '열기',
    };

    const es = {
        ...en,
        language: 'Idioma',
        myProjects: 'Mis proyectos',
        signOut: 'Cerrar sesión',
        loginRegister: 'Iniciar sesión / Registro',
        editor: 'Editor',
        preview: 'Vista previa',
        deployNow: 'Publicar ahora',
        communityPlaza: 'Comunidad',
        plazaTitle: 'Plaza MiaoDemo',
        createNew: 'Crear nuevo',
        remix: 'Remix',
        noPublic: 'Aún no hay proyectos públicos.',
        signIn: 'Entrar',
        signUp: 'Registrarse',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        close: 'Cerrar',
        open: 'Abrir',
    };

    const fr = {
        ...en,
        language: 'Langue',
        myProjects: 'Mes projets',
        signOut: 'Déconnexion',
        loginRegister: 'Connexion / Inscription',
        editor: 'Éditeur',
        preview: 'Aperçu',
        deployNow: 'Déployer',
        communityPlaza: 'Communauté',
        plazaTitle: 'Place MiaoDemo',
        createNew: 'Créer',
        remix: 'Remix',
        noPublic: 'Aucun projet public pour le moment.',
        signIn: 'Connexion',
        signUp: "S'inscrire",
        cancel: 'Annuler',
        delete: 'Supprimer',
        close: 'Fermer',
        open: 'Ouvrir',
    };

    const de = {
        ...en,
        language: 'Sprache',
        myProjects: 'Meine Projekte',
        signOut: 'Abmelden',
        loginRegister: 'Anmelden / Registrieren',
        editor: 'Editor',
        preview: 'Vorschau',
        deployNow: 'Jetzt veröffentlichen',
        communityPlaza: 'Community',
        plazaTitle: 'MiaoDemo Platz',
        createNew: 'Neu erstellen',
        remix: 'Remix',
        noPublic: 'Noch keine öffentlichen Projekte.',
        signIn: 'Anmelden',
        signUp: 'Registrieren',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        close: 'Schließen',
        open: 'Öffnen',
    };

    const STRINGS = { en, zh, 'zh-TW': zhTW, ja, ko, es, fr, de };

    function isValidLocale(code) {
        return Boolean(code && STRINGS[code]);
    }

    function detectBrowserLang() {
        const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        if (nav.startsWith('zh')) {
            if (nav.includes('tw') || nav.includes('hk') || nav.includes('hant')) return 'zh-TW';
            return 'zh';
        }
        const prefix = nav.split('-')[0];
        const map = { ja: 'ja', ko: 'ko', es: 'es', fr: 'fr', de: 'de' };
        return map[prefix] || 'en';
    }

    let currentLang = FALLBACK;

    function interpolate(str, params) {
        if (!params) return str;
        return String(str).replace(/\{(\w+)\}/g, (_, k) =>
            params[k] != null ? String(params[k]) : `{${k}}`
        );
    }

    function translate(lang, key, params) {
        const chain = [lang, FALLBACK];
        for (const loc of chain) {
            const pack = STRINGS[loc];
            if (pack && pack[key] != null) return interpolate(pack[key], params);
        }
        return key;
    }

    const MiaoI18n = {
        getLang() {
            return currentLang;
        },
        setLang(code) {
            if (!isValidLocale(code)) code = FALLBACK;
            currentLang = code;
            try {
                localStorage.setItem(STORAGE_KEY, code);
            } catch (e) {}
            this.applyDocumentLang(code);
            return code;
        },
        detectBrowserLang,
        getOptions() {
            return LOCALE_META.map((m) => ({ code: m.code, label: m.label }));
        },
        getLabel(code) {
            const m = LOCALE_META.find((x) => x.code === code);
            return m ? m.label : code;
        },
        applyDocumentLang(code) {
            const m = LOCALE_META.find((x) => x.code === code) || LOCALE_META.find((x) => x.code === FALLBACK);
            document.documentElement.lang = m ? m.htmlLang : 'en';
        },
        t(key, params) {
            return translate(currentLang, key, params);
        },
        init() {
            let lang = FALLBACK;
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved && isValidLocale(saved)) lang = saved;
                else lang = detectBrowserLang();
            } catch (e) {
                lang = detectBrowserLang();
            }
            currentLang = isValidLocale(lang) ? lang : FALLBACK;
            this.applyDocumentLang(currentLang);
            return currentLang;
        },
    };

    global.MiaoI18n = MiaoI18n;
})(typeof window !== 'undefined' ? window : global);
