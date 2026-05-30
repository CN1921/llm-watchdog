/* =============================================================
   LLM Watchdog — app.js
   Open-source AI API Monitoring Dashboard
   MIT License | github.com/llm-watchdog
   ============================================================= */

/* ── i18n ─────────────────────────────────────────────────── */
const I18N = {
  en:{
    nav_main:'MAIN',nav_dash:'Dashboard',nav_term:'Terminal',nav_ana:'Analytics',
    nav_mon:'MONITORING',nav_prov:'Providers',nav_alr:'Alerts',
    nav_sys:'SYSTEM',nav_cfg:'Settings',collapse:'Collapse',
    page_dash:'Dashboard Overview',page_term:'Live Terminal',page_ana:'Analytics',
    page_prov:'Provider Status',page_alr:'Alerts',page_cfg:'Settings',
    st_ok:'All Systems OK',st_deg:'Issues Detected',
    notifications:'Notifications',clear_all:'Clear all',
    total_reqs:'Total Requests',tok_usage:'Token Usage',total_cost:'Total Cost',avg_lat:'Avg Latency',
    vs_yd:'vs yesterday',tok_timeline:'Token Usage Timeline',r1h:'1H',r24h:'24H',r7d:'7D',
    live_reqs:'Live Requests',budget_use:'Budget Usage',prov_status:'Provider Status',
    f_all:'ALL',auto_scroll:'Auto-scroll',lines:'lines',
    term_title:'LLM Watchdog — Live API Log Stream',clear:'Clear',
    this_month:'This Month',month_cost:'Month Cost',daily_avg:'Daily Avg',peak_rps:'Peak RPS',
    tokens:'tokens',tok_trend:'30-Day Token Trend',cost_pie:'Cost by Provider',
    model_usage:'Model Usage',hourly:'Hourly Pattern',
    model:'Model',requests:'Requests',cost:'Cost',
    active_alerts:'Active Alerts',dismiss_all:'Dismiss All',
    api_keys:'API Keys',key_hint:'Stored locally. Never sent to any server.',
    budget_cfg:'Budget & Alerts',monthly_budget:'Monthly Budget (USD)',
    warn_pct:'Warning Threshold (%)',tok_lim:'Daily Token Limit',
    prov_cfg:'Providers',prefs:'Preferences',disp_lang:'Display Language',
    log_ret:'Log Retention',ref_rate:'Refresh Rate',data_exp:'Data Export',
    clear_data:'Clear Data',save_cfg:'Save Configuration',
    t_saved:'Configuration saved!',t_cleared:'Data cleared.',t_exported:'Exported!',
    enabled:'Enabled',disabled:'Disabled',
  },
  zh:{
    nav_main:'主要',nav_dash:'仪表盘',nav_term:'终端监控',nav_ana:'数据分析',
    nav_mon:'监控',nav_prov:'服务商',nav_alr:'告警',
    nav_sys:'系统',nav_cfg:'设置',collapse:'收起侧栏',
    page_dash:'仪表盘总览',page_term:'实时终端',page_ana:'数据分析',
    page_prov:'服务商状态',page_alr:'告警中心',page_cfg:'系统设置',
    st_ok:'所有系统正常',st_deg:'检测到部分异常',
    notifications:'通知',clear_all:'清除全部',
    total_reqs:'总请求数',tok_usage:'Token 用量',total_cost:'总费用',avg_lat:'平均延迟',
    vs_yd:'vs 昨日',tok_timeline:'Token 用量趋势',r1h:'1小时',r24h:'24小时',r7d:'7天',
    live_reqs:'实时请求',budget_use:'预算使用',prov_status:'服务商状态',
    f_all:'全部',auto_scroll:'自动滚动',lines:'行',
    term_title:'LLM Watchdog — 实时 API 日志流',clear:'清空',
    this_month:'本月',month_cost:'本月费用',daily_avg:'日均用量',peak_rps:'峰值 RPS',
    tokens:'tokens',tok_trend:'30天 Token 趋势',cost_pie:'各服务商费用',
    model_usage:'模型用量明细',hourly:'每小时请求分布',
    model:'模型',requests:'请求数',cost:'费用',
    active_alerts:'当前告警',dismiss_all:'全部忽略',
    api_keys:'API 密钥',key_hint:'仅存储在本地浏览器，不会上传到任何服务器。',
    budget_cfg:'预算告警',monthly_budget:'月度预算（美元）',
    warn_pct:'告警阈值（%）',tok_lim:'每日 Token 上限',
    prov_cfg:'服务商',prefs:'偏好设置',disp_lang:'显示语言',
    log_ret:'日志保留行数',ref_rate:'刷新频率',data_exp:'数据导出',
    clear_data:'清除数据',save_cfg:'保存配置',
    t_saved:'配置已保存！',t_cleared:'数据已清除。',t_exported:'导出成功！',
    enabled:'已启用',disabled:'已禁用',
  },
  ja:{
    nav_main:'メイン',nav_dash:'ダッシュボード',nav_term:'ターミナル',nav_ana:'分析',
    nav_mon:'モニタリング',nav_prov:'プロバイダー',nav_alr:'アラート',
    nav_sys:'システム',nav_cfg:'設定',collapse:'折りたたむ',
    page_dash:'ダッシュボード',page_term:'ライブターミナル',page_ana:'分析',
    page_prov:'プロバイダー状態',page_alr:'アラート',page_cfg:'設定',
    st_ok:'全システム正常',st_deg:'問題を検出',
    notifications:'通知',clear_all:'すべてクリア',
    total_reqs:'総リクエスト',tok_usage:'トークン使用量',total_cost:'総コスト',avg_lat:'平均レイテンシ',
    vs_yd:'昨日比',tok_timeline:'トークン使用量推移',r1h:'1時間',r24h:'24時間',r7d:'7日間',
    live_reqs:'ライブリクエスト',budget_use:'予算使用状況',prov_status:'プロバイダー状態',
    f_all:'全て',auto_scroll:'自動スクロール',lines:'行',
    term_title:'LLM Watchdog — ライブAPIログ',clear:'クリア',
    this_month:'今月',month_cost:'今月コスト',daily_avg:'日平均',peak_rps:'ピーク RPS',
    tokens:'トークン',tok_trend:'30日間トレンド',cost_pie:'プロバイダー別コスト',
    model_usage:'モデル別使用量',hourly:'時間別パターン',
    model:'モデル',requests:'リクエスト',cost:'コスト',
    active_alerts:'アクティブアラート',dismiss_all:'全て無視',
    api_keys:'APIキー',key_hint:'ローカルのみ保存。サーバー送信なし。',
    budget_cfg:'予算アラート',monthly_budget:'月次予算（USD）',
    warn_pct:'警告しきい値（%）',tok_lim:'1日トークン上限',
    prov_cfg:'プロバイダー',prefs:'設定',disp_lang:'表示言語',
    log_ret:'ログ保持行数',ref_rate:'更新レート',data_exp:'データエクスポート',
    clear_data:'データ削除',save_cfg:'設定を保存',
    t_saved:'設定を保存しました！',t_cleared:'データをクリアしました。',t_exported:'エクスポート完了！',
    enabled:'有効',disabled:'無効',
  },
  ko:{
    nav_main:'메인',nav_dash:'대시보드',nav_term:'터미널',nav_ana:'분석',
    nav_mon:'모니터링',nav_prov:'공급자',nav_alr:'알림',
    nav_sys:'시스템',nav_cfg:'설정',collapse:'사이드바 접기',
    page_dash:'대시보드',page_term:'실시간 터미널',page_ana:'분석',
    page_prov:'공급자 상태',page_alr:'알림',page_cfg:'설정',
    st_ok:'모든 시스템 정상',st_deg:'문제 감지',
    notifications:'알림',clear_all:'모두 지우기',
    total_reqs:'총 요청 수',tok_usage:'토큰 사용량',total_cost:'총 비용',avg_lat:'평균 지연',
    vs_yd:'어제 대비',tok_timeline:'토큰 사용 추이',r1h:'1시간',r24h:'24시간',r7d:'7일',
    live_reqs:'실시간 요청',budget_use:'예산 사용',prov_status:'공급자 상태',
    f_all:'전체',auto_scroll:'자동 스크롤',lines:'줄',
    term_title:'LLM Watchdog — 실시간 API 로그',clear:'지우기',
    this_month:'이번 달',month_cost:'월 비용',daily_avg:'일 평균',peak_rps:'최대 RPS',
    tokens:'토큰',tok_trend:'30일 트렌드',cost_pie:'공급자별 비용',
    model_usage:'모델별 사용량',hourly:'시간별 패턴',
    model:'모델',requests:'요청',cost:'비용',
    active_alerts:'활성 알림',dismiss_all:'모두 해제',
    api_keys:'API 키',key_hint:'로컬에만 저장됩니다.',
    budget_cfg:'예산 알림',monthly_budget:'월 예산 (USD)',
    warn_pct:'경고 임계값 (%)',tok_lim:'일일 토큰 한도',
    prov_cfg:'공급자',prefs:'환경설정',disp_lang:'표시 언어',
    log_ret:'로그 보관 줄 수',ref_rate:'새로고침 속도',data_exp:'데이터 내보내기',
    clear_data:'데이터 삭제',save_cfg:'설정 저장',
    t_saved:'설정이 저장되었습니다!',t_cleared:'데이터가 지워졌습니다.',t_exported:'내보내기 성공!',
    enabled:'활성화',disabled:'비활성화',
  },
  es:{
    nav_main:'PRINCIPAL',nav_dash:'Panel',nav_term:'Terminal',nav_ana:'Análisis',
    nav_mon:'MONITOREO',nav_prov:'Proveedores',nav_alr:'Alertas',
    nav_sys:'SISTEMA',nav_cfg:'Configuración',collapse:'Contraer',
    page_dash:'Panel de Control',page_term:'Terminal en Vivo',page_ana:'Análisis',
    page_prov:'Estado Proveedores',page_alr:'Alertas',page_cfg:'Configuración',
    st_ok:'Todos los Sistemas OK',st_deg:'Problemas Detectados',
    notifications:'Notificaciones',clear_all:'Borrar todo',
    total_reqs:'Total Solicitudes',tok_usage:'Uso de Tokens',total_cost:'Costo Total',avg_lat:'Latencia Promedio',
    vs_yd:'vs ayer',tok_timeline:'Cronología Tokens',r1h:'1H',r24h:'24H',r7d:'7D',
    live_reqs:'Solicitudes en Vivo',budget_use:'Uso Presupuesto',prov_status:'Estado Proveedores',
    f_all:'TODO',auto_scroll:'Auto-desplazamiento',lines:'líneas',
    term_title:'LLM Watchdog — Log en Vivo',clear:'Limpiar',
    this_month:'Este Mes',month_cost:'Costo Mes',daily_avg:'Promedio Diario',peak_rps:'RPS Pico',
    tokens:'tokens',tok_trend:'Tendencia 30 Días',cost_pie:'Costo por Proveedor',
    model_usage:'Uso por Modelo',hourly:'Patrón Horario',
    model:'Modelo',requests:'Solicitudes',cost:'Costo',
    active_alerts:'Alertas Activas',dismiss_all:'Ignorar Todo',
    api_keys:'Claves API',key_hint:'Almacenado localmente. Nunca enviado a ningún servidor.',
    budget_cfg:'Alertas de Presupuesto',monthly_budget:'Presupuesto Mensual (USD)',
    warn_pct:'Umbral de Advertencia (%)',tok_lim:'Límite Diario Tokens',
    prov_cfg:'Proveedores',prefs:'Preferencias',disp_lang:'Idioma',
    log_ret:'Retención de Logs',ref_rate:'Tasa Actualización',data_exp:'Exportar Datos',
    clear_data:'Borrar Datos',save_cfg:'Guardar Configuración',
    t_saved:'¡Configuración guardada!',t_cleared:'Datos eliminados.',t_exported:'¡Exportado!',
    enabled:'Habilitado',disabled:'Deshabilitado',
  },
  fr:{
    nav_main:'PRINCIPAL',nav_dash:'Tableau de bord',nav_term:'Terminal',nav_ana:'Analytique',
    nav_mon:'SURVEILLANCE',nav_prov:'Fournisseurs',nav_alr:'Alertes',
    nav_sys:'SYSTÈME',nav_cfg:'Paramètres',collapse:'Réduire',
    page_dash:'Vue d\'ensemble',page_term:'Terminal en direct',page_ana:'Analytique',
    page_prov:'État Fournisseurs',page_alr:'Alertes',page_cfg:'Paramètres',
    st_ok:'Tous les Systèmes OK',st_deg:'Problèmes Détectés',
    notifications:'Notifications',clear_all:'Tout effacer',
    total_reqs:'Total Requêtes',tok_usage:'Utilisation Tokens',total_cost:'Coût Total',avg_lat:'Latence Moyenne',
    vs_yd:'vs hier',tok_timeline:'Chronologie Tokens',r1h:'1H',r24h:'24H',r7d:'7J',
    live_reqs:'Requêtes en Direct',budget_use:'Utilisation Budget',prov_status:'État Fournisseurs',
    f_all:'TOUS',auto_scroll:'Défilement auto',lines:'lignes',
    term_title:'LLM Watchdog — Flux Log en Direct',clear:'Effacer',
    this_month:'Ce Mois',month_cost:'Coût du Mois',daily_avg:'Moyenne Quotidienne',peak_rps:'RPS Max',
    tokens:'tokens',tok_trend:'Tendance Tokens 30 Jours',cost_pie:'Coût par Fournisseur',
    model_usage:'Répartition par Modèle',hourly:'Répartition Horaire',
    model:'Modèle',requests:'Requêtes',cost:'Coût',
    active_alerts:'Alertes Actives',dismiss_all:'Tout ignorer',
    api_keys:'Clés API',key_hint:'Stocké localement. Jamais envoyé à un serveur.',
    budget_cfg:'Alertes Budget',monthly_budget:'Budget Mensuel (USD)',
    warn_pct:'Seuil d\'Avertissement (%)',tok_lim:'Limite Quotidienne Tokens',
    prov_cfg:'Fournisseurs',prefs:'Préférences',disp_lang:'Langue',
    log_ret:'Conservation des Logs',ref_rate:'Taux Rafraîchissement',data_exp:'Export Données',
    clear_data:'Effacer Données',save_cfg:'Sauvegarder',
    t_saved:'Configuration sauvegardée!',t_cleared:'Données effacées.',t_exported:'Exporté!',
    enabled:'Activé',disabled:'Désactivé',
  },
  de:{
    nav_main:'HAUPT',nav_dash:'Dashboard',nav_term:'Terminal',nav_ana:'Analytik',
    nav_mon:'ÜBERWACHUNG',nav_prov:'Anbieter',nav_alr:'Warnungen',
    nav_sys:'SYSTEM',nav_cfg:'Einstellungen',collapse:'Einklappen',
    page_dash:'Dashboard Übersicht',page_term:'Live Terminal',page_ana:'Analytik',
    page_prov:'Anbieter Status',page_alr:'Warnungen',page_cfg:'Einstellungen',
    st_ok:'Alle Systeme OK',st_deg:'Probleme Erkannt',
    notifications:'Benachrichtigungen',clear_all:'Alle löschen',
    total_reqs:'Gesamtanfragen',tok_usage:'Token-Nutzung',total_cost:'Gesamtkosten',avg_lat:'Ø Latenz',
    vs_yd:'vs gestern',tok_timeline:'Token-Nutzungsverlauf',r1h:'1Std',r24h:'24Std',r7d:'7T',
    live_reqs:'Live Anfragen',budget_use:'Budgetnutzung',prov_status:'Anbieter Status',
    f_all:'ALLE',auto_scroll:'Auto-Scrollen',lines:'Zeilen',
    term_title:'LLM Watchdog — Live API Log',clear:'Löschen',
    this_month:'Dieser Monat',month_cost:'Monatskosten',daily_avg:'Tagesdurchschnitt',peak_rps:'Spitzen-RPS',
    tokens:'Tokens',tok_trend:'30-Tage Token-Trend',cost_pie:'Kosten nach Anbieter',
    model_usage:'Modell-Nutzung',hourly:'Stündliches Muster',
    model:'Modell',requests:'Anfragen',cost:'Kosten',
    active_alerts:'Aktive Warnungen',dismiss_all:'Alle ignorieren',
    api_keys:'API-Schlüssel',key_hint:'Lokal gespeichert. Nie an Server gesendet.',
    budget_cfg:'Budget-Warnungen',monthly_budget:'Monatsbudget (USD)',
    warn_pct:'Warnschwelle (%)',tok_lim:'Tägliches Token-Limit',
    prov_cfg:'Anbieter',prefs:'Einstellungen',disp_lang:'Anzeigesprache',
    log_ret:'Log-Aufbewahrung',ref_rate:'Aktualisierungsrate',data_exp:'Datenexport',
    clear_data:'Daten löschen',save_cfg:'Konfiguration speichern',
    t_saved:'Konfiguration gespeichert!',t_cleared:'Daten gelöscht.',t_exported:'Exportiert!',
    enabled:'Aktiviert',disabled:'Deaktiviert',
  },
};

