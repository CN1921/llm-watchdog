
# 📊 LLM-Watchdog (大模型 Token 监测面板)

[![Language](https://img.shields.io/badge/language-JavaScript%20%2F%20HTML-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

`LLM-Watchdog` 是一款轻量级、直观且高效的**大模型 Token 监测面板**。基于纯前端技术（JavaScript & HTML）构建，旨在为开发者和团队提供实时、透明的 LLM（大语言模型）Token 消耗与成本监控方案。

[English](./README_EN.md) | [简体中文](./README.md)

---

## ✨ 项目亮点 (Key Features)

* **🌐 原生多语言支持 (Multi-language Support)**
    * 内置无缝的语种切换机制（支持中文、英文等）。
    * 一键切换，全系统 UI 文本、图表标签及提示信息即时更新，无需刷新页面，对国际化团队极度友好。
* **⏱️ 实时 Token 追踪 (Real-time Token Tracking)**
    * 精准捕获并可视化输入（Prompt Tokens）、输出（Completion Tokens）以及总 Token 消耗。
    * 提供动态图表更新，大模型调用走势一目了然。
* **💰 成本智能精算 (Cost Assessment)**
    * 支持自定义不同大模型（如 GPT-4, Claude, DeepSeek 等）的费率。
    * 自动将 Token 消耗换算为实际财务成本，帮您牢牢把控 API 预算。
* **⚡ 纯前端轻量化架构 (Lightweight & Pure Frontend)**
    * 基于 **JavaScript + HTML5** 编写，无需配置复杂的后端环境。
    * 即插即用，开箱即用，极低的运行开销与高响应速度。
* **📊 响应式可视化面板 (Responsive Dashboard)**
    * 精心设计的 UI 界面，完美适配 PC 端与移动端屏幕。
    * 数据图表化展示，支持多维度的数据筛选与历史复盘。

---

## 🛠️ 技术栈 (Tech Stack)

* **Core:** Vanilla JavaScript (ES6+), HTML5, CSS3
* **Localization:** 轻量级 JS 多语言国际化（i18n）解决方案
* **Charts:** [可在此处补充你使用的图表库，如 Chart.js / ECharts]

---

## 🚀 快速开始 (Quick Start)

### 1. 克隆仓库
```bash
git clone [https://github.com/CN1921/llm-watchdog.git](https://github.com/CN1921/llm-watchdog.git)
cd llm-watchdog
