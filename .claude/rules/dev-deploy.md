# 开发与部署

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

## Commit 规范

使用中文描述，格式 `<type>: <中文描述>`

| type | 用途 |
|------|------|
| `feat` | 新功能 |
| `fix` | 修复 bug |
| `refactor` | 重构 |
| `docs` | 文档 |
| `chore` | 杂项 |

## 全局配置文件

### `blog.config.js`

| 配置项 | 当前值 | 说明 |
|--------|--------|------|
| `NOTION_PAGE_ID` | `02ab3b...,en:7c1d57...` | 中文+英文 Notion 数据库 |
| `THEME` | `starter` | 默认主题 |
| `LANG` | `zh-CN` | 默认语言 |
| `CUSTOM_MENU` | `true` | 菜单从 Notion 数据库读取 |
| `NEXT_REVALIDATE_SECOND` | `60` | ISR 缓存刷新间隔（秒） |

### `conf/` 子配置

- `comment.config.js` — 评论系统
- `contact.config.js` — 社交媒体链接
- `image.config.js` — 图片压缩、CDN
- `font.config.js` — 字体配置
- `analytics.config.js` — 访问统计

## 注意事项

- **不要修改其他主题**（themes/ 下的其他文件夹），它们是 NotionNext 原始主题
- **图片路径**必须以 `/` 开头，指向 `public/` 目录
- **Vercel 环境变量** `NEXT_PUBLIC_THEME=starter` 确保使用 starter 主题
- **ISR 缓存**: 页面更新后最多 60 秒才会刷新
- **Clerk 认证**: 如果未设置 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`，登录/注册使用自定义表单
- **Logo 特殊处理**: `Logo.js` 直接 import CONFIG，不走 Notion CONFIG 覆盖，改 Logo 需改代码
