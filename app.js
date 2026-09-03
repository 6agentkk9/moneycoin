function formatNum(n) {
  if (n == null || isNaN(n)) return '—';
  if (Math.abs(n) >= 1e12) return (n/1e12).toFixed(2) + 'T';
  if (Math.abs(n) >= 1e9) return (n/1e9).toFixed(2) + 'B';
  if (Math.abs(n) >= 1e6) return (n/1e6).toFixed(2) + 'M';
  if (Math.abs(n) >= 1e3) return (n/1e3).toFixed(2) + 'K';
  return Number(n).toFixed(2);
}

function formatPrice(p) {
  if (p == null || isNaN(p)) return '—';
  if (p < 1) return '$' + p.toFixed(4);
  if (p < 100) return '$' + p.toFixed(2);
  return '$' + p.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

function setAlert(changePct) {
  const box = document.getElementById('alertBox');
  box.className = 'alert-box';
  let text = 'HOLD — Wait for clearer direction';
  let cls = 'alert-hold';
  if (changePct >= 10) { text = 'STRONG BUY — Momentum strong'; cls = 'alert-strong-buy'; }
  else if (changePct >= 3) { text = 'BUY — Positive short-term bias'; cls = 'alert-buy'; }
  else if (changePct <= -10) { text = 'STRONG SELL — Significant pressure'; cls = 'alert-strong-sell'; }
  else if (changePct <= -3) { text = 'SELL — Downside pressure'; cls = 'alert-sell'; }
  box.classList.add(cls);
  box.textContent = text;
}

function applyData(d, isLive) {
  const c = COINS[currentCoin];
  document.getElementById('price').textContent = formatPrice(d.price);
  const change = d.change24h || 0;
  document.getElementById('change').textContent = (change >= 0 ? '+' : '') + change.toFixed(2) + '%';
  document.getElementById('change').className = 'stat-value ' + (change >= 0 ? 'positive' : 'negative');
  document.getElementById('mcap').textContent = '$' + formatNum(d.marketCap);
  document.getElementById('volume').textContent = '$' + formatNum(d.volume24h);
  document.getElementById('rank').textContent = d.rank ? '#' + d.rank : '—';
  document.getElementById('symbol').textContent = c.symbol;
  setAlert(change);
  const badge = document.getElementById('modeBadge');
  if (isLive) {
    badge.textContent = 'LIVE';
    badge.className = 'mode-badge mode-live';
    document.getElementById('status').textContent = 'Live data loaded';
    document.getElementById('chainInfo').textContent = 'Source: CoinGecko • ' + c.name;
  } else {
    badge.textContent = 'LOCAL';
    badge.className = 'mode-badge mode-local';
    document.getElementById('status').textContent = 'Using offline snapshot';
    document.getElementById('chainInfo').textContent = 'Snapshot (Sep 2026 range) • Fully offline';
  }
  document.getElementById('lastUpdate').textContent = 'Updated: ' + new Date().toLocaleString();
}

function renderNewsAndPrediction() {
  const c = COINS[currentCoin];
  let newsHtml = '<p style="font-size:0.78rem;color:var(--muted);margin-bottom:10px;">Latest context as of September 2026</p>';
  c.news.forEach(n => {
    newsHtml += '<div class="news-item"><div class="news-date">' + n.date + '</div><strong>' + n.title + '</strong> — ' + n.text + '</div>';
  });
  document.getElementById('newsContent').innerHTML = newsHtml;
  const p = c.prediction;
  document.getElementById('predictionContent').innerHTML =
    '<p style="font-size:0.84rem;color:var(--muted);margin-bottom:10px;">Horizon: ~Sep 3 → mid November 2026. AI scenarios only — <strong>not financial advice</strong>.</p>' +
    '<div class="prediction-box">' +
    '<div class="scenario"><strong>Base Case</strong><br>Price range: <span class="positive">' + p.base + '</span></div>' +
    '<div class="scenario"><strong>Bull Case</strong><br>Target zone: <span class="positive">' + p.bull + '</span></div>' +
    '<div class="scenario"><strong>Bear Case</strong><br>Downside zone: <span class="negative">' + p.bear + '</span></div>' +
    '<p style="font-size:0.84rem;margin-top:12px;"><strong style="color:var(--gold-dark)">AI Summary:</strong> ' + p.summary + '</p></div>';
  document.getElementById('coinLinks').innerHTML = c.links.map(l => '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.name + '</a>').join('');
}

function renderCoinTabs() {
  const wrap = document.getElementById('coinTabs');
  wrap.innerHTML = '';
  GROUPS[currentGroup].coins.forEach(id => {
    const c = COINS[id];
    const btn = document.createElement('button');
    btn.className = 'coin-tab' + (id === currentCoin ? ' active' : '');
    btn.textContent = c.tab;
    btn.onclick = function () { selectCoin(id, this); };
    wrap.appendChild(btn);
  });
}

function selectGroup(groupId, btn) {
  currentGroup = groupId;
  document.querySelectorAll('.group-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCoin = GROUPS[groupId].coins[0];
  renderCoinTabs();
  document.getElementById('coinTitle').textContent = COINS[currentCoin].name;
  loadSnapshot();
  renderNewsAndPrediction();
  setTimeout(tryLive, 300);
}

function selectCoin(id, btn) {
  currentCoin = id;
  document.querySelectorAll('.coin-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('coinTitle').textContent = COINS[id].name;
  loadSnapshot();
  renderNewsAndPrediction();
  setTimeout(tryLive, 300);
}

function loadSnapshot() {
  applyData(COINS[currentCoin].snapshot, false);
}

async function tryLive() {
  const btn = document.getElementById('refreshBtn');
  btn.disabled = true;
  document.getElementById('status').textContent = 'Trying live update…';
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + currentCoin + '&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true', { cache: 'no-store', mode: 'cors' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const d = data[currentCoin];
    if (!d || d.usd === undefined) throw new Error('No data');
    applyData({ price: d.usd, change24h: d.usd_24h_change || 0, marketCap: d.usd_market_cap || 0, volume24h: d.usd_24h_vol || 0, rank: COINS[currentCoin].snapshot.rank }, true);
  } catch (err) {
    document.getElementById('status').textContent = 'Live unavailable. Use GitHub Pages or start-live.bat.';
    document.getElementById('modeBadge').textContent = 'LOCAL';
    document.getElementById('modeBadge').className = 'mode-badge mode-local';
  } finally {
    btn.disabled = false;
  }
}

function switchTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

function toggleHelp() {
  document.getElementById('helpBox').classList.toggle('visible');
}

renderCoinTabs();
loadSnapshot();
renderNewsAndPrediction();
setTimeout(tryLive, 800);
