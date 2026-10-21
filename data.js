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
    snapshot: { price: 0.08196, change24h: 3.18, marketCap: 12.82e9, volume24h: 473e6, rank: 12 },
    news: [
      { date: 'Oct 21, 2026', title: 'DOGE near $0.082, +3.2%', text: 'Dogecoin traded near $0.082, up about 3.2% on the day, with roughly $473M in 24h volume. Market cap near $12.82B. Rank 12. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Open interest rises 6.9%', text: 'DOGE open interest rose about 6.9% as funding stayed positive. Price held near $0.08 after recent whale accumulation notes. Not financial advice.' },
      { date: 'Oct 20, 2026', title: 'Trades near $0.081 on Binance', text: 'DOGE moved near $0.08139, up with majors as oil and yields cooled. Still far from yearly highs. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.16', bear: '$0.05 - $0.07', summary: '69-day path needs a hold above $0.080 after the bounce. Still pure BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2466.41, change24h: 3.07, marketCap: 301.27e9, volume24h: 13.31e9, rank: 2 },
    news: [
      { date: 'Oct 21, 2026', title: 'ETH near $2,466, +3.1%', text: 'Ethereum traded near $2,466, up about 3.1% on the day, with market cap near $301B and volume about $13.3B. Rank 2. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Tracks BTC above $83k', text: 'ETH advanced with Bitcoin after rebound above $83k. Spot ETF outflows noted earlier in October. Not financial advice.' },
      { date: 'Oct 20, 2026', title: 'Staking record near 43.8M ETH', text: 'About 43.8 million ETH staked, nearly 36% of supply, yield near 2.63%. Not financial advice.' }
    ],
    prediction: { base: '$2,200 - $2,900', bull: '$3,000 - $3,500', bear: '$1,850 - $2,200', summary: '69-day base case is a grind higher only if BTC holds $83k. Macro prints remain the near catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 83468, change24h: 2.33, marketCap: 1.678e12, volume24h: 27.81e9, rank: 1 },
    news: [
      { date: 'Oct 21, 2026', title: 'BTC near $83,468, +2.3%', text: 'Bitcoin traded near $83,468, up about 2.3% on the day, a one-week high. Market cap about $1.68T. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'SpaceX-Tesla merger talk holds 30k BTC', text: 'Committees explore merger that would combine more than 30,000 bitcoin. BTC rose with Asian tech stocks. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Rebounds above $83k on ETF flows', text: 'BTC recovered above $83k after short squeeze and inflows. Dominance remains high. Not financial advice.' }
    ],
    prediction: { base: '$75,000 - $92,000', bull: '$95,000 - $105,000', bear: '$65,000 - $75,000', summary: '69-day base case needs $82k to hold after the bounce. $90k remains overhead resistance. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1622, change24h: 0.14, marketCap: 67.05e6, volume24h: 12.81e6, rank: 400 },
    news: [
      { date: 'Oct 21, 2026', title: 'IO near $0.162, flat', text: 'io.net traded near $0.162, up about 0.1% on the day, with market cap near $67M and 24h volume about $12.8M. Rank remains deep in the hundreds. Not financial advice.' },
      { date: 'Oct 17, 2026', title: 'DePIN interest continues', text: 'Compute tokens saw selective interest as AI infrastructure narrative held. Thin book continues. Not financial advice.' },
      { date: 'Oct 5, 2026', title: 'Compute hours milestone', text: 'Network reported more than 34 million compute hours earlier. Unlocks and emissions remain a headwind. Not financial advice.' }
    ],
    prediction: { base: '$0.12 - $0.24', bull: '$0.25 - $0.40', bear: '$0.06 - $0.12', summary: '69-day path needs BTC stability and a new compute-hour print. Thin book risk remains. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.7385, change24h: 4.26, marketCap: 220.84e6, volume24h: 8.56e6, rank: 181 },
    news: [
      { date: 'Oct 21, 2026', title: 'AKT near $0.739, +4.3%', text: 'Akash traded near $0.739, up about 4.3% on the day, with market cap near $221M and volume about $8.6M. Rank near 181. Not financial advice.' },
      { date: 'Oct 17, 2026', title: 'DePIN basket interest', text: 'Compute tokens saw selective re-rate amid AI infrastructure focus. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Lease marketplace focus', text: 'Decentralized GPU marketplace continues as key narrative. Volume lighter than RENDER. Not financial advice.' }
    ],
    prediction: { base: '$0.55 - $1.00', bull: '$1.05 - $1.40', bear: '$0.35 - $0.55', summary: 'AKT is still sector beta. A 69-day hold needs BTC stable and a lease-spend print to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.89, change24h: 4.76, marketCap: 980.87e6, volume24h: 52.27e6, rank: 85 },
    news: [
      { date: 'Oct 21, 2026', title: 'RENDER near $1.89, +4.8%', text: 'RENDER traded near $1.89, up about 4.8%, with about $981M market cap and volume near $52M. Rank around 85. Not financial advice.' },
      { date: 'Oct 17, 2026', title: 'AI tokens lead rebound', text: 'RENDER saw double-digit gains earlier as AI tokens bounced with BTC above $90k briefly. Most liquid in the compute set. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Still BTC beta', text: 'Tape follows risk assets after the broader recovery. Highest volume in the group. Not financial advice.' }
    ],
    prediction: { base: '$1.50 - $2.60', bull: '$2.70 - $3.40', bear: '$1.00 - $1.50', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range under $2.60 if BTC stabilizes. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';