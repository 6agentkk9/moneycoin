const GROUPS = {
  coin: { label: 'Coin', coins: ['dogecoin', 'ethereum', 'bitcoin'] },
  compute: { label: 'Compute Coin', coins: ['io', 'akash-network', 'render-token'] }
};

const NEWS_CAT = {
  dogecoin: 'DOGE',
  ethereum: 'ETH',
  bitcoin: 'BTC',
  io: 'AI',
  'akash-network': 'AI',
  'render-token': 'AI'
};

const COINS = {
  dogecoin: {
    id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', tab: 'DOGE',
    snapshot: { price: 0.0807, change24h: -4.8, marketCap: 12.59e9, volume24h: 800e6, rank: 10 },
    news: [
      { date: 'Sep 15, 2026', title: 'Whales add 240M DOGE', text: 'Large holders accumulated about 240 million DOGE on the pullback. Price is holding near $0.081-$0.083 with resistance around $0.090-$0.095.' },
      { date: 'Sep 15, 2026', title: 'Volume and TD buy signal', text: 'Futures volume jumped and a TD Sequential buy print appeared on lower timeframes. $0.079-$0.075 is the downside zone if support fails.' },
      { date: 'Sep 14-15, 2026', title: 'CLARITY Act + Fed week', text: 'DOGE is trading with the broader meme/risk complex into a Senate CLARITY vote and the Fed meeting.' },
      { date: 'Sep 2026', title: 'DOGE-1 mission watch', text: 'The DOGE-funded lunar satellite narrative is back in circulation for a September 2026 launch window.' }
    ],
    prediction: { base: '$0.070 - $0.11', bull: '$0.12 - $0.18+', bear: '$0.055 - $0.070', summary: 'Choppy into Fed/CLARITY headlines. Whale buying is supportive, but $0.09-$0.095 still caps.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2404, change24h: -5.5, marketCap: 293e9, volume24h: 20.6e9, rank: 2 },
    news: [
      { date: 'Sep 15, 2026', title: 'ETH slips into Fed week', text: 'Ethereum is trading around the mid-$2,400s as markets price a high chance of a Fed hike and watch the CLARITY Act vote.' },
      { date: 'Sep 14-15, 2026', title: 'BitMine keeps stacking', text: 'BitMine added about 27,180 ETH last week, taking holdings near 5.96 million ETH (~4.9% of supply).' },
      { date: 'Sep 2026', title: 'Treasury flows mixed', text: 'Some public treasuries are still adding ETH while others have sold or paused.' },
      { date: 'Ongoing', title: 'L2 + staking backdrop', text: 'Layer-2 usage and staking remain the medium-term story while price follows BTC and macro liquidity.' }
    ],
    prediction: { base: '$2,100 - $2,900', bull: '$3,200 - $3,800+', bear: '$1,800 - $2,100', summary: 'ETH is a beta play on BTC plus treasury/ETF flows. A hawkish Fed can keep it range-bound.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 75883, change24h: -4.0, marketCap: 1524e9, volume24h: 39.8e9, rank: 1 },
    news: [
      { date: 'Sep 15, 2026', title: 'BTC slips ahead of the Fed', text: 'Bitcoin is trading in the mid-$75k-$77k area as the FOMC meeting starts and hike odds sit near 90%.' },
      { date: 'Sep 15, 2026', title: 'ETF streak wobbles', text: 'Spot crypto ETFs had pulled in about $6.8B over six weeks, but the latest week showed softer or outflow prints.' },
      { date: 'Sep 15, 2026', title: 'CLARITY Act in focus', text: 'A Senate procedural vote on the CLARITY Act is the main policy headline alongside the Fed and Bank of Japan.' },
      { date: 'Sep 8-11, 2026', title: 'Treasury buying mixed', text: 'Strive added BTC while Strategy sat out last week. Corporate treasury demand is no longer a one-way bid.' }
    ],
    prediction: { base: '$68,000 - $88,000', bull: '$90,000 - $105,000+', bear: '$58,000 - $68,000', summary: 'The 69-day path depends on the Fed and whether ETF demand returns. Base case is a wide range around the mid-$70ks.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.123, change24h: -6.2, marketCap: 49.0e6, volume24h: 7.5e6, rank: 480 },
    news: [
      { date: 'Sep 2026', title: 'IDE burns still the story', text: 'The Incentive Dynamic Engine remains the core token narrative: burns tied to network earnings.' },
      { date: 'Sep 6, 2026', title: 'Supply and GPU claims watched', text: 'Trackers still debate circulating supply near 397M and how many GPUs are actually online versus marketed.' },
      { date: '2026', title: 'Enterprise + OpenRouter usage', text: 'io.net continues to pitch enterprise contracts and inference throughput, but price is high-beta DePIN.' },
      { date: 'Ongoing', title: 'Unlock / emission risk', text: 'Vesting and emissions into 2028 can cap rallies unless usage-linked burns outrun new supply.' }
    ],
    prediction: { base: '$0.09 - $0.20', bull: '$0.25 - $0.40+', bear: '$0.06 - $0.09', summary: 'IO stays high-beta to AI-compute sentiment. IDE is constructive if revenue holds, but unlocks can dominate.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.498, change24h: -9.2, marketCap: 148e6, volume24h: 6.6e6, rank: 205 },
    news: [
      { date: 'Sep 15, 2026', title: 'AKT sold off with AI-compute names', text: 'AKT is weaker as DePIN/AI tokens follow BTC lower into the Fed meeting.' },
      { date: 'Sep 2026', title: 'BME still links usage to supply', text: 'Burn-mint equilibrium remains the value-accrual design, but net deflation still needs higher paid usage.' },
      { date: '2026', title: 'Marketplace vs Render / io.net', text: 'Akash is still the general-purpose cloud marketplace competing for the same AI-compute buyers.' },
      { date: 'Ongoing', title: 'Watch lease demand', text: 'Price stays noisy unless GPU lease volume and provider depth pick up in public metrics.' }
    ],
    prediction: { base: '$0.35 - $0.70', bull: '$0.80 - $1.10+', bear: '$0.22 - $0.35', summary: 'AKT is trading as sector beta. A 69-day bounce needs BTC stability plus visible lease demand.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.32, change24h: -5.5, marketCap: 683e6, volume24h: 42.2e6, rank: 86 },
    news: [
      { date: 'Sep 15, 2026', title: 'RENDER tracks the AI-compute pullback', text: 'RENDER is softer with BTC/ETH as traders cut high-beta DePIN exposure into the Fed week.' },
      { date: '2026', title: 'Still the liquid compute name', text: 'Among IO / AKT / RENDER, Render remains the largest by market cap and the easiest to trade.' },
      { date: '2026', title: 'Burn vs emission gap', text: 'Burn-and-mint is live, but emissions can still outrun burns if job volume cools.' },
      { date: 'Ongoing', title: 'Creative + AI split', text: 'The network still spans rendering and AI compute. Job volume is the fundamental to watch.' }
    ],
    prediction: { base: '$1.00 - $1.90', bull: '$2.20 - $3.20+', bear: '$0.70 - $1.00', summary: 'RENDER should continue to lead the compute group on liquidity. Base case is a range unless AI-compute and BTC both turn up.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};

let currentGroup = 'coin';
let currentCoin = 'dogecoin';
