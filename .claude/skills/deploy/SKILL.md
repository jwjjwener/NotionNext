---
name: deploy
description: 一键部署 NotionNext 到 Vercel。自动检查 git 状态、暂存变更、提交并推送到 main 分支触发 Vercel 自动部署。
invocation: user
---

# NotionNext 一键部署

## 触发条件
用户输入 `/deploy` 或提到"部署""推送""上线""发布到线上"。

## 执行步骤

### 1. 检查 Git 状态
```
运行 git status 查看：
- 是否有未暂存的修改
- 是否有未跟踪的新文件
- 当前分支是否为 main
- 如果没有任何变更，提示"没有需要部署的变更"并结束
```

### 2. 展示变更摘要
```
运行 git diff --stat 和 git diff --cached --stat
列出所有修改的文件和变更行数
让用户确认是否继续部署
```

### 3. 暂存并提交
```
- 暂存所有相关文件（排除 .env、node_modules 等敏感文件）
- 根据变更内容自动生成中文 commit message
- 格式: <type>: <中文描述>
- type 根据变更类型选择: feat/fix/refactor/docs/chore
```

### 4. 推送到远程
```
git push origin main
```

### 5. 部署确认
```
输出：
✅ 已推送到 main 分支
🚀 Vercel 将在 1-2 分钟内自动部署
🔗 线上地址: https://jadechineseclub.vercel.app/

提示用户可以用 Chrome DevTools MCP 验证部署结果
```

## 安全检查
- 不提交 .env 文件
- 不提交 node_modules/
- 不提交包含 API key 或密码的文件
- 推送前确认当前分支是 main