let lang = localStorage.getItem('wdog_lang') || 'en';
const t = k => (I18N[lang]||I18N.en)[k] || (I18N.en[k] || k);

function setLang(l) {
  lang = l;
  localStorage.setItem('wdog_lang', l);
  document.getElementById('lsel').value = l;
  const cl = document.getElementById('c-lang');
  if (cl) cl.value = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t(k);
    else el.textContent = t(k);
  });
  document.getElementById('pg-title').textContent = t('page_' + curPage);
}

/* ── DATA MODEL ───────────────────────────────────────────── */
const PROVIDERS = [
  {id:'openai',  name:'OpenAI',    color:'#10a37f', bg:'rgba(16,163,127,.15)', icon:'O', models:['gpt-4o','gpt-4o-mini','gpt-3.5-turbo'], enabled:true,  status:'operational'},
  {id:'anthropic',name:'Anthropic',color:'#c96442', bg:'rgba(201,100,66,.15)',  icon:'A', models:['claude-3.5-sonnet','claude-3-haiku'],    enabled:true,  status:'operational'},
  {id:'google',  name:'Google AI', color:'#4285f4', bg:'rgba(66,133,244,.15)',  icon:'G', models:['gemini-1.5-pro','gemini-1.5-flash'],    enabled:true,  status:'operational'},
  {id:'cohere',  name:'Cohere',    color:'#39594d', bg:'rgba(57,89,77,.2)',     icon:'C', models:['command-r+','command-r'],               enabled:false, status:'operational'},
  {id:'mistral', name:'Mistral',   color:'#ff7000', bg:'rgba(255,112,0,.15)',   icon:'M', models:['mistral-large','mistral-small'],        enabled:false, status:'degraded'},
  {id:'groq',    name:'Groq',      color:'#f55036', bg:'rgba(245,80,54,.15)',   icon:'Q', models:['llama3-70b','llama3-8b'],              enabled:false, status:'operational'},
];

