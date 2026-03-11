---
name: i18n-check
description: 检查 NotionNext starter 主题的国际化完整性。扫描 config.js 中所有中文配置是否有对应的 _EN 英文翻译，检查组件是否正确使用 useStarterI18n。
invocation: user
---

# NotionNext i18n 完整性检查

## 触发条件
用户输入 `/i18n-check` 或提到"检查翻译""翻译是否完整""i18n 检查"。

## 执行步骤

### 1. 扫描 config.js 中缺失的 _EN 翻译
```
在 themes/starter/config.js 中：
- 找到所有 STARTER_*_TITLE、STARTER_*_TEXT、STARTER_*_DESCRIPTION、
  STARTER_*_BUTTON_TEXT、STARTER_*_QUESTION、STARTER_*_ANSWER、
  STARTER_*_SLOGAN、STARTER_*_TAG、STARTER_*_FEATURES、
  STARTER_*_HEADER、STARTER_*_PRICE_PERIOD 配置项
- 检查每个是否有对应的 _EN 后缀版本
- 列出所有缺失的 _EN 翻译
```

### 2. 扫描数组项中缺失的 _EN 字段
```
检查以下数组中每个对象是否有 _EN 字段：
- STARTER_TESTIMONIALS_ITEMS: 检查 _TEXT_EN, _DESCRIPTION_EN
- STARTER_TEAM_ITEMS: 检查 _DESCRIPTION_EN
- STARTER_FOOTER_LINK_GROUP: 检查 TITLE_EN, 子项 TITLE_EN
```

### 3. 扫描组件中未使用 useStarterI18n 的文本
```
在 themes/starter/components/*.js 中：
- 找到所有 siteConfig('STARTER_*_TITLE') 等文本类调用
- 检查是否应该改为 useStarterI18n
- 排除 URL、IMAGE、ENABLE、PRICE、CURRENCY、ICON、COUNT 等不需要翻译的
```

### 4. 输出报告
```
## i18n 检查报告

### 缺失的 _EN 翻译 (X 项)
- STARTER_XXX_YYY → 需要添加 STARTER_XXX_YYY_EN

### 数组项缺失 _EN 字段 (X 项)
- STARTER_TESTIMONIALS_ITEMS[0] 缺少 _TEXT_EN

### 组件中应使用 useStarterI18n 但未使用 (X 项)
- Features.js:15 siteConfig('STARTER_FEATURE_TITLE') → 应改为 useStarterI18n

### 结论: ✅ 全部通过 / ⚠️ 有 X 项需要修复
```
