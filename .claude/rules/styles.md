# 样式与颜色体系

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

## 暗色模式设计规范

- 区块背景用 `dark:bg-black`，卡片/浮层用 `dark:bg-[#111]`，保持全站一致

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
- Hero 背景：`bg-primary` → `bg-white`（白底）
- Features 背景：`bg-primary` → `bg-gray-1`（浅灰底）+ 白色卡片
- Contact 上半部分：`bg-[#FFF0F3]` → `bg-gray-1`
- 导航栏 `style.js`：所有 `rgb(55 88 249)` → `rgb(15 118 110)`
- SVG 图标：`fill="white"` → `fill="currentColor"`

### 暗色模式统一（commit: 880e1277）

所有区块暗色背景统一为 `dark:bg-black` / `dark:bg-[#111]`。