const COSTS = {
  'gpt-4o':{i:.005,o:.015},'gpt-4o-mini':{i:.00015,o:.0006},'gpt-3.5-turbo':{i:.0005,o:.0015},
  'claude-3.5-sonnet':{i:.003,o:.015},'claude-3-haiku':{i:.00025,o:.00125},
  'gemini-1.5-pro':{i:.0035,o:.0105},'gemini-1.5-flash':{i:.000075,o:.0003},
  'command-r+':{i:.003,o:.015},'command-r':{i:.0005,o:.0015},
  'mistral-large':{i:.003,o:.009},'mistral-small':{i:.001,o:.003},
  'llama3-70b':{i:.00059,o:.00079},'llama3-8b':{i:.00005,o:.00008},
};

const USERS   = ['user:alice','user:bob','user:carol','svc:backend','svc:chatbot','svc:analyzer','app:mobile','app:web','bot:agent'];
const PATHS   = ['/v1/chat/completions','/v1/messages','/v1/generate','/v1/embeddings','/v1/completions'];

const LOG_MSGS = [
  (m,tok,lat,u) => [`${u} → ${m}`, `Request OK | ${tok} tokens | ${lat}ms`, 'SUCCESS', tok],
  (m,tok,lat,u) => [`${u} → ${m}`, `Stream chunk | in:${Math.floor(tok*.35)} out:${Math.floor(tok*.65)}`, 'INFO', tok],
  (m,tok,lat,u) => [`${u} → ${m}`, `Chat completion | prompt:${Math.floor(tok*.4)} completion:${Math.floor(tok*.6)}`, 'INFO', tok],
  (m,tok,lat,u) => [m, `Rate limit: ${~~(Math.random()*20+70)}% of TPM used`, 'WARN', 0],
  (m,tok,lat,u) => [m, `Context ${~~(tok/1000)}K/${~~(Math.random()*80+100)}K tokens`, 'DEBUG', tok],
  (m,tok,lat,u) => [m, `Cache hit — saved ${~~(Math.random()*2000+500)} tokens`, 'SUCCESS', 0],
  (m,tok,lat,u) => [m, `Retry 1/3 — timeout ${lat}ms`, 'WARN', 0],
  (m,tok,lat,u) => [m, `Embedding | dims:1536 | ${tok} tokens`, 'INFO', tok],
  (m,tok,lat,u) => [m, `Function call: get_weather("${['Beijing','Tokyo','NYC','Paris'][~~(Math.random()*4)]}")`, 'DEBUG', 0],
  (m,tok,lat,u) => [m, `Stream start — first token ${~~(Math.random()*300+80)}ms`, 'INFO', 0],
  (m,tok,lat,u) => [m, `API Error 429: Too Many Requests`, 'ERROR', 0],
  (m,tok,lat,u) => [m, `System prompt cached | ${~~(Math.random()*1000+500)} tokens`, 'SUCCESS', 0],
  (m,tok,lat,u) => [m, `Moderation check passed | ${~~(Math.random()*50+10)}ms`, 'DEBUG', 0],
  (m,tok,lat,u) => [`${u} → ${m}`, `Streaming complete | ${tok} total tokens | $${((tok*(COSTS[m]?.o||.001))/1000).toFixed(5)}`, 'SUCCESS', tok],
];

