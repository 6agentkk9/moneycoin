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
    snapshot: { price: 0.084668, change24h: 1.04, marketCap: 13.235e9, volume24h: 0.452e9, rank: 12 },
    news: [
      { date: 'Oct 14, 2026', title: 'DOGE near $0.085, +1.0%', text: 'Dogecoin traded near $0.0847, up about 1.0% on the day, with roughly $452M in 24h volume. Market cap near $13.2B. Rank around 12.' },
      { date: 'Oct 13, 2026', title: 'Bitwise DOGE ETF wind-down', text: 'SEC filed Form 25 for Bitwise Dogecoin ETF as the wind-down process nears its end. Price has tested key support after recent declines.' },
      { date: 'Oct 13, 2026', title: 'Testing support with majors', text: 'DOGE joined SHIB, ZEC and XMR testing support after market declines. Open interest weakened. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.16', bear: '$0.05 - $0.07', summary: '69-day path needs a hold above $0.083 after the modest bounce. Still pure BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2512.94, change24h: 0.41, marketCap: 306.91e9, volume24h: 8.74e9, rank: 2 },
    news: [
      { date: 'Oct 14, 2026', title: 'ETH near $2,513, +0.4%', text: 'Ethereum traded near $2,513, up about 0.4% on the day, with market cap near $307B and volume about $8.7B. Rank 2.' },
      { date: 'Oct 13, 2026', title: 'Tracking BTC recovery', text: 'ETH advanced modestly with Bitcoin as the market recovered from sub-$81k levels. Interactive Brokers expanded Ethereum staking push.' },
      { date: 'Oct 14, 2026', title: 'CPI and macro focus', text: 'US inflation data remains the near catalyst. No major new L2 headline in this pass. Not financial advice.' }
    ],
    prediction: { base: '$2,250 - $2,950', bull: '$3,000 - $3,600', bear: '$1,900 - $2,250', summary: '69-day base case is a grind higher only if BTC holds $83k. CPI print is the near catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 83728, change24h: 0.43, marketCap: 1.6825e12, volume24h: 26.43e9, rank: 1 },
    news: [
      { date: 'Oct 14, 2026', title: 'BTC near $83,728', text: 'Bitcoin traded near $83,728, up about 0.4% on the day after bouncing from last week\u2019s low near $80k. Market cap about $1.68T. Dominance near 60%.' },
      { date: 'Oct 13, 2026', title: 'Rebound after $80k dip', text: 'BTC rebounded above $83k as oil prices eased and after dipping below $81k. Spot ETF flows remain a focus.' },
      { date: 'Oct 14, 2026', title: 'CPI print due', text: 'US inflation data on October 14 is the next major catalyst. Exchange reserves lower. Not financial advice.' }
    ],
    prediction: { base: '$76,000 - $94,000', bull: '$96,000 - $108,000', bear: '$66,000 - $76,000', summary: '69-day base case needs $82k to hold after the bounce. $90k remains overhead resistance. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.164248, change24h: 0.70, marketCap: 67.89e6, volume24h: 10.72e6, rank: 400 },
    news: [
      { date: 'Oct 14, 2026', title: 'IO near $0.164, +0.7%', text: 'io.net traded near $0.164, up about 0.7%, with market cap near $68M and 24h volume about $10.7M. Rank remains deep in the hundreds.' },
      { date: 'Oct 13, 2026', title: 'Quiet compute day', text: 'No fresh compute-hour or listing headline in this pass. The move tracks broader risk recovery.' },
      { date: 'Oct 14, 2026', title: 'Thin liquidity continues', text: 'Volume remains modest. Unlocks can still dominate the tape. Not financial advice.' }
    ],
    prediction: { base: '$0.12 - $0.24', bull: '$0.25 - $0.40', bear: '$0.06 - $0.12', summary: '69-day path needs BTC stability and a new compute-hour print. Thin book risk remains. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.690415, change24h: 0.77, marketCap: 206.29e6, volume24h: 4.68e6, rank: 180 },
    news: [
      { date: 'Oct 14, 2026', title: 'AKT near $0.690, +0.8%', text: 'Akash traded near $0.690, up about 0.8% on the day, with market cap near $206M and volume about $4.7M. Rank near 180.' },
      { date: 'Oct 13, 2026', title: 'Quiet compute session', text: 'No fresh Akash lease or revenue headline in this pass. The move tracks mid-cap compute beta.' },
      { date: 'Oct 14, 2026', title: 'Lighter volume', text: 'Price is modestly lower than the prior snapshot. Volume remains lighter than RENDER. Not financial advice.' }
    ],
    prediction: { base: '$0.55 - $1.00', bull: '$1.05 - $1.40', bear: '$0.35 - $0.55', summary: 'AKT is still sector beta. A 69-day hold needs BTC stable and a lease-spend print to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 2.00, change24h: -1.92, marketCap: 1.037e9, volume24h: 89.21e6, rank: 78 },
    news: [
      { date: 'Oct 14, 2026', title: 'RENDER near $2.00, -1.9%', text: 'RENDER traded at $2.00, down about 1.9%, with about $1.04B market cap and volume near $89M. Rank around 78.' },
      { date: 'Oct 13, 2026', title: 'Most liquid compute name', text: 'RENDER remains the most liquid in the compute set. No fresh burn or USD job-spend headline in this pass.' },
      { date: 'Oct 14, 2026', title: 'Still BTC beta', text: 'Tape follows risk assets after the broader recovery. Highest volume in the group. Not financial advice.' }
    ],
    prediction: { base: '$1.50 - $2.60', bull: '$2.70 - $3.40', bear: '$1.00 - $1.50', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range under $2.60 if BTC stabilizes. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
