const GROUPS = {
  coin: { label: 'Coin', coins: ['dogecoin', 'ethereum', 'bitcoin'] },
  compute: { label: 'Compute Coin', coins: ['io', 'akash-network', 'render-token'] }
};
const NEWS_Q = {
  dogecoin: 'Dogecoin OR DOGE',
  ethereum: 'Ethereum OR ETH',
  bitcoin: 'Bitcoin OR BTC',
  io: 'io.net OR "IO token"',
  'akash-network': 'Akash Network OR AKT crypto',
  'render-token': 'Render Network OR RENDER crypto'
};
const COINS = {
  dogecoin: {
    id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', tab: 'DOGE',
    snapshot: { price: 0.09585, change24h: 2.40, marketCap: 14.971e9, volume24h: 842.4e6, rank: 12 },
    news: [
      { date: 'Oct 5, 2026', title: 'DOGE firmer near $0.096', text: 'Dogecoin traded near $0.0958, up about 2.4% on the day, with roughly $842M in 24h volume as majors reclaimed $86k.' },
      { date: 'Oct 5, 2026', title: 'Meme beta follows the BTC bounce', text: 'A Monday market note put DOGE up about 2.6% on the week near $0.0955, tracking the broader risk-on open rather than a new protocol print.' },
      { date: 'Oct 3, 2026', title: 'No fresh DOGE catalyst', text: 'DogeOS testnet and listed Kalshi perps remain the standing context. No new mainnet date or treasury headline this week. Not financial advice.' }
    ],
    prediction: { base: '$0.08 - $0.12', bull: '$0.13 - $0.18', bear: '$0.05 - $0.08', summary: '69-day path still needs a hold above $0.09 and a clean $0.10 break. Tape is BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2714.94, change24h: 0.46, marketCap: 331.51e9, volume24h: 9.716e9, rank: 2 },
    news: [
      { date: 'Oct 5, 2026', title: 'ETH holds near $2,715', text: 'Ethereum traded near $2,715, up about 0.5% on the day and roughly 1–3% on the week, lagging Bitcoin’s reclaim of $86k.' },
      { date: 'Oct 5, 2026', title: 'Glamsterdam on Sepolia Oct 6', text: 'Ethereum’s Glamsterdam upgrade is scheduled to activate on the Sepolia testnet on Oct 6, the next public step after Fusaka toward L1 scaling.' },
      { date: 'Oct 5, 2026', title: 'Exit queue long; supply inflationary', text: 'Reports said the staking exit queue hit its longest stretch of 2026 and issuance still outruns burn near $2,700. A 4,000 ETH Gemini deposit was also noted.' }
    ],
    prediction: { base: '$2,400 - $3,200', bull: '$3,300 - $3,900', bear: '$2,000 - $2,400', summary: '69-day base case is a grind only if BTC holds $84k–$86k. Sepolia is a test, not a price catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 86029, change24h: 0.89, marketCap: 1.729e12, volume24h: 26.49e9, rank: 1 },
    news: [
      { date: 'Oct 5, 2026', title: 'BTC back above $86k', text: 'Bitcoin traded near $86,029, up about 0.9% on the day and about 3% on the week, after wicks toward $87,000 failed to stick.' },
      { date: 'Oct 5, 2026', title: 'Shorts led the flush', text: 'Coin trackers said shorts took most of a ~$73M Bitcoin liquidation print as price held near $86,100. Glassnode still flags a large short cluster near $90k.' },
      { date: 'Oct 4, 2026', title: 'Strategy stack near $72B', text: 'As of Oct 4, Strategy held 847,666 BTC at about a $75,400 average, marked near $72.3B. Saylor again hinted at further buys.' }
    ],
    prediction: { base: '$78,000 - $95,000', bull: '$98,000 - $112,000', bear: '$68,000 - $78,000', summary: '69-day base case is a higher range if $84k–$86k holds. $90k is the next liquidation magnet, not a target. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1728, change24h: 0.36, marketCap: 70.93e6, volume24h: 16.80e6, rank: 412 },
    news: [
      { date: 'Oct 5, 2026', title: 'IO firmer near $0.173', text: 'io.net traded near $0.173, up about 0.4%, with market cap near $71M and 24h volume about $17M, above the Oct 2 snapshot.' },
      { date: 'Oct 4, 2026', title: 'No new IO protocol print', text: 'No fresh io.net mainnet, burn, or partnership headline in the last week. Price is following quiet AI-compute beta.' },
      { date: 'Oct 3, 2026', title: 'Still the thin GPU name', text: 'IO remains the smallest cap in the compute set. Unlocks and low liquidity can still dominate a quiet tape. Not financial advice.' }
    ],
    prediction: { base: '$0.11 - $0.25', bull: '$0.28 - $0.42', bear: '$0.06 - $0.11', summary: '69-day path needs BTC stability and visible inference spend. A quiet tape still favors unlocks over narrative. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.7713, change24h: 3.48, marketCap: 229.89e6, volume24h: 27.35e6, rank: 196 },
    news: [
      { date: 'Oct 5, 2026', title: 'AKT jumps to about $0.77', text: 'Akash traded near $0.771, up about 3.5% on the day, with market cap near $230M and volume about $27M.' },
      { date: 'Oct 5, 2026', title: 'Week still the larger move', text: 'A live board showed AKT up roughly 17% over seven days, the strongest weekly print in the compute group, without a new protocol headline.' },
      { date: 'Oct 3, 2026', title: 'Lease spend still the tell', text: 'BME and 2025 revenue context is unchanged. This week’s lift looks like mid-cap compute beta, not a fresh lease-print story.' }
    ],
    prediction: { base: '$0.55 - $1.00', bull: '$1.05 - $1.45', bear: '$0.35 - $0.55', summary: 'AKT is sector beta after a sharp week. A 69-day hold needs BTC stable and lease spend to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.98, change24h: 2.16, marketCap: 1.029e9, volume24h: 57.33e6, rank: 64 },
    news: [
      { date: 'Oct 5, 2026', title: 'RENDER near $1.98', text: 'RENDER traded at $1.98, up about 2.2%, with about $1.03B market cap and the deepest compute-set volume at ~$57M.' },
      { date: 'Oct 4, 2026', title: 'Still the liquid GPU proxy', text: 'No new Render job-spend or burn headline this week. Coverage still treats RENDER as the liquid AI-GPU beta versus thinner DePIN names.' },
      { date: 'Oct 3, 2026', title: 'USD spend still unpublished', text: 'On-chain burns remain the visible metric. USD job-spend is still not published, so a revenue multiple cannot be set. Not financial advice.' }
    ],
    prediction: { base: '$1.50 - $2.60', bull: '$2.70 - $3.60', bear: '$1.05 - $1.50', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a higher range if BTC and AI demand hold. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