/* State */
const S = {
  totalReqs:0, totalTok:0, totalCost:0,
  latSum:0, latCnt:0, avgLat:0,
  tokHist:[], reqHist:[], costHist:[],
  modelStats:{}, provStats:{},
  logLines:[], logTotal:0, logErrors:0, logWarns:0,
  tpsBuf:[], tps:0,
  hourly:new Array(24).fill(0),
  daily:[],
  autoScroll:true, logFilter:'ALL', logSearch:'',
  chartRange:'1h',
};

// init model stats
Object.keys(COSTS).forEach(m => { S.modelStats[m] = {req:0,tok:0,cost:0,latSum:0}; });
PROVIDERS.forEach(p => { S.provStats[p.id] = {req:0,tok:0,cost:0}; });

// generate 30 days of historical data
for (let i=29;i>=0;i--) {
  S.daily.push(Math.round(600000 + Math.random()*600000 + (29-i)*15000));
}

/* ── NAVIGATION ──────────────────────────────────────────── */
let curPage = 'dash';
let anaChartsInited = false;

function nav(page, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('active'));
  const pg = document.getElementById(page+'-page');
  if (pg) pg.classList.add('active');
  if (el) el.classList.add('active');
  curPage = page;
  document.getElementById('pg-title').textContent = t('page_'+page);
  if (page==='ana') { initAnaCharts(); renderModelTable(); }
  if (page==='prov') renderProvDetail();
  if (page==='alr') renderAlerts();
  if (page==='cfg') renderProvToggles();
  closeNP();
}

function toggleSB() { document.getElementById('sb').classList.toggle('col'); }

/* ── NOTIFICATIONS ───────────────────────────────────────── */
let notifs = [
  {title:'Budget Alert', desc:'OpenAI usage reached 82% of monthly budget.', time:'2 min ago', type:'warn'},
  {title:'Rate Limit Warning', desc:'claude-3.5-sonnet approaching TPM limit.', time:'7 min ago', type:'warn'},
  {title:'Mistral Degraded', desc:'Elevated latency detected on Mistral AI endpoints.', time:'23 min ago', type:'error'},
];

function renderNP() {
  const el = document.getElementById('np-list');
  if (!el) return;
  el.innerHTML = notifs.map(n => `
    <div class="np-item">
      <div class="np-t">${n.title}</div>
      <div class="np-d">${n.desc}</div>
      <div class="np-tm">${n.time}</div>
    </div>`).join('') || '<div style="padding:16px;text-align:center;color:var(--t3);font-size:12px">No notifications</div>';
  const c = document.getElementById('np-cnt');
  const ab = document.getElementById('alr-cnt');
  if (c) c.textContent = notifs.length;
  if (ab) ab.textContent = notifs.length;
}

function toggleNP() {
  const np = document.getElementById('np');
  np.classList.toggle('open');
  renderNP();
}
function closeNP() { document.getElementById('np').classList.remove('open'); }
function clearNP() { notifs=[]; renderNP(); }

/* ── REQUEST SIMULATION ─────────────────────────────────── */
function pickModel() {
  const active = PROVIDERS.filter(p=>p.enabled).flatMap(p=>p.models);
  return active.length ? active[~~(Math.random()*active.length)] : 'gpt-4o';
}
function pickProv(model) {
  return PROVIDERS.find(p=>p.models.includes(model)) || PROVIDERS[0];
}

function tick() {
  const n = ~~(Math.random()*3)+1;
  for (let i=0;i<n;i++) processReq();
  updateUI();
}

function processReq() {
  const model = pickModel();
  const prov  = pickProv(model);
  const tok   = ~~(Math.random()*3800)+120;
  const lat   = ~~(Math.random()*1700)+120;
  const mc    = COSTS[model] || {i:.001,o:.002};
  const cost  = (tok*(mc.i+mc.o)/1000)*500;
  const user  = USERS[~~(Math.random()*USERS.length)];
  const path  = PATHS[~~(Math.random()*PATHS.length)];
  const isErr = Math.random()<.04;

  S.totalReqs++;
  S.totalTok += tok;
  S.totalCost += cost;
  S.latSum += lat;
  S.latCnt++;
  S.avgLat = Math.round(S.latSum/S.latCnt);

  const ms = S.modelStats[model];
  if (ms) { ms.req++; ms.tok+=tok; ms.cost+=cost; ms.latSum+=lat; }

  const ps = S.provStats[prov.id];
  if (ps) { ps.req++; ps.tok+=tok; ps.cost+=cost; }

  S.tokHist.push(tok); if(S.tokHist.length>80) S.tokHist.shift();
  S.reqHist.push(1);   if(S.reqHist.length>80) S.reqHist.shift();
  S.costHist.push(cost);if(S.costHist.length>80) S.costHist.shift();

  S.tpsBuf.push(tok); if(S.tpsBuf.length>6) S.tpsBuf.shift();
  S.tps = Math.round(S.tpsBuf.reduce((a,b)=>a+b,0)/S.tpsBuf.length);

  S.hourly[new Date().getHours()] += tok;

  addFeedItem({model,prov,tok,lat,cost,path,user,isErr,isStream:Math.random()>.5});

  const ti = ~~(Math.random()*LOG_MSGS.length);
  const [src,msg,lvl,lt] = LOG_MSGS[ti](model,tok,lat,user);
  addLog(isErr?'ERROR':lvl, src, msg, lt, isErr?0:cost);
}

/* ── NUMBER FORMATTING ───────────────────────────────────── */
const fmt = n => n>=1e9?(n/1e9).toFixed(2)+'B':n>=1e6?(n/1e6).toFixed(2)+'M':n>=1e3?(n/1e3).toFixed(1)+'K':String(n);
const fmtC = c => c>=1000?'$'+c.toFixed(0):c>=1?'$'+c.toFixed(2):'$'+c.toFixed(4);
const fmtMs = n => n>=1000?(n/1000).toFixed(1)+'s':n+'ms';

