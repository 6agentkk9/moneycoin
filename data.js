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
    snapshot: { price: 0.0803, change24h: 1.12, marketCap: 12.56e9, volume24h: 517e6, rank: 12 },
    news: [
      { date: 'Oct 23, 2026', title: 'DOGE near $0.080, +1.1%', text: 'Dogecoin traded near $0.0803, up about 1.1% on the day, with roughly $517M in 24h volume. Market cap near $12.56B. Rank 12. Not financial advice.' },
      { date: 'Oct 22, 2026', title: 'Dogecoin Labs launches', text: 'Dogecoin Labs launched in partnership with the Foundation, uniting MyDoge, DogeOS and payments tools under Jordan Jefferson. Aims to support utility toward community $1 target. Not financial advice.' },
      { date: 'Oct 22, 2026', title: 'Sinks with majors on Iran fears', text: 'DOGE fell with BTC and ETH amid renewed Iran war concerns, trading near $0.079. Open interest and whale notes continued. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.16', bear: '$0.05 - $0.07', summary: '69-day path needs a hold above $0.080 after the bounce. Still pure BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2398, change24h: -0.20, marketCap: 293.1e9, volume24h: 11.63e9, rank: 2 },
    news: [
      { date: 'Oct 23, 2026', title: 'ETH near $2,398, flat', text: 'Ethereum traded near $2,398, down about 0.2% on the day, with market cap near $293B and volume about $11.6B. Rank 2. Not financial advice.' },
      { date: 'Oct 22, 2026', title: 'Tracks BTC lower on geopolitics', text: 'ETH slipped with Bitcoin amid Iran fears and liquidations. Spot ETF activity noted earlier. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Staking remains high', text: 'Staked ETH stayed elevated near prior records. Yield support continues. Not financial advice.' }
    ],
    prediction: { base: '$2,100 - $2,800', bull: '$2,900 - $3,400', bear: '$1,800 - $2,100', summary: '69-day base case is a grind higher only if BTC holds above $80k. Macro prints remain the near catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 81605, change24h: -0.19, marketCap: 1.640e12, volume24h: 25.63e9, rank: 1 },
    news: [
      { date: 'Oct 23, 2026', title: 'BTC near $81,605, flat', text: 'Bitcoin traded near $81,605, down about 0.2% on the day. Market cap about $1.64T. Volume near $25.6B. Not financial advice.' },
      { date: 'Oct 22, 2026', title: 'Sinks on Iran war fears', text: 'BTC dropped toward $81k amid renewed geopolitical concerns and over $470M liquidations. Analysts noted deeper correction possible. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Held above $83k earlier', text: 'BTC had rebounded above $83k on prior flows before the pullback. Dominance remains elevated. Not financial advice.' }
    ],
    prediction: { base: '$74,000 - $90,000', bull: '$92,000 - $105,000', bear: '$64,000 - $74,000', summary: '69-day base case needs $80k to hold after the dip. $90k remains overhead resistance. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1569, change24h: 0.11, marketCap: 64.86e6, volume24h: 8.52e6, rank: 400 },
    news: [
      { date: 'Oct 23, 2026', title: 'IO near $0.157, flat', text: 'io.net traded near $0.157, up about 0.1% on the day, with market cap near $65M and 24h volume about $8.5M. Rank remains deep in the hundreds. Not financial advice.' },
      { date: 'Oct 17, 2026', title: 'DePIN interest selective', text: 'Compute tokens saw selective interest as AI infrastructure narrative held. Thin book continues. Not financial advice.' },
      { date: 'Oct 5, 2026', title: 'Compute hours milestone', text: 'Network reported more than 34 million compute hours earlier. Unlocks and emissions remain a headwind. Not financial advice.' }
    ],
    prediction: { base: '$0.12 - $0.23', bull: '$0.24 - $0.38', bear: '$0.06 - $0.12', summary: '69-day path needs BTC stability and a new compute-hour print. Thin book risk remains. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.6885, change24h: -0.37, marketCap: 205.9e6, volume24h: 4.60e6, rank: 181 },
    news: [
      { date: 'Oct 23, 2026', title: 'AKT near $0.689, -0.4%', text: 'Akash traded near $0.689, down about 0.4% on the day, with market cap near $206M and volume about $4.6M. Rank near 181. Not financial advice.' },
      { date: 'Oct 17, 2026', title: 'DePIN basket interest', text: 'Compute tokens saw selective re-rate amid AI infrastructure focus. Not financial advice.' },
      { date: 'Oct 21, 2026', title: 'Lease marketplace focus', text: 'Decentralized GPU marketplace continues as key narrative. Volume lighter than RENDER. Not financial advice.' }
    ],
    prediction: { base: '$0.52 - $0.95', bull: '$1.00 - $1.35', bear: '$0.32 - $0.52', summary: 'AKT is still sector beta. A 69-day hold needs BTC stable and a lease-spend print to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.77, change24h: -3.67, marketCap: 919.3e6, volume24h: 50.70e6, rank: 85 },
    news: [
      { date: 'Oct 23, 2026', title: 'RENDER near $1.77, -3.7%', text: 'RENDER traded near $1.77, down about 3.7%, with about $919M market cap and volume near $51M. Rank around 85. Not financial advice.' },
      { date: 'Oct 17, 2026', title: 'AI tokens earlier bounce', text: 'RENDER saw gains earlier as AI tokens bounced with BTC. Most liquid in the compute set. Not financial advice.' },
      { date: 'Oct 22, 2026', title: 'Tracks risk-off', text: 'Tape follows broader risk assets lower after geopolitical headlines. Highest volume in the group. Not financial advice.' }
    ],
    prediction: { base: '$1.40 - $2.50', bull: '$2.60 - $3.30', bear: '$0.95 - $1.40', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range under $2.50 if BTC stabilizes. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';