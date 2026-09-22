function formatNum(n) {
  if (n == null || isNaN(n)) return '-';
  if (Math.abs(n) >= 1e12) return (n / 1e12).toFixed(2) + 'T';
  if (Math.abs(n) >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(2) + 'K';
  return Number(n).toFixed(2);
}
function formatPrice(p) {
  if (p == null || isNaN(p)) return '-';
  if (p < 1) return '$' + p.toFixed(4);
  if (p < 100) return '$' + p.toFixed(2);
  return '$' + p.toLocaleString('en-US', { maximumFractionDigits: 0 });
}
function setAlert(changePct) {
  const box = document.getElementById('alertBox');
  box.className = 'alert-box';
  let text = 'HOLD - Wait for clearer direction';
  let cls = 'alert-hold';
  if (changePct >= 10) { text = 'STRONG BUY - Momentum strong'; cls = 'alert-strong-buy'; }
  else if (changePct >= 3) { text = 'BUY - Positive short-term bias'; cls = 'alert-buy'; }
  else if (changePct <= -10) { text = 'STRONG SELL - Significant pressure'; cls = 'alert-strong-sell'; }
  else if (changePct <= -3) { text = 'SELL - Downside pressure'; cls = 'alert-sell'; }
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
  document.getElementById('rank').textContent = d.rank ? '#' + d.rank : '-';
  document.getElementById('symbol').textContent = c.symbol;
  setAlert(change);
  const badge = document.getElementById('modeBadge');
  if (isLive) {
    badge.textContent = 'LIVE'; badge.className = 'mode-badge mode-live';
    document.getElementById('status').textContent = 'Live price loaded';
    document.getElementById('chainInfo').textContent = 'Source: CoinGecko - ' + c.name;
  } else {
    badge.textContent = 'LOCAL'; badge.className = 'mode-badge mode-local';
    document.getElementById('status').textContent = 'Using price snapshot';
    document.getElementById('chainInfo').textContent = 'Snapshot - Sep 21, 2026';
  }
  document.getElementById('lastUpdate').textContent = 'Updated: ' + new Date().toLocaleString();
}
function renderSnapshotNews(note) {
  const c = COINS[currentCoin];
  let html = '<p style="font-size:0.78rem;color:var(--muted);margin-bottom:10px;">' + (note || 'Saved briefing') + '</p>';
  c.news.forEach(function (n) {
    html += '<div class="news-item"><div class="news-date">' + n.date + '</div><strong>' + n.title + '</strong> - ' + n.text + '</div>';
  });
  document.getElementById('newsContent').innerHTML = html;
}
function renderPrediction() {
  const p = COINS[currentCoin].prediction;
  document.getElementById('predictionContent').innerHTML =
    '<p style="font-size:0.84rem;color:var(--muted);margin-bottom:10px;">69-day AI scenarios only - not financial advice.</p>' +
    '<div class="prediction-box">' +
    '<div class="scenario"><strong>Base Case</strong><br>Price range: <span class="positive">' + p.base + '</span></div>' +
    '<div class="scenario"><strong>Bull Case</strong><br>Target zone: <span class="positive">' + p.bull + '</span></div>' +
    '<div class="scenario"><strong>Bear Case</strong><br>Downside zone: <span class="negative">' + p.bear + '</span></div>' +
    '<p style="font-size:0.84rem;margin-top:12px;"><strong>AI Summary:</strong> ' + p.summary + '</p></div>';
}
function renderLinks() {
  document.getElementById('coinLinks').innerHTML = COINS[currentCoin].links.map(function (l) {
    return '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.name + '</a>';
  }).join('');
}
async function loadLiveNews() {
  renderSnapshotNews('Loading live headlines...');
  const q = NEWS_Q[currentCoin] || COINS[currentCoin].name;
  const rss = 'https://news.google.com/rss/search?q=' + encodeURIComponent(q + ' when:7d') + '&hl=en-US&gl=US&ceid=US:en';
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rss);
  try {
    const res = await fetch(url, { cache: 'no-store', mode: 'cors' });
    if (!res.ok) throw new Error('news http');
    const json = await res.json();
    const items = (json.items || []).slice(0, 8);
    if (!items.length) throw new Error('no headlines');
    let html = '<p style="font-size:0.78rem;color:var(--muted);margin-bottom:10px;">Live headlines from Google News - last 7 days</p>';
    items.forEach(function (a) {
      const date = (a.pubDate || 'Latest').slice(0, 16);
      html += '<div class="news-item"><div class="news-date">' + date + '</div><strong><a href="' + (a.link || '#') + '" target="_blank" rel="noopener">' + (a.title || 'Update') + '</a></strong></div>';
    });
    html += '<p style="font-size:0.75rem;color:var(--muted);margin-top:10px;">Saved briefing:</p>';
    COINS[currentCoin].news.forEach(function (n) {
      html += '<div class="news-item"><div class="news-date">' + n.date + '</div><strong>' + n.title + '</strong> - ' + n.text + '</div>';
    });
    document.getElementById('newsContent').innerHTML = html;
  } catch (err) {
    renderSnapshotNews('Live headlines paused. Showing saved briefing.');
  }
}
function renderCoinTabs() {
  const wrap = document.getElementById('coinTabs');
  wrap.innerHTML = '';
  GROUPS[currentGroup].coins.forEach(function (id) {
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
  document.querySelectorAll('.group-tab').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  currentCoin = GROUPS[groupId].coins[0];
  renderCoinTabs();
  document.getElementById('coinTitle').textContent = COINS[currentCoin].name;
  loadSnapshot(); renderPrediction(); renderSignal(); renderLinks(); loadLiveNews(); setTimeout(tryLive, 200);
}
function selectCoin(id, btn) {
  currentCoin = id;
  document.querySelectorAll('.coin-tab').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.getElementById('coinTitle').textContent = COINS[id].name;
  loadSnapshot(); renderPrediction(); renderSignal(); renderLinks(); loadLiveNews(); setTimeout(tryLive, 200);
}
function loadSnapshot() { applyData(COINS[currentCoin].snapshot, false); }
async function tryLive() {
  const btn = document.getElementById('refreshBtn');
  btn.disabled = true;
  document.getElementById('status').textContent = 'Refreshing live price...';
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + currentCoin + '&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true&include_market_cap=true', { cache: 'no-store', mode: 'cors' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const d = data[currentCoin];
    if (!d || d.usd === undefined) throw new Error('No data');
    applyData({ price: d.usd, change24h: d.usd_24h_change || 0, marketCap: d.usd_market_cap || 0, volume24h: d.usd_24h_vol || 0, rank: COINS[currentCoin].snapshot.rank }, true);
  } catch (err) {
    document.getElementById('status').textContent = 'Live price paused. Snapshot still shown.';
    document.getElementById('modeBadge').textContent = 'LOCAL';
    document.getElementById('modeBadge').className = 'mode-badge mode-local';
  } finally { btn.disabled = false; }
}
function switchTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
  document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}
function renderSignal() {
  var el = document.getElementById('signalContent');
  if (!el) return;
  if (typeof SIGNALS === 'undefined' || !SIGNALS.coins) {
    el.innerHTML = '<p>Signal file not loaded.</p>';
    return;
  }
  var s = SIGNALS.coins[currentCoin];
  if (!s) { el.innerHTML = '<p>No 6-month signal for this coin.</p>'; return; }
  var cls = s.bias === 'Accumulate' ? 'alert-buy' : (s.bias === 'Reduce' ? 'alert-sell' : 'alert-hold');
  var reasons = (s.reasons || []).map(function (r) { return '<div class="news-item">' + r + '</div>'; }).join('');
  el.innerHTML =
    '<div class="alert-box ' + cls + '">6-MONTH: ' + s.bias.toUpperCase() + ' · Conviction ' + s.conviction + ' · Score ' + s.score + '</div>' +
    '<div class="prediction-box"><p><strong>Horizon:</strong> ' + (SIGNALS.horizon || '6m') + ' · Updated ' + SIGNALS.updated + '</p>' +
    reasons +
    '<div class="scenario"><strong>Invalidation:</strong> ' + (s.invalidation || '-') + '</div>' +
    '<p class="meta">Research score only. Not financial advice.</p></div>';
}
function toggleHelp() { document.getElementById('helpBox').classList.toggle('visible'); }
renderCoinTabs(); loadSnapshot(); renderPrediction(); renderSignal(); renderLinks(); loadLiveNews(); setTimeout(tryLive, 600);
