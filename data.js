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
    snapshot: { price: 0.0817, change24h: 2.0, marketCap: 12.4e9, volume24h: 700e6, rank: 10 },
    news: [
      { date: 'Sep 17, 2026', title: 'DOGE holds near $0.08 after Fed hike', text: 'Dogecoin is stalling around $0.08-$0.082 after the Fed raised rates 25 bps. Whales bought ~240M DOGE earlier in the week while ETF flow stayed tiny.' },
      { date: 'Sep 16, 2026', title: 'CLARITY miss hit risk assets', text: 'The Senate CLARITY vote failed and crypto ETFs saw a large outflow day. DOGE sold off with BTC/ETH, then bounced modestly.' },
      { date: 'Sep 17, 2026', title: 'Range still $0.08 vs $0.09', text: 'Traders are watching a break of the $0.08 cluster or the 200-day area near $0.09 for the next move.' }
    ],
    prediction: { base: '$0.068 - $0.11', bull: '$0.12 - $0.18', bear: '$0.050 - $0.068', summary: 'After the hike and CLARITY miss, DOGE is range-bound. 69-day path still tracks BTC liquidity more than meme-specific news.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2450, change24h: 1.3, marketCap: 297e9, volume24h: 18e9, rank: 2 },
    news: [
      { date: 'Sep 17, 2026', title: 'ETH holds mid-$2,400s after the hike', text: 'Ethereum bounced with the tape after the Fed raised rates to 3.75%-4.00%. Spot ETH ETFs have been mixed after a heavy outflow day.' },
      { date: 'Sep 16, 2026', title: 'ETF outflows then a bounce', text: 'US crypto ETFs saw large outflows after the CLARITY miss. ETH later recovered toward $2,430-$2,450.' },
      { date: 'Sep 17, 2026', title: 'Treasuries still the slow bid', text: 'BitMine and other treasury names remain the structural ETH story while price follows BTC and rates.' }
    ],
    prediction: { base: '$2,050 - $2,850', bull: '$3,100 - $3,700', bear: '$1,750 - $2,050', summary: 'Hawkish Fed + mixed ETF flow caps ETH near term. A 69-day rebound needs BTC stability and ETF inflows to return.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 76500, change24h: 0.7, marketCap: 1535e9, volume24h: 35e9, rank: 1 },
    news: [
      { date: 'Sep 17, 2026', title: 'BTC holds $76k after a 25 bp hike', text: 'The Fed raised rates for the first time in three years. Bitcoin is holding the mid-$76k area while equities digested the move.' },
      { date: 'Sep 16, 2026', title: 'ETF flow flipped negative', text: 'Spot BTC ETFs printed a large outflow day after the CLARITY Act failed a Senate vote, then saw a rebound print midweek.' },
      { date: 'Sep 17, 2026', title: 'Range floor in play', text: 'On-chain desks flagged a break of the late-August range floor near the realized-mean zone around $76k-$77k.' }
    ],
    prediction: { base: '$68,000 - $86,000', bull: '$90,000 - $105,000', bear: '$58,000 - $68,000', summary: 'Policy week is over but hike + outflow risk remains. Base case is a wide $68k-$86k range over the next 69 days unless ETF demand returns.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.12, change24h: -2.0, marketCap: 51e6, volume24h: 7e6, rank: 480 },
    news: [
      { date: 'Sep 17, 2026', title: 'IO still tracks AI-compute beta', text: 'Market-cap comps put IO near $51M. Price remains high-beta to BTC and AI-infrastructure risk.' },
      { date: 'Sep 10, 2026', title: 'DeepSeek V4.1 Flash listed', text: 'io.net said DeepSeek V4.1 Flash went live on day zero for inference workloads.' },
      { date: '2026', title: 'IDE + unlocks', text: 'Usage-linked burns are the bull case; emissions and GPU-count debates are still the cap on rallies.' }
    ],
    prediction: { base: '$0.08 - $0.20', bull: '$0.25 - $0.40', bear: '$0.05 - $0.08', summary: 'IO needs BTC calm plus visible inference demand. Unlocks can still dominate a 69-day window.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.50, change24h: -3.0, marketCap: 152e6, volume24h: 6e6, rank: 205 },
    news: [
      { date: 'Sep 17, 2026', title: 'AKT ~$152M cap in latest comps', text: 'Akash remains the mid-cap compute marketplace name. Price is following the AI-DePIN tape, not a single headline.' },
      { date: '2026', title: 'BME still needs paid leases', text: 'Burn-mint is live, but net supply only tightens if GPU/CPU lease spend stays elevated.' },
      { date: 'Sep 2026', title: 'Sector review week', text: 'Render vs Akash vs io.net comparisons are circulating again after the broader compute-token pullback.' }
    ],
    prediction: { base: '$0.32 - $0.70', bull: '$0.80 - $1.10', bear: '$0.20 - $0.32', summary: 'AKT is sector beta. A 69-day bounce needs BTC stability and visible lease demand.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.35, change24h: -2.0, marketCap: 735e6, volume24h: 40e6, rank: 86 },
    news: [
      { date: 'Sep 17, 2026', title: 'RENDER still the liquid compute name', text: 'Latest comps put Render near $735M market cap, well above AKT and IO. It remains the easiest compute token to trade.' },
      { date: 'Sep 2026', title: 'Job volume vs emissions', text: 'Burns exist, but emissions can still outrun usage if creative/AI jobs cool with the tape.' },
      { date: 'Sep 17, 2026', title: 'High-beta to BTC', text: 'RENDER sold off with AI-compute names into the Fed week and is now tracking the $76k BTC hold.' }
    ],
    prediction: { base: '$1.00 - $1.90', bull: '$2.20 - $3.20', bear: '$0.70 - $1.00', summary: 'RENDER should keep leading the compute group on liquidity. Base case is a range unless AI-job demand and BTC both turn up.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
