# 样式与颜色体系

## 颜色体系

| 用途 | 变量/类名 | 色值 |
|------|-----------|------|
| 主色（按钮、链接、图标） | `primary` | `#0f766e`（翡翠绿 teal-700） |
| 主色悬停 | `blue-dark` | `#0d6560`（深翡翠绿） |
| 辅助色 | `secondary` | `#13C296`（绿色） |
| 浅粉背景（亮色） | `bg-[#FFE4E6]` | `#FFE4E6`（浅粉色） |
| 白色背景（亮色） | `bg-white` | 白色 |
| 区块背景（暗色） | `dark:bg-black` | `#000`（纯黑） |
| 卡片背景（暗色） | `dark:bg-[#111]` | `#111`（微亮黑） |

**设计原则**: 浅色模式使用浅粉色 `#FFE4E6` 与白色交替背景，翡翠绿仅用于强调元素（按钮、链接、图标）。暗色模式统一纯黑。

### 首页区块背景交替规则（浅色模式）

```
Hero(浅粉) → Features(白) → About(浅粉) → Pricing(白) →
Testimonials(浅粉) → FAQ(白) → Team(浅粉) → Blog(白) → Contact(浅粉) → CTA(翡翠绿)
```

- 浅粉区块：`bg-[#FFE4E6]`
- 白色区块：`bg-white`
- 导航栏 sticky：`rgb(255 228 230 / 0.85)`（浅粉半透明）
- 所有区块暗色模式不变：`dark:bg-black`

## 暗色模式设计规范

- 区块背景用 `dark:bg-black`，卡片/浮层用 `dark:bg-[#111]`，保持全站一致
- 推荐定价卡片：`dark:border dark:border-[rgba(15,118,110,0.3)]`（翡翠绿微发光边框）

## 定价卡片排版

- 价格数字使用 `font-extrabold` 加粗突出，货币符号和周期文字保持较轻字重

## 样式优先级（从低到高）

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

## 修改全局样式/颜色

- Tailwind 主色：编辑 `tailwind.config.js` 中的 `primary` 和 `blue-dark`
- Tailwind 类：直接在组件中修改
- 主题专属 CSS：编辑 `themes/starter/style.js`（注意同步硬编码的 RGB 值）
- 全局 CSS：编辑 `styles/globals.css`

## 已完成的样式定制

### 品牌色重塑：翡翠绿 + 白底专业风格（commit: 1798727e）

- `primary`: `#3758F9` → `#0f766e`（翡翠绿）
- `blue-dark`: `#1B44C8` → `#0d6560`（深翡翠绿）
- Hero 背景：`bg-primary` → 浅色背景
- Features 背景：`bg-primary` → `bg-white` + 白色卡片
- 导航栏 `style.js`：所有 `rgb(55 88 249)` → `rgb(15 118 110)`
- SVG 图标：`fill="white"` → `fill="currentColor"`

### 浅色模式浅粉白交替背景

- 区块交替背景色：`#FFE4E6`（浅粉色）与白色
- Hero/About/Testimonials/Team/Contact：`bg-[#FFE4E6]`
- Features/Pricing/FAQ/Blog：`bg-white`
- 导航栏 sticky：`rgb(255 228 230 / 0.85)`（浅粉半透明）

### 暗色模式统一（commit: 880e1277）

所有区块暗色背景统一为 `dark:bg-black` / `dark:bg-[#111]`。

### 商业化排版优化

- 推荐定价卡片暗色模式添加翡翠绿微发光边框
- 定价数字使用 `font-extrabold` 加粗突出视觉抓取力
