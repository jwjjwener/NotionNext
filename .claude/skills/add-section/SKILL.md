---
name: add-section
description: 向 NotionNext starter 主题首页添加新区块。自动创建组件、添加配置（含中英文翻译）、注册到布局，遵循现有样式和 i18n 规范。
invocation: user
---

# 添加首页新区块

## 触发条件
用户输入 `/add-section` 或提到"添加区块""新增板块""加一个section"。

## 执行步骤

### 1. 收集信息
```
询问用户：
- 区块名称（英文，如 Gallery、Partners、Timeline）
- 区块用途/内容描述
- 希望放在哪个区块之后（参考现有顺序：Hero→Features→About→Pricing→Testimonials→FAQ→Team→Blog→Contact→CTA）
- 背景色偏好（根据交替规则自动建议：薄荷绿 #F0FDF4 或白色）
```

### 2. 创建组件文件
```
在 themes/starter/components/ 下创建 <Name>.js：
- 使用 useStarterI18n 读取所有文本（不用 siteConfig）
- 使用 siteConfig 读取非文本配置（ENABLE、URL、IMAGE 等）
- 遵循背景色交替规则
- 添加 dark:bg-black 暗色模式支持
- 使用 wow fadeInUp 动画（与现有区块一致）
- 响应式布局（mobile-first）
```

### 3. 添加配置到 config.js
```
在 themes/starter/config.js 中添加：
- STARTER_<NAME>_ENABLE: true（开关）
- STARTER_<NAME>_TITLE: '中文标题'
- STARTER_<NAME>_TITLE_EN: 'English Title'（必须同步添加英文翻译）
- 其他需要的配置项（每个都要有 _EN 版本）
```

### 4. 注册到布局
```
在 themes/starter/index.js 的 LayoutIndex 中：
- import 新组件
- 在指定位置插入 {siteConfig('STARTER_<NAME>_ENABLE') && <Name />}
```

### 5. 输出检查清单
```
## 新区块检查清单
- [ ] 组件创建: themes/starter/components/<Name>.js
- [ ] 配置添加: themes/starter/config.js（含 _EN 翻译）
- [ ] 布局注册: themes/starter/index.js LayoutIndex
- [ ] 背景色符合交替规则
- [ ] 暗色模式支持 (dark:bg-black)
- [ ] 所有文本使用 useStarterI18n
- [ ] 响应式布局正常
```

## 规范参考
- 样式规范: .claude/rules/styles.md
- i18n 规范: .claude/rules/i18n.md
- 渲染链路: .claude/rules/homepage-rendering.md
