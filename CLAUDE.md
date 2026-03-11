# Jade Chinese Club - NotionNext 项目指南

## 项目概述

基于 [NotionNext](https://github.com/tangly1024/NotionNext) 框架的中文教学网站，使用 Notion 作为 CMS，部署在 Vercel。

- **线上地址**: https://jadechineseclub.vercel.app/
- **主题**: `starter`（落地页风格）
- **品牌色**: 翡翠绿 `#0f766e`（Tailwind primary，全局生效）
- **无需本地构建**: 推送代码后 Vercel 自动构建部署
- **Git 提交规范**: 使用中文 commit message
- **Git 远程**: https://github.com/jwjjwener/NotionNext.git
- **部署方式**: 推送到 `main` 分支后 Vercel 自动部署

## 详细文档（.claude/rules/ 自动加载）

| 文件 | 内容 |
|------|------|
| `architecture.md` | 核心目录结构、主题系统、路由系统 |
| `homepage-rendering.md` | 首页渲染链路、区块顺序、布局组件（DIY 必读） |
| `styles.md` | 颜色体系、样式优先级、暗色模式规范、已完成定制 |
| `notion-config.md` | Notion 数据库结构、配置优先级、菜单管理 |
| `starter-theme.md` | starter 主题配置映射、静态资源、常见修改场景 |
| `dev-deploy.md` | 开发命令、部署流程、commit 规范、全局配置 |

## 快速参考

- **改文案**: 编辑 `themes/starter/config.js` 或 Notion Config
- **改颜色**: 编辑 `tailwind.config.js`（primary/blue-dark）
- **改区块顺序**: 编辑 `themes/starter/index.js` 的 `LayoutIndex`
- **关闭区块**: `config.js` 中 `STARTER_XXX_ENABLE: false`
- **管理菜单**: 在 Notion 数据库中管理 Menu/SubMenu 类型记录
- **发布文章**: Notion 中创建 `type=Post, status=Published` 记录
- **部署**: `git push origin main` → Vercel 自动部署
