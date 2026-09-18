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
    snapshot: { price: 0.085174, change24h: 4.60, marketCap: 12.9e9, volume24h: 950e6, rank: 12 },
    news: [
      { date: 'Sep 18, 2026', title: 'DOGE up ~4.6% near $0.085', text: 'Dogecoin tracks the broader rebound after the SEC Innovation Exemption news, holding above the $0.08 support cluster.' },
      { date: 'Sep 17, 2026', title: 'Fed hike digested, range intact', text: 'Post-hike, DOGE stayed range-bound near $0.08-$0.09 while spot DOGE ETF flows remained light.' },
      { date: 'Sep 15, 2026', title: 'Fib rejection then bounce', text: '4h charts showed rejection at the 0.618 Fib near $0.08 followed by buyers defending the same zone.' }
    ],
    prediction: { base: '$0.070 - $0.11', bull: '$0.12 - $0.18', bear: '$0.050 - $0.070', summary: 'DOGE remains BTC-beta. 69-day path still hinges on liquidity and whether $0.08 holds. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2502.36, change24h: 1.55, marketCap: 302e9, volume24h: 18e9, rank: 2 },
    news: [
      { date: 'Sep 18, 2026', title: 'ETH near $2,500 on exemption lift', text: 'Ethereum rose with the tape after the SEC temporary Innovation Exemption for tokenized-securities venues.' },
      { date: 'Sep 17, 2026', title: 'ETF outflows still a headwind', text: 'Spot ETH ETFs saw continued outflows midweek even as price recovered toward the mid-$2,400s and higher.' },
      { date: 'Sep 16, 2026', title: 'CLARITY miss then rebound', text: 'The failed Senate CLARITY vote weighed on risk assets; ETH later stabilized with BTC above $76k.' }
    ],
    prediction: { base: '$2,100 - $2,900', bull: '$3,200 - $3,800', bear: '$1,800 - $2,100', summary: 'Hawkish Fed + mixed ETF flow still caps ETH near term. 69-day rebound needs sustained BTC stability. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 77939, change24h: 1.39, marketCap: 1.55e12, volume24h: 23e9, rank: 1 },
    news: [
      { date: 'Sep 18, 2026', title: 'BTC holds ~$78k after SEC exemption', text: 'Bitcoin climbed toward $78k as the SEC issued a temporary Innovation Exemption for certain tokenized venues.' },
      { date: 'Sep 17, 2026', title: 'ETF outflows vs price rebound', text: 'Spot BTC ETFs recorded large midweek outflows even as price recovered from the post-hike dip.' },
      { date: 'Sep 16, 2026', title: 'Rate hike absorbed', text: 'The Fed raised rates 25 bp; BTC held the mid-$76k area and later extended gains with the broader market.' }
    ],
    prediction: { base: '$70,000 - $88,000', bull: '$92,000 - $110,000', bear: '$60,000 - $70,000', summary: 'Policy week digested. Base case is a wide range over the next 69 days unless ETF demand returns strongly. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.137388, change24h: 5.68, marketCap: 54e6, volume24h: 16e6, rank: 480 },
    news: [
      { date: 'Sep 18, 2026', title: 'IO +5.7% with compute beta', text: 'io.net tracked the AI-compute rebound; market-cap comps remain near the $50M+ range.' },
      { date: 'Sep 17, 2026', title: 'Distributed compute narrative', text: 'io.net continues to argue for an open, distributed GPU supply chain matched to AI workloads.' },
      { date: 'Sep 10, 2026', title: 'DeepSeek V4.1 Flash listed', text: 'io.net said DeepSeek V4.1 Flash went live on day zero for inference workloads on the network.' }
    ],
    prediction: { base: '$0.09 - $0.22', bull: '$0.28 - $0.45', bear: '$0.05 - $0.09', summary: 'IO needs BTC calm plus visible inference demand. Unlocks can still dominate a 69-day window. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.543525, change24h: 5.99, marketCap: 162e6, volume24h: 4e6, rank: 200 },
    news: [
      { date: 'Sep 18, 2026', title: 'AKT +6% with DePIN tape', text: 'Akash followed the broader AI-compute rebound; price is sector-beta rather than single-headline driven.' },
      { date: 'Sep 17, 2026', title: 'BME still needs paid leases', text: 'Burn-mint is live, but net supply only tightens if GPU/CPU lease spend stays elevated through the quarter.' },
      { date: 'Sep 17, 2026', title: 'Sector review continues', text: 'Render vs Akash vs io.net comparisons remain the main narrative after the compute-token rebound.' }
    ],
    prediction: { base: '$0.35 - $0.75', bull: '$0.85 - $1.20', bear: '$0.22 - $0.35', summary: 'AKT is sector beta. A 69-day bounce needs BTC stability and visible lease demand. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.51, change24h: 8.57, marketCap: 780e6, volume24h: 52e6, rank: 86 },
    news: [
      { date: 'Sep 18, 2026', title: 'RENDER +8.6% leads compute', text: 'Render remains the liquid compute name and is outperforming on the day near the $1.50 area.' },
      { date: 'Sep 17, 2026', title: 'Node bonus narrative in focus', text: 'Traders are watching the upcoming node-operator bonus claims window (early October) as a short-term sentiment driver.' },
      { date: 'Sep 14, 2026', title: 'Platform project highlights', text: 'Render Network highlighted recent projects rendered on its platform, including high-resolution and game titles.' }
    ],
    prediction: { base: '$1.05 - $2.00', bull: '$2.30 - $3.40', bear: '$0.75 - $1.05', summary: 'RENDER should keep leading the compute group on liquidity. Base case is a range unless AI-job demand and BTC both turn up. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
