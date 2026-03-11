# Starter 主题修改指南

## 文案与配置 — `themes/starter/config.js`

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

## 静态资源 — `public/images/starter/`

```
public/images/starter/
├── hero/cnl.jpg          # 首页英雄区图片
├── logo/logo.png         # 网站 Logo
├── about/                # 关于区块图片
├── team/                 # 团队成员头像
├── testimonials/         # 评价区图标
└── brands/               # 合作伙伴 Logo
```

## 常见修改场景

### 改首页文案
直接编辑 `themes/starter/config.js` 中对应的 `STARTER_XXX` 值，或在 Notion 中创建 Config 类型记录覆盖。**⚠️ 改中文文案时必须同步更新 `_EN` 英文翻译**，详见 `i18n.md`。

### 改首页图片
1. 将图片放入 `public/images/starter/` 对应目录
2. 更新 `config.js` 中的路径

### 添加/删除首页区块
在 `themes/starter/index.js` 的 `LayoutIndex` 中添加/删除组件，或设置 `STARTER_XXX_ENABLE: false`。

### 发布新文章
在 Notion 数据库中创建 `type=Post` 的记录，`status` 设为 `Published`。

### 修改文章详情页样式
编辑 `themes/starter/index.js` 中的 `LayoutSlug` 组件。

### 添加新页面布局
1. 在 `themes/starter/index.js` 中创建新的 `LayoutXxx` 组件
2. 在 `export { }` 中导出
3. 在 `conf/layout-map.config.js` 中配置路由映射
