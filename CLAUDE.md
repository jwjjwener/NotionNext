# Jade Chinese Club - NotionNext 项目指南

## 项目概述

基于 [NotionNext](https://github.com/tangly1024/NotionNext) 框架的中文教学网站，使用 Notion 作为 CMS，部署在 Vercel。

- **线上地址**: https://jadechineseclub.vercel.app/
- **主题**: `starter`（落地页风格）
- **品牌色**: 翡翠绿 `#0f766e`（Tailwind primary，全局生效）
- **无需本地构建**: 推送代码后 Vercel 自动构建部署，不需要本地 `yarn build`
- **Git 提交规范**: 使用中文 commit message
- **Git 远程**: https://github.com/jwjjwener/NotionNext.git
- **部署方式**: 推送到 `main` 分支后 Vercel 自动部署

## 核心架构

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

## 首页渲染链路（DIY 必读）

### 完整渲染流程

```
用户访问 /
  → pages/index.js（SSG 数据获取 + 选择主题）
    → pages/_app.js（全局包裹层）
      → GlobalContextProvider（全局状态：暗色模式、语言等）
        → LayoutBase（themes/starter/index.js）
          ├── Style（style.js — 主题专属 CSS 注入）
          ├── Header（导航栏 — absolute 定位，叠在内容上方）
          ├── LayoutIndex（首页内容 — 见下方区块顺序）
          └── Footer（页脚）
      → ExternalPlugins（全局插件 — 统计、动画、GlobalStyle 等）
        └── GlobalStyle（注入 Notion GLOBAL_CSS — ⚠️ 可覆盖任何样式）
```

### 首页区块渲染顺序（LayoutIndex）

在 `themes/starter/index.js` 的 `LayoutIndex` 中按以下顺序渲染，每个区块都有 `ENABLE` 开关：

| 序号 | 区块 | 组件文件 | 开关配置 |
|------|------|----------|----------|
| 1 | 英雄区 | `components/Hero.js` | `STARTER_HERO_ENABLE` |
| 2 | 合作伙伴 | `components/Brand.js` | `STARTER_BRANDS_ENABLE` |
| 3 | 服务特性 | `components/Features.js` | `STARTER_FEATURE_ENABLE` |
| 4 | 关于我们 | `components/About.js` | `STARTER_ABOUT_ENABLE` |
| 5 | 价格表 | `components/Pricing.js` | `STARTER_PRICING_ENABLE` |
| 6 | 学员评价 | `components/Testimonials.js` | `STARTER_TESTIMONIALS_ENABLE` |
| 7 | 常见问题 | `components/FAQ.js` | `STARTER_FAQ_ENABLE` |
| 8 | 团队介绍 | `components/Team.js` | `STARTER_TEAM_ENABLE` |
| 9 | 博客列表 | `components/Blog.js` | `STARTER_BLOG_ENABLE` |
| 10 | 联系方式 | `components/Contact.js` | `STARTER_CONTACT_ENABLE` |
| 11 | 行动呼吁 | `components/CTA.js` | `STARTER_CTA_ENABLE` |

**DIY 操作**：

- **调整顺序**：在 `LayoutIndex` 中移动 JSX 组件的位置
- **关闭区块**：在 `config.js` 中设置 `STARTER_XXX_ENABLE: false`
- **插入新区块**：在 `components/` 下创建新组件，然后在 `LayoutIndex` 中引入

### 始终渲染的全局组件（LayoutBase）

| 组件 | 文件 | 说明 |
|------|------|------|
| Style | `style.js` | 主题专属 CSS（sticky 导航、轮播等） |
| Header | `components/Header.js` | 导航栏（Logo + 菜单 + 暗色切换） |
| Footer | `components/Footer.js` | 页脚 |
| BackToTopButton | `components/BackToTopButton.js` | 回到顶部按钮 |

### 样式优先级（从低到高）

```
1. tailwind.config.js        ← Tailwind 编译时确定（primary 等颜色）
2. styles/globals.css         ← 全局基础样式
3. styles/notion.css          ← Notion 内容渲染样式
4. themes/starter/style.js    ← 主题专属 CSS（styled-jsx global）
5. 组件内 Tailwind 类         ← 各组件的 className
6. public/css/custom.css      ← 静态自定义样式（运行时加载）
7. Notion GLOBAL_CSS          ← ⚠️ 通过 GlobalStyle.js 注入，可用 !important 覆盖一切
```

**⚠️ 重要警告**：Notion 数据库中的 `GLOBAL_CSS` Config 会通过 `components/GlobalStyle.js` 注入为 `<style jsx global>`，优先级最高。如果使用了 `!important`，会覆盖 Tailwind 和所有组件样式（包括 `dark:` 变体）。修改颜色时优先改 `tailwind.config.js`，避免在 GLOBAL_CSS 中使用 `!important`。

### 配置优先级（从低到高）

```
1. blog.config.js             ← 全局默认值
2. themes/starter/config.js   ← 主题默认值（STARTER_XXX）
3. Notion CONFIG              ← 数据库中 type=Config 的记录覆盖同名配置
4. Vercel 环境变量            ← NEXT_PUBLIC_THEME 等
```

## Notion 数据库结构

### 页面类型（type 字段）

| 类型 | 用途 | 说明 |
|------|------|------|
| `Config` | 配置覆盖 | 覆盖 `config.js` 中的默认值，slug 为配置键名 |
| `Post` | 博客文章 | 显示在博客列表、归档页 |
| `Page` | 独立页面 | 如 About、Privacy Policy 等 |
| `Menu` | 顶级菜单 | 导航栏菜单项 |
| `SubMenu` | 子菜单 | 下拉菜单中的子项，需设置父菜单 |
| `Notice` | 公告 | 网站公告信息 |

### 数据库字段

| 字段 | 说明 |
|------|------|
| `title` | 页面标题 |
| `slug` | URL 路径（Menu 设为 `#` 表示仅作下拉容器） |
| `type` | 页面类型（见上表） |
| `status` | 发布状态（Published / Draft） |
| `category` | 分类 |
| `tags` | 标签 |
| `icon` | 菜单图标（Font Awesome 类名，如 `fas fa-book`） |
| `sort` | 排序权重 |

### 当前 Notion 数据库内容

| 标题 | 类型 | slug  | 说明 |
|------|------|-------|------|
| `BLOG_FAVICON` | Config | — | 网站 favicon 配置 |
| 学习资源 | Menu | `#` | 顶级下拉菜单容器 |
| 关于我们 | Menu | `about` | 顶级菜单，链接到 /about |
| 联系我们 | Menu | `#contact` | 顶级菜单，锚点链接到联系区块 |
| 汉字练习 | SubMenu | `hanzi-practice` | "学习资源"的子菜单 |
| 拼音学习 | SubMenu | `pinyin` | "学习资源"的子菜单 |
| 课程介绍 | Page | `courses` | 独立页面 |
| 关于我们 | Page | `about` | 独立页面 |
| 第一篇博客 | Post | `first-post` | 博客文章 |

### 菜单层级结构

```
导航栏
├── 学习资源 (Menu, slug=#)     ← 下拉容器，不跳转
│   ├── 汉字练习 (SubMenu)      ← 子菜单项
│   └── 拼音学习 (SubMenu)      ← 子菜单项
├── 关于我们 (Menu, slug=about) ← 直接链接
└── 联系我们 (Menu, slug=#contact) ← 锚点链接
```

### 菜单管理规则

- **下拉菜单**: 父菜单 `slug` 设为 `#`，子菜单 `type` 设为 `SubMenu`
- **直接链接**: `slug` 设为页面路径（如 `about`）
- **锚点链接**: `slug` 设为 `#section-id`（如 `#contact`）
- **外部链接**: `slug` 设为完整 URL（如 `https://example.com`）
- **排序**: 通过 `sort` 字段控制菜单顺序

## ★ 主要修改区域（starter 主题）

### 1. 文案与配置 — `themes/starter/config.js`

**这是最常改的文件**。所有首页内容都通过 `siteConfig('STARTER_XXX')` 读取此文件。

| 配置前缀 | 控制区域 | 对应组件 |
|----------|---------|---------|
| `STARTER_LOGO` | 网站 Logo | `components/Logo.js` |
| `STARTER_HERO_*` | 首页英雄区 | `components/Hero.js` |
| `STARTER_FEATURE_*` | 服务特性（4个） | `components/Features.js` |
| `STARTER_ABOUT_*` | 关于我们 | `components/About.js` |
| `STARTER_PRICING_*` | 价格表（3档） | `components/Pricing.js` |
| `STARTER_TESTIMONIALS_*` | 学员评价 | `components/Testimonials.js` |
| `STARTER_FAQ_*` | 常见问题（4个） | `components/FAQ.js` |
| `STARTER_TEAM_ITEMS` | 团队成员 | `components/Team.js` |
| `STARTER_CONTACT_*` | 联系方式 | `components/Contact.js` |
| `STARTER_CTA_*` | 底部行动呼吁 | `components/CTA.js` |
| `STARTER_BLOG_*` | 博客列表 | `components/Blog.js` |
| `STARTER_FOOTER_*` | 页脚 | `components/Footer.js` |
| `STARTER_BRANDS` | 合作伙伴（已关闭） | `components/Brand.js` |

**开关控制**: 每个区块都有 `STARTER_XXX_ENABLE: true/false` 开关。

**注意**: `STARTER_TESTIMONIALS_ITEMS` 和 `STARTER_TEAM_ITEMS` 是数组，不支持 Notion CONFIG 覆盖，必须直接改代码。

### 2. 布局组件 — `themes/starter/index.js`

定义了所有页面布局：

| 布局 | 用途 | 路由 |
|------|------|------|
| `LayoutBase` | 基础框架（Header + Footer + 子内容） | 所有页面 |
| `LayoutIndex` | 首页（Hero→Features→About→...） | `/` |
| `LayoutSlug` | 文章详情页 | `/[prefix]` 或 `/[prefix]/[slug]` |
| `LayoutPostList` | 博客列表 | `/archive`, `/page/[page]` |
| `LayoutSearch` | 搜索页 | `/search` |
| `Layout404` | 404 页面 | `/404` |
| `LayoutCategoryIndex` | 分类列表 | `/category` |
| `LayoutTagIndex` | 标签列表 | `/tag` |
| `LayoutSignIn/Up` | 登录注册 | `/sign-in`, `/sign-up` |
| `LayoutDashboard` | 仪表盘 | `/dashboard` |

**首页区块顺序**在 `LayoutIndex` 中定义，可通过调整 JSX 顺序或 `ENABLE` 开关控制。

### 3. 样式 — `themes/starter/style.js`

主题专属 CSS（非 Tailwind @apply），控制：
- 导航栏 sticky 效果和颜色变化
- 暗色模式适配
- 轮播组件样式

### 4. 静态资源 — `public/images/starter/`

```
public/images/starter/
├── hero/cnl.jpg          # 首页英雄区图片
├── logo/logo.png         # 网站 Logo（中-red.svg.png）
├── about/                # 关于区块图片
├── team/                 # 团队成员头像
├── testimonials/         # 评价区图标
└── brands/               # 合作伙伴 Logo
```

## Notion CONFIG 覆盖机制

Notion 数据库中可以创建 `Config` 类型的页面来覆盖 `config.js` 中的值。

**优先级**:
```
Notion CONFIG > themes/starter/config.js 默认值
```

**工作原理**:
1. 在 Notion 数据库中创建一条记录，`type` 设为 `Config`
2. `slug` 字段填写配置键名（如 `STARTER_HERO_TITLE_1`）
3. 页面内容即为配置值
4. 系统启动时读取所有 Config 类型记录，覆盖 `config.js` 中的同名配置

**限制**:
- 数组类型配置（如 `STARTER_TEAM_ITEMS`、`STARTER_TESTIMONIALS_ITEMS`）不支持覆盖
- `Logo.js` 直接 import CONFIG，绕过了 Notion CONFIG 覆盖（需改代码才能改 Logo）

**排查 Notion CONFIG 不生效**:
1. 确认 `type` 字段为 `Config`（注意大小写）
2. 确认 `status` 为 `Published`
3. 确认 `slug` 与 `config.js` 中的键名完全一致
4. 等待 ISR 缓存刷新（默认 60 秒）或重新部署

## 颜色体系

| 用途 | 变量/类名 | 色值 |
|------|-----------|------|
| 主色（按钮、链接、图标） | `primary` | `#0f766e`（翡翠绿 teal-700） |
| 主色悬停 | `blue-dark` | `#0d6560`（深翡翠绿） |
| 辅助色 | `secondary` | `#13C296`（绿色） |
| 区块背景（亮色） | `bg-white` / `bg-gray-1` | 白色 / 浅灰 |
| 区块背景（暗色） | `dark:bg-black` | `#000`（纯黑） |
| 卡片背景（暗色） | `dark:bg-[#111]` | `#111`（微亮黑） |

**设计原则**: 白底为主，翡翠绿仅用于强调元素（按钮、链接、图标），避免大面积彩色背景。

## 已完成的样式定制

### 品牌色重塑：翡翠绿 + 白底专业风格（commit: 1798727e）

**全局颜色**（`tailwind.config.js`）：
- `primary`: `#3758F9` → `#0f766e`（翡翠绿）
- `blue-dark`: `#1B44C8` → `#0d6560`（深翡翠绿）

**Hero 英雄区**（`Hero.js`）：
- 背景：`bg-primary` → `bg-white`（白底）
- 文字：`text-white` → `text-dark dark:text-white`
- 按钮：`bg-white text-dark` → `bg-primary text-white`（翡翠绿按钮）

**Features 服务区**（`Features.js`）：
- 背景：`bg-primary` → `bg-gray-1`（浅灰底）
- 添加白色卡片容器：`rounded-xl bg-white dark:bg-[#111] p-8 shadow hover:shadow-lg`
- 图标：`bg-white bg-opacity-20` → `bg-primary bg-opacity-20 text-primary`

**Contact 联系区**（`Contact.js`）：
- 上半部分背景：`bg-[#FFF0F3]`（粉色）→ `bg-gray-1`（中性灰）

**导航栏样式**（`style.js`）：
- 所有 `rgb(55 88 249)` → `rgb(15 118 110)`（翡翠绿）

**SVG 图标**（`SVGGifts/Template/Design/Essential.js`）：
- `fill="white"` → `fill="currentColor"`（继承父元素颜色）

### 暗色模式统一（commit: 880e1277）

所有区块暗色背景已统一为：
- **区块背景**: `dark:bg-black`（纯黑 #000）
- **卡片/浮层**: `dark:bg-[#111]`（微亮黑，提供层次感）

涉及文件：About, Pricing, FAQ, Team, Testimonials, Blog, Contact, CTA, Footer, Banner, Brand, MenuList, MenuItem, SignInForm, SignUpForm, index.js, style.js

### 其他样式修改

- 博客"更多"链接：添加 `dark:text-white hover:text-primary` 确保暗色模式可见
- 轮播按钮暗色背景：`rgb(17,25,40)` → `rgb(17,17,17)` 匹配纯黑主题

## 全局配置文件

### `blog.config.js`

| 配置项 | 当前值 | 说明 |
|--------|--------|------|
| `NOTION_PAGE_ID` | `02ab3b...,en:7c1d57...` | 中文+英文 Notion 数据库（英文保留备用） |
| `THEME` | `simple` | 默认主题（通过 Vercel 环境变量 `NEXT_PUBLIC_THEME=starter` 覆盖） |
| `LANG` | `zh-CN` | 默认语言 |
| `CUSTOM_MENU` | `true` | 菜单从 Notion 数据库读取（MENU 类型页面） |
| `NEXT_REVALIDATE_SECOND` | `60` | ISR 缓存刷新间隔（秒） |
| `BLOG_FAVICON` | 通过 Notion Config 配置 | 网站 favicon |

### `conf/` 子配置

常用的：
- `comment.config.js` — 评论系统（Giscus/Twikoo/Waline等）
- `contact.config.js` — 社交媒体链接
- `image.config.js` — 图片压缩、CDN
- `font.config.js` — 字体配置
- `analytics.config.js` — 访问统计（Google Analytics等）

## 导航菜单管理

**菜单不在代码中配置**。因为 `CUSTOM_MENU: true`，菜单项来自 Notion 数据库中类型为 `Menu` / `SubMenu` 的页面。

在 Notion 数据库中添加/修改/删除菜单项即可，无需改代码。详见上方"菜单层级结构"。

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

## 主题系统工作原理

1. `next.config.js` 通过 webpack alias 将 `@theme-components` 指向当前主题
2. `themes/theme.js` 提供 `DynamicLayout` 组件，根据主题名加载对应布局
3. URL 参数 `?theme=xxx` 可临时切换主题预览
4. 每个主题导出统一接口：`LayoutBase`, `LayoutIndex`, `LayoutSlug` 等 + `THEME_CONFIG`

## 常见修改场景

### 改首页文案
直接编辑 `themes/starter/config.js` 中对应的 `STARTER_XXX` 值，或在 Notion 中创建 Config 类型记录覆盖。

### 改首页图片
1. 将图片放入 `public/images/starter/` 对应目录
2. 更新 `config.js` 中的路径

### 添加/删除首页区块
在 `themes/starter/index.js` 的 `LayoutIndex` 中添加/删除组件，或设置 `STARTER_XXX_ENABLE: false`。

### 管理导航菜单
在 Notion 数据库中管理：
- 添加顶级菜单：创建 `type=Menu` 的记录
- 添加子菜单：创建 `type=SubMenu` 的记录，父菜单 `slug` 设为 `#`
- 添加外部链接：`slug` 填完整 URL
- 添加锚点链接：`slug` 填 `#section-id`

### 发布新文章
在 Notion 数据库中创建 `type=Post` 的记录，`status` 设为 `Published`。

### 修改文章详情页样式
编辑 `themes/starter/index.js` 中的 `LayoutSlug` 组件。

### 添加新页面布局
1. 在 `themes/starter/index.js` 中创建新的 `LayoutXxx` 组件
2. 在 `export { }` 中导出
3. 在 `conf/layout-map.config.js` 中配置路由映射

### 修改全局样式/颜色

- Tailwind 主色：编辑 `tailwind.config.js` 中的 `primary` 和 `blue-dark`
- Tailwind 类：直接在组件中修改
- 主题专属 CSS：编辑 `themes/starter/style.js`（注意同步硬编码的 RGB 值）
- 全局 CSS：编辑 `styles/globals.css`

## 开发命令

```bash
yarn dev          # 本地开发（http://localhost:3000）
yarn build        # 生产构建
yarn start        # 启动生产服务
```

## 部署流程

**无需本地构建**，推送后 Vercel 自动构建部署：

```bash
git add <files>
git commit -m "feat: 添加xxx功能"
git push origin main
# Vercel 自动部署，约 1-2 分钟生效
```

**Commit 规范**：使用中文描述，格式 `<type>: <中文描述>`

| type | 用途 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `refactor` | 重构 |
| `docs` | 文档 |
| `chore` | 杂项 |

## 注意事项

- **不要修改其他主题**（themes/ 下的其他文件夹），它们是 NotionNext 原始主题，可作为参考
- **图片路径**必须以 `/` 开头，指向 `public/` 目录
- **Vercel 环境变量** `NEXT_PUBLIC_THEME=starter` 确保使用 starter 主题
- **ISR 缓存**: 页面更新后最多 60 秒才会刷新，可在 `blog.config.js` 调整 `NEXT_REVALIDATE_SECOND`
- **Clerk 认证**: 如果未设置 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` 环境变量，登录/注册使用自定义表单
- **暗色模式设计规范**: 区块背景用 `dark:bg-black`，卡片/浮层用 `dark:bg-[#111]`，保持全站一致
- **Logo 特殊处理**: `Logo.js` 直接 import CONFIG，不走 Notion CONFIG 覆盖，改 Logo 需改代码