/* ── UI UPDATE LOOP ─────────────────────────────────────── */
function updateUI() {
  // stat cards
  set('sv-req', fmt(S.totalReqs));
  set('sv-tok', fmt(S.totalTok));
  set('sv-cost', fmtC(S.totalCost));
  set('sv-lat', fmtMs(S.avgLat));
  const pct = (v) => '+' + ~~(v*5+3) + '%';
  set('sc-req', pct(Math.random()));
  set('sc-tok', pct(Math.random()));
  set('sc-cost', '+' + ~~(Math.random()*8+2) + '%');
  set('sc-lat', '-' + ~~(Math.random()*10+2) + '%');

  // sparklines
  drawSpark('sp-req',  S.reqHist.slice(-20), '#00ff88');
  drawSpark('sp-tok',  S.tokHist.slice(-20), '#3b82f6');
  drawSpark('sp-cost', S.costHist.slice(-20),'#f59e0b');

  // terminal stats
  set('t-tot', fmt(S.logTotal));
  set('t-err', S.logErrors);
  set('t-wrn', S.logWarns);
  set('t-tps', fmt(S.tps));

  // analytics quick stats
  const mTok = S.daily.reduce((a,b)=>a+b,0) + S.totalTok;
  set('a-mtok', fmt(mTok));
  set('a-mcost', fmtC(S.totalCost + mTok*0.002));
  set('a-davg', fmt(~~(mTok/30)));
  set('a-prps', (~~(Math.random()*15+8)).toString());

  updateTokChart();
  renderBudget();
  renderProvGrid();
  updateTicker();
}

function set(id, v) { const e=document.getElementById(id); if(e) e.textContent=v; }

/* ── SPARKLINES ─────────────────────────────────────────── */
function drawSpark(id, data, color) {
  const c = document.getElementById(id);
  if (!c) return;
  const ctx = c.getContext('2d');
  c.width  = c.offsetWidth || 200;
  c.height = c.offsetHeight || 34;
  ctx.clearRect(0,0,c.width,c.height);
  if (data.length < 2) return;
  const min = Math.min(...data), max = Math.max(...data)||1, rng = max-min||1;
  const W=c.width, H=c.height, step=W/(data.length-1);
  const pts = data.map((v,i)=>({x:i*step, y:H-((v-min)/rng)*(H*.8)-2}));
  const g = ctx.createLinearGradient(0,0,0,H);
  g.addColorStop(0,color+'30'); g.addColorStop(1,color+'00');
  ctx.beginPath();
  pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
  ctx.lineTo(pts[pts.length-1].x,H); ctx.lineTo(0,H);
  ctx.fillStyle=g; ctx.fill();
  ctx.beginPath();
  pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
  ctx.strokeStyle=color; ctx.lineWidth=1.5; ctx.stroke();
}

/* ── TOKEN CHART ────────────────────────────────────────── */
let tokChart = null;
let chartRange = '1h';

function initTokChart() {
  const ctx = document.getElementById('tokChart')?.getContext('2d');
  if (!ctx) return;
  tokChart = new Chart(ctx, {
    type:'line',
    data:{labels:[],datasets:[
      {label:'Input Tokens',data:[],borderColor:'#3b82f6',backgroundColor:'rgba(59,130,246,.1)',
       fill:true,tension:.4,pointRadius:0,borderWidth:1.5},
      {label:'Output Tokens',data:[],borderColor:'#00ff88',backgroundColor:'rgba(0,255,136,.08)',
       fill:true,tension:.4,pointRadius:0,borderWidth:1.5},
    ]},
    options:{
      responsive:true,maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{display:true,position:'top',labels:{color:'#94a3b8',font:{size:11},boxWidth:12}},
        tooltip:{backgroundColor:'#0f1829',borderColor:'#1c2d4a',borderWidth:1,
          titleColor:'#e2e8f0',bodyColor:'#94a3b8',padding:10}},
      scales:{
        x:{grid:{color:'rgba(28,45,74,.5)'},ticks:{color:'#475569',font:{size:10},maxTicksLimit:8}},
        y:{grid:{color:'rgba(28,45,74,.5)'},ticks:{color:'#475569',font:{size:10},
          callback:v=>fmt(v)}},
      },
    }
  });
}

function updateTokChart() {
  if (!tokChart) return;
  const n = chartRange==='1h'?60:chartRange==='24h'?48:84;
  const now = Date.now();
  const labels=[], inp=[], out=[];
  const base = chartRange==='7d'?S.daily.slice(-n):S.tokHist;
  const slice = base.slice(-Math.min(n,base.length));
  for (let i=0;i<slice.length;i++) {
    if (chartRange==='1h') labels.push(new Date(now-(slice.length-i)*1000).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'}));
    else if (chartRange==='24h') labels.push(new Date(now-(slice.length-i)*1800000).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}));
    else labels.push('D-'+(slice.length-i));
    inp.push(Math.round(slice[i]*.38));
    out.push(Math.round(slice[i]*.62));
  }
  tokChart.data.labels=labels;
  tokChart.data.datasets[0].data=inp;
  tokChart.data.datasets[1].data=out;
  tokChart.update('none');
}

function setRange(r,el) {
  chartRange=r;
  document.querySelectorAll('[onclick^="setRange"]').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
}

/* ── ANALYTICS CHARTS ───────────────────────────────────── */
let trendChart=null, pieChart=null, hourlyChart=null;

function initAnaCharts() {
  if (anaChartsInited) { updateAnaCharts(); return; }
  anaChartsInited = true;
  const CO = {
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{labels:{color:'#94a3b8',font:{size:11},boxWidth:12}},
      tooltip:{backgroundColor:'#0f1829',borderColor:'#1c2d4a',borderWidth:1,
        titleColor:'#e2e8f0',bodyColor:'#94a3b8',padding:10}},
    scales:{
      x:{grid:{color:'rgba(28,45,74,.5)'},ticks:{color:'#475569',font:{size:10}}},
      y:{grid:{color:'rgba(28,45,74,.5)'},ticks:{color:'#475569',font:{size:10},callback:v=>fmt(v)}},
    },
  };
  // trend
  const tc = document.getElementById('trendChart')?.getContext('2d');
  if (tc) {
    const days=S.daily.slice(-30), labels=days.map((_,i)=>'D-'+(29-i));
    trendChart = new Chart(tc,{type:'bar',data:{labels,datasets:[{
      label:'Daily Tokens',data:days,
      backgroundColor:'rgba(0,255,136,.2)',borderColor:'#00ff88',borderWidth:1,borderRadius:3,
    }]},options:{...CO,plugins:{...CO.plugins,legend:{display:false}}}});
  }
  // pie
  const pc = document.getElementById('pieChart')?.getContext('2d');
  if (pc) {
    const actProv = PROVIDERS.filter(p=>p.enabled);
    pieChart = new Chart(pc,{type:'doughnut',data:{
      labels:actProv.map(p=>p.name),
      datasets:[{data:actProv.map(p=>{
        const ps=S.provStats[p.id]; return ps?Math.max(ps.cost+Math.random()*5,0.5):0.5;
      }),backgroundColor:actProv.map(p=>p.color+'cc'),borderColor:'#0f1829',borderWidth:2}],
    },options:{responsive:true,maintainAspectRatio:false,cutout:'65%',
      plugins:{legend:{position:'bottom',labels:{color:'#94a3b8',font:{size:11},boxWidth:10,padding:10}},
        tooltip:{backgroundColor:'#0f1829',borderColor:'#1c2d4a',borderWidth:1,
          callbacks:{label:c=>` ${c.label}: $${c.raw.toFixed(3)}`}}}}});
  }
  // hourly
  const hc = document.getElementById('hourlyChart')?.getContext('2d');
  if (hc) {
    const hLabels = Array.from({length:24},(_,i)=>i+':00');
    const hData = S.hourly.map((v,i)=>v || Math.round(Math.random()*80000+10000));
    hourlyChart = new Chart(hc,{type:'bar',data:{labels:hLabels,datasets:[{
      label:'Tokens',data:hData,
      backgroundColor:hData.map(v=>v>50000?'rgba(0,255,136,.4)':'rgba(59,130,246,.3)'),
      borderColor:hData.map(v=>v>50000?'#00ff88':'#3b82f6'),borderWidth:1,borderRadius:2,
    }]},options:{...CO,plugins:{...CO.plugins,legend:{display:false}}}});
  }
}

