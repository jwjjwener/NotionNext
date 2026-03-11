# Notion 数据库与配置

## 配置优先级（从低到高）

```
1. blog.config.js             ← 全局默认值
2. themes/starter/config.js   ← 主题默认值（STARTER_XXX）
3. Notion CONFIG              ← 数据库中 type=Config 的记录覆盖同名配置
4. Vercel 环境变量            ← NEXT_PUBLIC_THEME 等
```

## 页面类型（type 字段）

| 类型 | 用途 | 说明 |
|------|------|------|
| `Config` | 配置覆盖 | 覆盖 `config.js` 中的默认值，slug 为配置键名 |
| `Post` | 博客文章 | 显示在博客列表、归档页 |
| `Page` | 独立页面 | 如 About、Privacy Policy 等 |
| `Menu` | 顶级菜单 | 导航栏菜单项 |
| `SubMenu` | 子菜单 | 下拉菜单中的子项，需设置父菜单 |
| `Notice` | 公告 | 网站公告信息 |

## 数据库字段

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

## 当前 Notion 数据库内容

| 标题 | 类型 | slug | 说明 |
|------|------|------|------|
| `BLOG_FAVICON` | Config | — | 网站 favicon 配置 |
| 学习资源 | Menu | `#` | 顶级下拉菜单容器 |
| 关于我们 | Menu | `about` | 顶级菜单 |
| 联系我们 | Menu | `#contact` | 锚点链接到联系区块 |
| 汉字练习 | SubMenu | `hanzi-practice` | "学习资源"的子菜单 |
| 拼音学习 | SubMenu | `pinyin` | "学习资源"的子菜单 |
| 课程介绍 | Page | `courses` | 独立页面 |
| 关于我们 | Page | `about` | 独立页面 |
| 第一篇博客 | Post | `first-post` | 博客文章 |

## 菜单层级结构

```
导航栏
├── 学习资源 (Menu, slug=#)     ← 下拉容器，不跳转
│   ├── 汉字练习 (SubMenu)      ← 子菜单项
│   └── 拼音学习 (SubMenu)      ← 子菜单项
├── 关于我们 (Menu, slug=about) ← 直接链接
└── 联系我们 (Menu, slug=#contact) ← 锚点链接
```

## 菜单管理规则

- **下拉菜单**: 父菜单 `slug` 设为 `#`，子菜单 `type` 设为 `SubMenu`
- **直接链接**: `slug` 设为页面路径（如 `about`）
- **锚点链接**: `slug` 设为 `#section-id`（如 `#contact`）
- **外部链接**: `slug` 设为完整 URL
- **排序**: 通过 `sort` 字段控制菜单顺序
- **菜单不在代码中配置**：`CUSTOM_MENU: true`，菜单来自 Notion 数据库

## Notion CONFIG 覆盖机制

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
