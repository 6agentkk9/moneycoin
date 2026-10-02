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
    snapshot: { price: 0.09657, change24h: 1.79, marketCap: 15.087e9, volume24h: 875.4e6, rank: 12 },
    news: [
      { date: 'Oct 2, 2026', title: 'DOGE eyes $0.10 as OI rises', text: 'DOGE traded near $0.097, up about 1.8% on the day, with futures open interest up ~4% to $1.53B as bulls retested $0.10.' },
      { date: 'Oct 1, 2026', title: 'DogeOS public testnet is live', text: 'DogeOS opened a public testnet Sep 30 using a ZK rollup and EVM contracts with DOGE as the fee token. Mainnet is not dated.' },
      { date: 'Oct 1, 2026', title: 'Kalshi lists regulated DOGE perps', text: 'Kalshi launched CFTC-regulated onshore Dogecoin perpetual futures in the US, adding a listed venue beside spot ETFs.' }
    ],
    prediction: { base: '$0.08 - $0.12', bull: '$0.13 - $0.18', bear: '$0.05 - $0.08', summary: '69-day path still hinges on a hold above $0.09 and a clean $0.10 break. Testnet and listed perps are secondary to BTC. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2747, change24h: 1.50, marketCap: 335.58e9, volume24h: 15.86e9, rank: 2 },
    news: [
      { date: 'Oct 2, 2026', title: 'ETH consolidates near $2,750', text: 'Ethereum held around $2,747, up about 1.5%, as traders waited for a direction after Bitcoin cleared $85k.' },
      { date: 'Oct 1, 2026', title: 'ETH rangebound while BTC broke up', text: 'Benzinga noted ETH stayed rangebound as BTC pushed through $85,000 and Treasury yields backed off a 24-year high.' },
      { date: 'Oct 1, 2026', title: 'Alt beta tied to the $85k hold', text: 'Van de Poppe said a hold above ~$84,800 could restart alt momentum after several quiet days; ETH remains the liquid proxy.' }
    ],
    prediction: { base: '$2,400 - $3,200', bull: '$3,300 - $3,900', bear: '$2,000 - $2,400', summary: '69-day base case is a grind higher only if BTC holds the breakout. ETH is still the liquidity proxy, not a standalone catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 86586, change24h: 3.19, marketCap: 1.740e12, volume24h: 39.68e9, rank: 1 },
    news: [
      { date: 'Oct 2, 2026', title: 'BTC holds above $86k', text: 'Bitcoin traded near $86,586, up about 3.2%, consolidating a weekly gain above $84k with spot ETF inflows cited at $2.25B through Thursday.' },
      { date: 'Oct 1, 2026', title: '$85k Binance wall absorbed', text: 'Willy Woo and Glassnode noted the major $85,000 Binance sell wall was absorbed after a week of failed tests, thinning asks above.' },
      { date: 'Oct 1, 2026', title: 'Yields retreat; BTC breaks up', text: 'Majors rose as Treasuries backed off a 24-year high. Van de Poppe called the move above $84,800 a setup for more momentum if it holds.' }
    ],
    prediction: { base: '$78,000 - $95,000', bull: '$98,000 - $112,000', bear: '$68,000 - $78,000', summary: '69-day base case is a higher range if $84k–$85k holds and ETF demand stays bid. Yields remain the cap. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1595, change24h: 0.18, marketCap: 65.46e6, volume24h: 9.94e6, rank: 412 },
    news: [
      { date: 'Oct 2, 2026', title: 'IO flat near $0.16', text: 'io.net was little changed at about $0.160 with a ~$65M market cap and thin ~$10M daily volume, still lagging larger AI names.' },
      { date: 'Oct 1, 2026', title: 'IDE burn live; revenue partial', text: 'An Oct 1 peer note put IO revenue near $12.5M annualised and self-reported. The June IDE burn is on-chain; demand-linked emissions are the open question.' },
      { date: 'Oct 1, 2026', title: 'Cheapest FDV of GPU peers', text: 'Same comparison still marks IO the cheapest fully diluted peer versus RENDER and AKT, with GPU-supply beta intact and no fresh catalyst.' }
    ],
    prediction: { base: '$0.10 - $0.24', bull: '$0.28 - $0.42', bear: '$0.06 - $0.10', summary: '69-day path needs BTC stability and visible inference spend. Unlocks can still dominate a quiet tape. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.6699, change24h: 0.35, marketCap: 199.85e6, volume24h: 6.65e6, rank: 196 },
    news: [
      { date: 'Oct 2, 2026', title: 'AKT steady near $0.67', text: 'Akash traded around $0.670, up about 0.4%, with market cap near $200M and light ~$6.6M volume.' },
      { date: 'Oct 1, 2026', title: 'BME and ~$3.15M 2025 revenue', text: 'A peer review still cites Messari-audited 2025 revenue of $3.15M and burn-mint economics, implying a high price-to-revenue multiple near current cap.' },
      { date: 'Oct 1, 2026', title: 'Lease demand still the tell', text: 'No new protocol headline this week. AKT continues to track mid-cap compute beta more than spot lease prints.' }
    ],
    prediction: { base: '$0.48 - $0.90', bull: '$0.95 - $1.35', bear: '$0.32 - $0.48', summary: 'AKT is sector beta. A 69-day bounce needs BTC to hold and on-chain lease spend to show up. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.97, change24h: 2.35, marketCap: 1.021e9, volume24h: 54.2e6, rank: 64 },
    news: [
      { date: 'Oct 2, 2026', title: 'RENDER leads compute group', text: 'RENDER traded near $1.97, up about 2.4%, with about $1.02B market cap and the deepest volume in the compute set (~$54M).' },
      { date: 'Oct 1, 2026', title: 'Burns on-chain; USD spend opaque', text: 'An Oct 1 comparison notes RENDER burns are on-chain but USD job-spend is still unpublished, so a revenue multiple cannot be set.' },
      { date: 'Oct 1, 2026', title: 'Still the liquid AI-GPU proxy', text: 'Coverage keeps grouping RENDER with TAO/FET as the liquid GPU-compute beta while smaller DePIN names stay quiet.' }
    ],
    prediction: { base: '$1.50 - $2.60', bull: '$2.70 - $3.60', bear: '$1.05 - $1.50', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a higher range if BTC and AI-job demand hold. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