function updateAnaCharts() {
  if (trendChart) { trendChart.data.datasets[0].data=S.daily.slice(-30); trendChart.update('none'); }
  if (pieChart) {
    const actProv=PROVIDERS.filter(p=>p.enabled);
    pieChart.data.labels=actProv.map(p=>p.name);
    pieChart.data.datasets[0].data=actProv.map(p=>{
      const ps=S.provStats[p.id]; return Math.max(ps?ps.cost:0,.5);
    });
    pieChart.data.datasets[0].backgroundColor=actProv.map(p=>p.color+'cc');
    pieChart.update('none');
  }
  if (hourlyChart) {
    const hData=S.hourly.map((v,i)=>v||Math.round(Math.random()*80000+10000));
    hourlyChart.data.datasets[0].data=hData;
    hourlyChart.data.datasets[0].backgroundColor=hData.map(v=>v>50000?'rgba(0,255,136,.4)':'rgba(59,130,246,.3)');
    hourlyChart.update('none');
  }
}

/* ── MODEL TABLE ────────────────────────────────────────── */
function renderModelTable() {
  const tbody = document.getElementById('model-rows');
  if (!tbody) return;
  const rows = Object.entries(S.modelStats)
    .filter(([,v])=>v.req>0)
    .sort((a,b)=>b[1].tok-a[1].tok)
    .slice(0,10);
  if (!rows.length) {
    tbody.innerHTML='<tr><td colspan="6" style="text-align:center;color:var(--t3);padding:20px">No data yet — waiting for requests…</td></tr>';
    return;
  }
  tbody.innerHTML = rows.map(([model,v],i) => {
    const rnkCls = i===0?'rnk g1':i===1?'rnk g2':i===2?'rnk g3':'rnk';
    const lat = v.req?Math.round(v.latSum/v.req):0;
    return `<tr>
      <td><span class="${rnkCls}">${i+1}</span></td>
      <td class="mn" style="color:var(--t1)">${model}</td>
      <td class="nm">${fmt(v.req)}</td>
      <td class="nm tg">${fmt(v.tok)}</td>
      <td class="nm ty">${fmtC(v.cost)}</td>
      <td class="nm" style="color:var(--purple)">${fmtMs(lat)}</td>
    </tr>`;
  }).join('');
}

/* ── PROVIDER GRID (DASHBOARD) ──────────────────────────── */
function renderProvGrid() {
  const grid = document.getElementById('prov-grid');
  if (!grid) return;
  grid.innerHTML = PROVIDERS.map(p => {
    const ps = S.provStats[p.id];
    const lat = ps.req ? Math.round((p.id==='mistral'?1800:p.id==='groq'?150:400)+Math.random()*200) : '—';
    const rps = ps.req ? (Math.random()*8+1).toFixed(1) : '0.0';
    const stBadge = p.status==='operational'
      ? '<span class="badge bg"><span class="dot" style="animation:pulse 1.5s infinite"></span>OK</span>'
      : '<span class="badge by"><span class="dot"></span>Degraded</span>';
    const faded = p.enabled ? '' : 'opacity:.45;filter:grayscale(.5)';
    return `<div class="pcard" style="${faded}">
      <div class="pico" style="background:${p.bg};color:${p.color}">${p.icon}</div>
      <div class="pinfo">
        <div class="pname">${p.name}</div>
        <div class="pmodel">${p.models[0]}</div>
      </div>
      <div class="pmeta">${stBadge}<div class="prps" style="margin-top:4px">${lat}ms · ${rps}/s</div></div>
    </div>`;
  }).join('');
  set('prov-upd', 'Updated ' + new Date().toLocaleTimeString());
}

