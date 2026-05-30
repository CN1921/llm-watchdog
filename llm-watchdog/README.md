# 🐶 LLM Watchdog

> **Open-source, zero-install AI API monitoring dashboard** — Track token usage, costs, latency and provider health across OpenAI, Anthropic, Google, Cohere, Mistral, Groq and more.

[![License: MIT](https://img.shields.io/badge/License-MIT-00ff88.svg)](LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-00ff88)](https://github.com/llm-watchdog)
[![No Build Required](https://img.shields.io/badge/No%20Build-Required-blue)](index.html)
[![Languages](https://img.shields.io/badge/i18n-7%20Languages-purple)](#internationalization)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 **Real-time Dashboard** | Live token usage, cost tracking, request rates, and latency metrics |
| 🖥️ **Terminal Monitor** | Streaming log viewer with color-coded levels, filtering, and search |
| 📈 **Analytics** | 30-day trends, model breakdown, hourly pattern charts, cost pie |
| 🌐 **7 Languages** | EN / 中文 / 日本語 / 한국어 / ES / FR / DE |
| 🔔 **Smart Alerts** | Budget warnings, rate-limit detection, provider health monitoring |
| ⚡ **Zero Install** | Single HTML file — open in browser and it works immediately |
| 🔒 **Privacy First** | API keys stored locally only. No external data collection |
| 📤 **Export** | Download usage data as JSON or CSV |

---

## 🚀 Quick Start

### Option 1: Just open the file
```bash
# Clone the repo
git clone https://github.com/llm-watchdog/llm-watchdog.git
cd llm-watchdog

# Open in browser (no server needed!)
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Option 2: Serve locally
```bash
# Python (built-in)
python -m http.server 8080
# then visit http://localhost:8080

# Node.js (npx, no install)
npx serve .
# then visit http://localhost:3000
```

### Option 3: Docker
```bash
docker run -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
```

---

## 📸 Screenshots

| Dashboard | Terminal Monitor |
|-----------|-----------------|
| Real-time stats, sparklines, provider status | Color-coded live log stream |

| Analytics | Settings |
|-----------|----------|
| 30-day trends, model breakdown, cost pie | API keys, budgets, language, export |

---

## 🌐 Internationalization

Switch languages instantly via the top-right language selector:

| Code | Language   | Coverage |
|------|-----------|---------|
| `en` | English   | 100%    |
| `zh` | 中文       | 100%    |
| `ja` | 日本語     | 100%    |
| `ko` | 한국어     | 100%    |
| `es` | Español   | 100%    |
| `fr` | Français  | 100%    |
| `de` | Deutsch   | 100%    |

---

## 🔌 Supported Providers

| Provider | Models | Status |
|----------|--------|--------|
| **OpenAI** | gpt-4o, gpt-4o-mini, gpt-3.5-turbo | ✅ |
| **Anthropic** | claude-3.5-sonnet, claude-3-haiku | ✅ |
| **Google AI** | gemini-1.5-pro, gemini-1.5-flash | ✅ |
| **Cohere** | command-r+, command-r | ✅ |
| **Mistral AI** | mistral-large, mistral-small | ✅ |
| **Groq** | llama3-70b, llama3-8b | ✅ |

Enable/disable providers in **Settings → Providers**.

---

## 💰 Cost Tracking

LLM Watchdog tracks costs per request based on each model's published pricing:

```
gpt-4o:          $0.005/1K input · $0.015/1K output
claude-3.5-sonnet: $0.003/1K input · $0.015/1K output
gemini-1.5-pro:  $0.0035/1K input · $0.0105/1K output
...
```

Set **monthly budgets** and **warning thresholds** in Settings. Get alerts before you overspend.

---

## 🏗️ Architecture

```
llm-watchdog/
├── index.html      ← Main UI (HTML + CSS)
├── app.js          ← All logic (i18n, data, charts, terminal)
├── README.md       ← This file
└── LICENSE         ← MIT License
```

**Tech Stack:**
- Vanilla HTML5 / CSS3 / JavaScript (ES2022)
- [Chart.js](https://www.chartjs.org/) for visualizations
- Zero build step — works directly in modern browsers

---

## 🔧 Configuration

All configuration is stored in `localStorage` — no server, no database needed.

```javascript
// What gets stored locally:
{
  "oai":    "sk-...",        // OpenAI API key (optional)
  "ant":    "sk-ant-...",    // Anthropic API key (optional)
  "goo":    "AIza...",       // Google AI key (optional)
  "budget": "100",           // Monthly budget USD
  "warn":   "80",            // Warning threshold %
  "toklim": "1000000",       // Daily token limit
}
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push: `git push origin feature/amazing-feature`
5. Open a Pull Request

**Ideas for contributions:**
- [ ] Real API integration (proxy mode)
- [ ] WebSocket live data feed
- [ ] Dark/Light theme toggle
- [ ] More provider support (Azure OpenAI, AWS Bedrock, etc.)
- [ ] Slack/Discord webhook alerts
- [ ] More language translations
- [ ] Cost forecasting

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## ⭐ Star History

If LLM Watchdog helps you, please give it a star! ⭐

---

<div align="center">
  <strong>Built with ❤️ for the AI developer community</strong><br>
  <sub>Monitoring your AI spend since 2024</sub>
</div>
