# cferspace

Yongqi 的个人主页，记录项目、技术栈和联系方式。

## 页面结构

- **Hero** — 自我介绍与技术标签
- **Projects** — K8s 自动化部署、立体化监控、堡垒机审计、运维工具箱
- **Tech Stack** — 无限滚动技术栈展示（Linux / Docker / Kubernetes / Prometheus 等）
- **Testimonials** — 同事评价
- **FAQ** — 常见问题
- **Footer** — 联系方式

## 技术栈

- Next.js 14（静态导出）
- Tailwind CSS + shadcn/ui
- Framer Motion
- 部署：阿里云 ESA Pages（`esa.jsonc` 配置自动触发构建）

## 本地开发

```bash
npm install
npm run dev
```

构建产物输出到 `dist/`，由 `next.config.mjs` 中的 `output: 'export'` 控制。