/* ── PROVIDER DETAIL PAGE ───────────────────────────────── */
function renderProvDetail() {
  const grid = document.getElementById('prov-detail');
  if (!grid) return;
  grid.innerHTML = PROVIDERS.map(p => {
    const ps = S.provStats[p.id];
    const lat = 300 + ~~(Math.random()*400);
    return `<div class="card">
      <div class="ch">
        <div style="display:flex;align-items:center;gap:10px">
          <div class="pico" style="background:${p.bg};color:${p.color};width:38px;height:38px;font-size:15px">${p.icon}</div>
          <div><div style="font-size:14px;font-weight:600;color:var(--t4)">${p.name}</div>
            <div style="font-size:11px;color:var(--t3);margin-top:1px">${p.models.length} models</div></div>
        </div>
        ${p.status==='operational'?'<span class="badge bg"><span class="dot" style="animation:pulse 1.5s infinite"></span>Operational</span>':'<span class="badge by"><span class="dot"></span>Degraded</span>'}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
        <div style="background:var(--bg0);border:1px solid var(--border);border-radius:var(--r);padding:10px">
          <div style="font-size:10px;color:var(--t3);margin-bottom:4px">REQUESTS</div>
          <div style="font-size:18px;font-weight:700;color:var(--t4);font-family:var(--mono)">${fmt(ps.req)}</div>
        </div>
        <div style="background:var(--bg0);border:1px solid var(--border);border-radius:var(--r);padding:10px">
          <div style="font-size:10px;color:var(--t3);margin-bottom:4px">TOKENS</div>
          <div style="font-size:18px;font-weight:700;color:var(--accent);font-family:var(--mono)">${fmt(ps.tok)}</div>
        </div>
        <div style="background:var(--bg0);border:1px solid var(--border);border-radius:var(--r);padding:10px">
          <div style="font-size:10px;color:var(--t3);margin-bottom:4px">COST</div>
          <div style="font-size:18px;font-weight:700;color:var(--orange);font-family:var(--mono)">${fmtC(ps.cost)}</div>
        </div>
        <div style="background:var(--bg0);border:1px solid var(--border);border-radius:var(--r);padding:10px">
          <div style="font-size:10px;color:var(--t3);margin-bottom:4px">AVG LATENCY</div>
          <div style="font-size:18px;font-weight:700;color:var(--purple);font-family:var(--mono)">${lat}ms</div>
        </div>
      </div>
      <div style="font-size:11px;color:var(--t3);margin-bottom:6px;font-weight:600">MODELS</div>
      ${p.models.map(m=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;background:var(--bg0);border:1px solid var(--border);border-radius:var(--r);margin-bottom:5px;font-size:11px">
        <span style="font-family:var(--mono);color:var(--t1)">${m}</span>
        <span style="color:var(--t3)">$${((COSTS[m]?.i||.001)*1000).toFixed(3)}/1K in · $${((COSTS[m]?.o||.002)*1000).toFixed(3)}/1K out</span>
      </div>`).join('')}
    </div>`;
  }).join('');
}

/* ── BUDGET METERS ──────────────────────────────────────── */
function renderBudget() {
  const el = document.getElementById('budget-meters');
  if (!el) return;
  const budget = parseFloat(document.getElementById('c-budget')?.value||'100');
  const warnPct = parseFloat(document.getElementById('c-warn')?.value||'80');
  const tokLim = parseFloat(document.getElementById('c-toklim')?.value||'1000000');
  const items = [
    {name:'Monthly Budget', cur:S.totalCost, max:budget, unit:'$', mc:null},
    {name:'Daily Tokens', cur:S.totalTok, max:tokLim, unit:'', mc:null},
    ...PROVIDERS.filter(p=>p.enabled).slice(0,3).map(p=>({
      name:p.name, cur:S.provStats[p.id].cost, max:budget*(.3+Math.random()*.2), unit:'$', mc:p.color,
    })),
  ];
  el.innerHTML = items.map(item => {
    const pct = Math.min((item.cur/item.max)*100, 100);
    const fillCls = pct>=90?'crit':pct>=warnPct?'warn':'';
    const fillColor = item.mc ? `style="background:${item.mc}"` : '';
    return `<div class="bmeter">
      <div class="bm-hd">
        <span class="bm-n">${item.name}</span>
        <span class="bm-v">${item.unit}${fmt(item.cur)} / ${item.unit}${fmt(item.max)}</span>
      </div>
      <div class="bm-bar"><div class="bm-fill ${fillCls}" ${fillColor} style="width:${pct.toFixed(1)}%${item.mc?';background:'+item.mc:''}"></div></div>
    </div>`;
  }).join('');
}

/* ── REQUEST FEED ────────────────────────────────────────── */
const feedMax = 30;
let feedItems = [];

function addFeedItem(r) {
  feedItems.unshift(r);
  if (feedItems.length > feedMax) feedItems.pop();
  const el = document.getElementById('req-feed');
  if (!el) return;
  el.innerHTML = feedItems.map(f => `
    <div class="ritem">
      <span class="rst${f.isErr?' e':''}"></span>
      <span class="rmethod${f.isStream?' s':''}">${f.isStream?'STRM':'POST'}</span>
      <span class="rpath">${f.path}</span>
      <span class="rmodel">${f.model}</span>
      <span class="rtok">${fmt(f.tok)}</span>
      <span class="rlat">${f.lat}ms</span>
    </div>`).join('');
}

/* ── TERMINAL LOGS ──────────────────────────────────────── */
const maxLogs = 1000;

function addLog(lvl, src, msg, tok, cost) {
  S.logTotal++;
  if (lvl==='ERROR') S.logErrors++;
  if (lvl==='WARN')  S.logWarns++;

  const now = new Date();
  const time = now.toTimeString().slice(0,8)+'.'+String(now.getMilliseconds()).padStart(3,'0');
  const tokStr = tok>0 ? `+${fmt(tok)}t` : '';
  const costStr = cost>0 ? `$${cost.toFixed(5)}` : '';

  const line = {lvl, src, msg, time, tok:tokStr, cost:costStr};
  S.logLines.push(line);
  if (S.logLines.length > maxLogs) S.logLines.shift();

  const lb = document.getElementById('logbox');
  if (!lb) return;

  const visible = filterLine(line);
  const el = document.createElement('div');
  el.className = 'll' + (visible?'':' hidden');
  el.dataset.lvl = lvl;
  el.dataset.src = src.toLowerCase();
  el.dataset.msg = msg.toLowerCase();
  el.innerHTML = `<span class="ltime">${time}</span><span class="llvl ${lvl}">${lvl}</span><span class="lsrc">${src.slice(0,22)}</span><span class="lmsg">${escHtml(msg)}</span>${tokStr?`<span class="ltok">${tokStr}</span>`:''}${costStr?`<span class="lcost">${costStr}</span>`:''}`;
  lb.appendChild(el);

  // trim DOM
  while (lb.children.length > maxLogs + 5) lb.removeChild(lb.children[2]);

  if (S.autoScroll && visible) lb.scrollTop = lb.scrollHeight;
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function filterLine(line) {
  const fOk = S.logFilter==='ALL' || line.lvl===S.logFilter;
  const sOk = !S.logSearch || line.msg.toLowerCase().includes(S.logSearch) || line.src.toLowerCase().includes(S.logSearch);
  return fOk && sOk;
}

function setLogF(f, el) {
  S.logFilter = f;
  document.querySelectorAll('[data-f]').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  filterLogs();
}

function filterLogs() {
  S.logSearch = (document.getElementById('log-s')?.value||'').toLowerCase();
  document.querySelectorAll('.ll').forEach(el => {
    const lvlOk = S.logFilter==='ALL' || el.dataset.lvl===S.logFilter;
    const srchOk = !S.logSearch || el.dataset.msg?.includes(S.logSearch) || el.dataset.src?.includes(S.logSearch);
    el.classList.toggle('hidden', !(lvlOk && srchOk));
  });
}

function toggleASC() {
  S.autoScroll = !S.autoScroll;
  document.getElementById('asc-sw')?.classList.toggle('on', S.autoScroll);
}

function clearLogs() {
  const lb = document.getElementById('logbox');
  if (lb) {
    while (lb.children.length > 2) lb.removeChild(lb.lastChild);
  }
  S.logTotal=0; S.logErrors=0; S.logWarns=0;
  S.logLines=[];
}

/* ── ALERTS ─────────────────────────────────────────────── */
const ALERTS = [
  {type:'warn',  title:'Budget Warning',  desc:'OpenAI monthly spend at 82% — $82 of $100 budget used.', time:'2 min ago'},
  {type:'warn',  title:'Rate Limit',      desc:'claude-3.5-sonnet: 78% TPM utilization. Risk of throttling.', time:'7 min ago'},
  {type:'error', title:'Provider Degraded',desc:'Mistral AI showing elevated latency (avg 2.4s). Failover recommended.', time:'23 min ago'},
  {type:'info',  title:'Daily Token Record',desc:'New daily token record: 2.4M tokens processed today.', time:'1 hr ago'},
];

function renderAlerts() {
  const el = document.getElementById('alr-list');
  if (!el) return;
  const ico = {
    warn:`<svg class="al-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    error:`<svg class="al-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info:`<svg class="al-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  };
  el.innerHTML = ALERTS.map(a=>`
    <div class="al ${a.type}">
      ${ico[a.type]}
      <div><div class="al-t">${a.title}</div><div class="al-d">${a.desc}</div><div class="al-tm">${a.time}</div></div>
    </div>`).join('');
  if (!ALERTS.length) el.innerHTML='<div style="text-align:center;padding:30px;color:var(--t3);font-size:13px">✓ No active alerts</div>';
}

function dismissAll() { ALERTS.length=0; renderAlerts(); }

/* ── PROVIDER TOGGLES (SETTINGS) ─────────────────────────── */
function renderProvToggles() {
  const el = document.getElementById('prov-toggles');
  if (!el) return;
  el.innerHTML = PROVIDERS.map(p => `
    <div class="pt-row">
      <div class="pt-info">
        <div style="width:28px;height:28px;border-radius:6px;background:${p.bg};color:${p.color};
          display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800">${p.icon}</div>
        <div>
          <div style="font-size:12px;font-weight:600;color:var(--t1)">${p.name}</div>
          <div style="font-size:10px;color:var(--t3)">${p.models.join(', ')}</div>
        </div>
      </div>
      <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:11px;color:var(--t2)" onclick="toggleProv('${p.id}',this)">
        <div class="tog-sw ${p.enabled?'on':''}" id="pt-${p.id}"></div>
        <span>${p.enabled?t('enabled'):t('disabled')}</span>
      </label>
    </div>`).join('');
}

function toggleProv(id, el) {
  const p = PROVIDERS.find(x=>x.id===id);
  if (!p) return;
  p.enabled = !p.enabled;
  const sw = document.getElementById('pt-'+id);
  if (sw) sw.classList.toggle('on', p.enabled);
  const lbl = el.querySelector('span');
  if (lbl) lbl.textContent = p.enabled ? t('enabled') : t('disabled');
}

/* ── SETTINGS ────────────────────────────────────────────── */
function saveCfg() {
  try {
    localStorage.setItem('wdog_cfg', JSON.stringify({
      oai:  document.getElementById('k-oai')?.value||'',
      ant:  document.getElementById('k-ant')?.value||'',
      goo:  document.getElementById('k-goo')?.value||'',
      coh:  document.getElementById('k-coh')?.value||'',
      budget: document.getElementById('c-budget')?.value||'100',
      warn:   document.getElementById('c-warn')?.value||'80',
      toklim: document.getElementById('c-toklim')?.value||'1000000',
    }));
  } catch(e){}
  showToast(t('t_saved'));
}

function loadCfg() {
  try {
    const cfg = JSON.parse(localStorage.getItem('wdog_cfg')||'{}');
    if (cfg.oai && document.getElementById('k-oai')) document.getElementById('k-oai').value=cfg.oai;
    if (cfg.ant && document.getElementById('k-ant')) document.getElementById('k-ant').value=cfg.ant;
    if (cfg.budget && document.getElementById('c-budget')) document.getElementById('c-budget').value=cfg.budget;
    if (cfg.warn && document.getElementById('c-warn')) document.getElementById('c-warn').value=cfg.warn;
    if (cfg.toklim && document.getElementById('c-toklim')) document.getElementById('c-toklim').value=cfg.toklim;
  } catch(e){}
}

function clearData() { S.totalReqs=0;S.totalTok=0;S.totalCost=0;S.logTotal=0;S.logErrors=0;S.logWarns=0; clearLogs(); showToast(t('t_cleared')); }

function exportData(type) {
  const data = {
    timestamp: new Date().toISOString(),
    summary: {totalRequests:S.totalReqs, totalTokens:S.totalTok, totalCost:S.totalCost, avgLatency:S.avgLat},
    models: S.modelStats,
    providers: PROVIDERS.map(p=>({...p,stats:S.provStats[p.id]})),
  };
  if (type==='json') {
    dl(JSON.stringify(data,null,2), 'llm-watchdog-export.json', 'application/json');
  } else {
    const rows=[['Model','Requests','Tokens','Cost'],...Object.entries(S.modelStats).filter(([,v])=>v.req>0).map(([m,v])=>[m,v.req,v.tok,v.cost.toFixed(5)])];
    dl(rows.map(r=>r.join(',')).join('\n'), 'llm-watchdog-export.csv', 'text/csv');
  }
  showToast(t('t_exported'));
}

function dl(content, filename, mime) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([content],{type:mime}));
  a.download = filename; a.click();
}

/* ── TICKER ─────────────────────────────────────────────── */
function updateTicker() {
  const el = document.getElementById('ticker');
  if (!el) return;
  const items = [
    `<span class="mn">gpt-4o</span>&nbsp;<b class="g">${(Math.random()*12+2).toFixed(1)}/s</b>`,
    `<span class="mn">claude-3.5</span>&nbsp;<b class="g">${(Math.random()*8+1).toFixed(1)}/s</b>`,
    `<span class="mn">gemini-1.5</span>&nbsp;<b class="g">${(Math.random()*10+1).toFixed(1)}/s</b>`,
    `total&nbsp;<b class="g">${fmt(S.totalTok)}</b>&nbsp;tok`,
    `cost&nbsp;<b class="g">${fmtC(S.totalCost)}</b>`,
    `latency&nbsp;<b>${S.avgLat}ms</b>`,
    `reqs&nbsp;<b class="g">${fmt(S.totalReqs)}</b>`,
  ];
  // duplicate for seamless loop
  const inner = [...items,...items].map(i=>`<span>${i}</span>`).join('');
  el.innerHTML = inner;
}

/* ── TOAST ───────────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  const m  = document.getElementById('toast-msg');
  if (!el||!m) return;
  m.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.remove('show'), 2500);
}

/* ── CLICK OUTSIDE ───────────────────────────────────────── */
document.addEventListener('click', e => {
  if (!e.target.closest('#np') && !e.target.closest('#np-btn')) closeNP();
});

/* ── INIT ────────────────────────────────────────────────── */
function init() {
  // apply stored lang
  const sl = localStorage.getItem('wdog_lang') || 'en';
  document.getElementById('lsel').value = sl;
  setLang(sl);

  loadCfg();
  renderNP();
  renderProvGrid();
  renderBudget();

  initTokChart();

  // initial data burst
  for (let i=0;i<40;i++) processReq();
  updateUI();

  // recurring tick
  setInterval(tick, 1000);
  setInterval(()=>{ renderProvGrid(); }, 5000);
  setInterval(()=>{
    if (curPage==='ana') { renderModelTable(); updateAnaCharts(); }
  }, 3000);

  // ping notifications occasionally
  setInterval(()=>{
    if (Math.random()<.05 && notifs.length < 8) {
      const msgs = [
        {title:'New Record',desc:`Token throughput spike: ${fmt(~~(Math.random()*10000+5000))} tok/s`,time:'just now',type:'info'},
        {title:'Cost Alert',desc:`Daily spend reached ${fmtC(S.totalCost*1.2)}. Review usage.`,time:'just now',type:'warn'},
        {title:'Model Timeout',desc:`gpt-4o request timeout after 30s. Auto-retry succeeded.`,time:'just now',type:'warn'},
      ];
      notifs.unshift(msgs[~~(Math.random()*msgs.length)]);
      if (notifs.length>8) notifs.pop();
      const cnt=document.getElementById('np-cnt');
      const ab=document.getElementById('alr-cnt');
      if(cnt) cnt.textContent=notifs.length;
      if(ab)  ab.textContent=notifs.length;
    }
  }, 8000);
}

document.addEventListener('DOMContentLoaded', init);
