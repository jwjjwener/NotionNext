# 首页渲染链路（DIY 必读）

## 完整渲染流程

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

## 首页区块渲染顺序（LayoutIndex）

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

## 始终渲染的全局组件（LayoutBase）

| 组件 | 文件 | 说明 |
|------|------|------|
| Style | `style.js` | 主题专属 CSS（sticky 导航、轮播等） |
| Header | `components/Header.js` | 导航栏（Logo + 菜单 + 暗色切换） |
| Footer | `components/Footer.js` | 页脚 |
| BackToTopButton | `components/BackToTopButton.js` | 回到顶部按钮 |

## 布局组件 — `themes/starter/index.js`

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
