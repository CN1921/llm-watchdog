# llm-watchdog
# llm-watchdog 🐶

[English](./README_en.md) | 简体中文

`llm-watchdog` 是一个专为大语言模型（LLM）开发和运维设计的**轻量级、实时 Token 监测与成本分析面板**。它可以像“看门狗”一样，实时监控你的 LLM 应用（如 OpenAI, Claude, LangChain 等）的 Token 消耗、响应延迟及费用开支，帮助开发者和企业精准优化模型调用成本。

---

## 🚀 核心亮点：大模型 Token 监测面板

我们的可视化监测面板专为 LLM 特性定制，具有以下核心优势：

* **📊 多维度实时看板 (Real-time Dashboard)**
    * **Token 流水毫秒级刷新**：实时展示 Prompt Token、Completion Token 以及 Total Token 的消耗曲线。
    * **精细化模型分类**：支持多模型（gpt-4o, claude-3-5-sonnet 等）并发监控，一目了然哪个模型是“Token 大户”。
* **💰 精准成本与 ROI 算账**
    * **动态费率配置**：内置主流模型最新官方官方计价，并支持自定义输入/输出 Token 费率。
    * **账单可视化**：自动按日、按周、按用户/API Key 聚合生成成本图表，直观掌控 ROI。
* **⏱️ 性能与延迟（Latency）追踪**
    * **TTFT（首字延迟）监测**：针对流式传输（Streaming），精准捕捉首字响应时间，评估用户体验。
    * **TPS（每秒 Token 数）吞吐量分析**：全方位评估模型响应效率与网络性能。
* **🚨 智能阈值告警 (Watchdog Alert)**
    * **异常流量拦截**：可配置单次调用、每日调用的 Token/费用上限，一旦触发自动触发 Webhook（钉钉、企业微信、Slack）告警，防止代码死循环或恶意刷量导致破产。
* **🔌 零侵入式接入 (Non-invasive)**
    * 提供一行代码级 SDK 接入或 API 代理（Proxy）模式，无需重构现有业务逻辑即可轻松监控。

---

## 🛠️ 功能特性

- [x] **多模型支持**：原生支持 OpenAI, Anthropic, Gemini, HuggingFace 及本地开源模型（vLLM, Ollama）。
- [x] **流式传输监控**：完美兼容 Stream 模式下的 Token 计数。
- [x] **历史数据持久化**：支持 SQLite/MySQL/InfluxDB 存储历史监控数据。
- [x] **多租户/项目隔离**：支持按 AppID、用户或 API Key 进行数据隔离与统计。

## 📦 快速上手

### 1. 安装
```bash
pip install llm-watchdog
# 或者使用 Docker 部署面板
docker run -d -p 8080:8080 cn1921/llm-watchdog:latest
