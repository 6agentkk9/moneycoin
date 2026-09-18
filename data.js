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
    snapshot: { price: 0.0824, change24h: 1.97, marketCap: 12.85e9, volume24h: 546e6, rank: 10 },
    news: [
      { date: 'Sep 17, 2026', title: 'DOGE holds ~$0.082 after Fed hike', text: 'Dogecoin is firming near $0.082 after the 25 bp rate hike. Spot DOGE ETF inflows remain tiny while whales earlier added ~240M DOGE.' },
      { date: 'Sep 16, 2026', title: 'CLARITY miss weighed on risk assets', text: 'The Senate CLARITY vote failed and crypto ETFs saw heavy outflows. DOGE sold with BTC/ETH then stabilized with the broader tape.' },
      { date: 'Sep 17, 2026', title: 'Range still $0.08 vs $0.09', text: 'Traders watch the $0.08 support cluster and the 200-day area near $0.09 for the next directional move.' }
    ],
    prediction: { base: '$0.068 - $0.11', bull: '$0.12 - $0.18', bear: '$0.050 - $0.068', summary: 'After the hike and CLARITY miss, DOGE remains range-bound. 69-day path still tracks BTC liquidity more than meme-specific catalysts. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2454.55, change24h: 1.33, marketCap: 299.6e9, volume24h: 11.87e9, rank: 2 },
    news: [
      { date: 'Sep 17, 2026', title: 'ETH holds mid-$2,400s after the hike', text: 'Ethereum bounced with the tape after the Fed raised rates to 3.75%-4.00%. Spot ETH ETFs mixed after a heavy outflow session.' },
      { date: 'Sep 16, 2026', title: 'ETF outflows then a rebound', text: 'US crypto ETFs saw large outflows after the CLARITY miss. ETH later recovered toward the $2,430-$2,450 zone.' },
      { date: 'Sep 17, 2026', title: 'Treasuries remain the slow bid', text: 'BitMine and other treasury buyers are still the structural ETH story while price follows BTC and rates.' }
    ],
    prediction: { base: '$2,050 - $2,850', bull: '$3,100 - $3,700', bear: '$1,750 - $2,050', summary: 'Hawkish Fed + mixed ETF flow caps ETH near term. A 69-day rebound needs BTC stability and ETF inflows to return. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 76645, change24h: 0.57, marketCap: 1.54e12, volume24h: 23.12e9, rank: 1 },
    news: [
      { date: 'Sep 17, 2026', title: 'BTC holds $76k after 25 bp hike', text: 'The Fed raised rates for the first time in three years. Bitcoin is holding the mid-$76k area while equities digested the move.' },
      { date: 'Sep 16, 2026', title: 'ETF flow flipped negative', text: 'Spot BTC ETFs printed a large outflow day after the CLARITY Act failed a Senate vote, then saw a rebound print midweek.' },
      { date: 'Sep 17, 2026', title: 'Range floor still in play', text: 'On-chain desks flagged a test of the late-August range floor near the realized-mean zone around $76k-$77k.' }
    ],
    prediction: { base: '$68,000 - $86,000', bull: '$90,000 - $105,000', bear: '$58,000 - $68,000', summary: 'Policy week is over but hike + outflow risk remains. Base case is a wide $68k-$86k range over the next 69 days unless ETF demand returns. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1319, change24h: 0.50, marketCap: 52.4e6, volume24h: 15.1e6, rank: 480 },
    news: [
      { date: 'Sep 17, 2026', title: 'IO tracks AI-compute beta near $52M cap', text: 'Market-cap comps put IO near $52M. Price remains high-beta to BTC and AI-infrastructure risk; volume picked up modestly with the tape.' },
      { date: 'Sep 10, 2026', title: 'DeepSeek V4.1 Flash listed', text: 'io.net said DeepSeek V4.1 Flash went live on day zero for inference workloads on the network.' },
      { date: 'Sep 17, 2026', title: 'IDE + unlocks still the debate', text: 'Usage-linked burns are the bull case; emissions and GPU-count debates remain the cap on sustained rallies.' }
    ],
    prediction: { base: '$0.08 - $0.20', bull: '$0.25 - $0.40', bear: '$0.05 - $0.08', summary: 'IO needs BTC calm plus visible inference demand. Unlocks can still dominate a 69-day window. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.5267, change24h: 4.12, marketCap: 156.9e6, volume24h: 3.43e6, rank: 205 },
    news: [
      { date: 'Sep 17, 2026', title: 'AKT firm near $157M cap', text: 'Akash remains the mid-cap compute marketplace name. Price is following the AI-DePIN tape higher today with no single fresh headline.' },
      { date: 'Sep 17, 2026', title: 'BME still needs paid leases', text: 'Burn-mint is live, but net supply only tightens if GPU/CPU lease spend stays elevated through the quarter.' },
      { date: 'Sep 17, 2026', title: 'Sector review continues', text: 'Render vs Akash vs io.net comparisons remain the main narrative after the broader compute-token pullback and rebound.' }
    ],
    prediction: { base: '$0.32 - $0.70', bull: '$0.80 - $1.10', bear: '$0.20 - $0.32', summary: 'AKT is sector beta. A 69-day bounce needs BTC stability and visible lease demand. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.50, change24h: 9.87, marketCap: 779e6, volume24h: 51.3e6, rank: 86 },
    news: [
      { date: 'Sep 17, 2026', title: 'RENDER leads compute pack +9.9%', text: 'Render is the liquid compute name and is outperforming on the day. Market cap near $779M keeps it well above AKT and IO.' },
      { date: 'Sep 17, 2026', title: 'Node bonus narrative in focus', text: 'Traders are watching the upcoming node-operator bonus claims window (early October) as a short-term sentiment driver.' },
      { date: 'Sep 17, 2026', title: 'High-beta to BTC still true', text: 'RENDER sold off with AI-compute names into Fed week and is now tracking the $76k BTC hold with amplified upside.' }
    ],
    prediction: { base: '$1.00 - $1.90', bull: '$2.20 - $3.20', bear: '$0.70 - $1.00', summary: 'RENDER should keep leading the compute group on liquidity. Base case is a range unless AI-job demand and BTC both turn up. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
