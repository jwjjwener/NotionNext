# 核心架构

```
NotionNext/
├── blog.config.js              # 全局配置（主题选择、Notion ID、语言等）
├── conf/                       # 拆分的子配置（评论、统计、图片、字体等）
├── themes/starter/             # ★ 我们的主题（主要修改区域）
│   ├── config.js               # ★ 首页所有文案/图片/开关配置
│   ├── index.js                # 所有布局组件（LayoutIndex/LayoutSlug/...）
│   ├── style.js                # 主题专属 CSS（sticky导航、暗色模式等）
│   └── components/             # UI 组件
├── pages/                      # Next.js 路由
├── components/                 # 全局共享组件（NotionPage、Comment等）
├── lib/                        # 工具库（Notion API、全局状态、配置读取）
├── public/                     # 静态资源
│   └── images/starter/         # starter 主题图片资源
└── next.config.js              # Next.js 构建配置
```

## 主题系统工作原理

1. `next.config.js` 通过 webpack alias 将 `@theme-components` 指向当前主题
2. `themes/theme.js` 提供 `DynamicLayout` 组件，根据主题名加载对应布局
3. URL 参数 `?theme=xxx` 可临时切换主题预览
4. 每个主题导出统一接口：`LayoutBase`, `LayoutIndex`, `LayoutSlug` 等 + `THEME_CONFIG`

## 路由系统

```
pages/
├── index.js                    # 首页 → LayoutIndex
├── [prefix]/index.js           # 一级路由 /about, /en 等 → LayoutSlug
├── [prefix]/[slug]/index.js    # 二级路由 /article/xxx → LayoutSlug
├── archive/index.js            # /archive → LayoutArchive
├── search/index.js             # /search → LayoutSearch
├── category/[...slug].js       # /category/xxx → LayoutPostList
├── tag/[...slug].js            # /tag/xxx → LayoutPostList
└── page/[page].js              # /page/2 → LayoutPostList
```

**已知问题**: `/en` 路由被 `[prefix]/index.js` 捕获，渲染为 LayoutSlug 而非首页。英文版暂不可用。
