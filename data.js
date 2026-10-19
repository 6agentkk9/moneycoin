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
    snapshot: { price: 0.07963, change24h: 0.09, marketCap: 12.45e9, volume24h: 610e6, rank: 12 },
    news: [
      { date: 'Oct 19, 2026', title: 'DOGE near $0.080, flat', text: 'Dogecoin traded near $0.0796, up about 0.1% on the day, with roughly $610M in 24h volume. Market cap near $12.45B. Rank 12. Not financial advice.' },
      { date: 'Oct 19, 2026', title: 'Trades near $0.08 on Binance', text: 'DOGE moved between $0.07918 and $0.08028, about 17% below its Oct. 4 close. Volume lighter after recent highs. Not financial advice.' },
      { date: 'Oct 17, 2026', title: 'Whales and volume note', text: 'Large-holder balances rose earlier while price defended $0.08. Funding rates positive in recent snapshots. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.16', bear: '$0.05 - $0.07', summary: '69-day path needs a hold above $0.078 after the quiet session. Still pure BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2422.31, change24h: 0.32, marketCap: 295.88e9, volume24h: 10.11e9, rank: 2 },
    news: [
      { date: 'Oct 19, 2026', title: 'ETH near $2,422, +0.3%', text: 'Ethereum traded near $2,422, up about 0.3% on the day, with market cap near $296B and volume about $10.1B. Rank 2. Not financial advice.' },
      { date: 'Oct 19, 2026', title: 'Tracks BTC bounce above $82k', text: 'ETH advanced with Bitcoin after the dip near $80k. Spot ETF outflows noted earlier in October. Not financial advice.' },
      { date: 'Oct 19, 2026', title: 'DeFi leads altcoin gains', text: 'DeFi tokens outpaced majors as stocks rebounded and China GDP beat estimates. ETH held near $2,420. Not financial advice.' }
    ],
    prediction: { base: '$2,200 - $2,900', bull: '$3,000 - $3,500', bear: '$1,850 - $2,200', summary: '69-day base case is a grind higher only if BTC holds $82k. Macro prints remain the near catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 82487, change24h: 0.65, marketCap: 1.658e12, volume24h: 26.85e9, rank: 1 },
    news: [
      { date: 'Oct 19, 2026', title: 'BTC near $82,487, +0.6%', text: 'Bitcoin traded near $82,487, up about 0.6% on the day after bouncing from a dip near $80.7k. Market cap about $1.66T. Not financial advice.' },
      { date: 'Oct 19, 2026', title: 'Extends bounce above $82k', text: 'BTC rose with stocks as Nasdaq futures rebounded and China GDP beat. Briefly dipped below $81k earlier. Not financial advice.' },
      { date: 'Oct 19, 2026', title: 'ETF flows and macro focus', text: 'Spot ETF outflows near $1B over recent weeks noted. Dominance remains high. Not financial advice.' }
    ],
    prediction: { base: '$75,000 - $92,000', bull: '$95,000 - $105,000', bear: '$65,000 - $75,000', summary: '69-day base case needs $81k to hold after the bounce. $90k remains overhead resistance. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1509, change24h: -0.15, marketCap: 62.37e6, volume24h: 7.78e6, rank: 400 },
    news: [
      { date: 'Oct 19, 2026', title: 'IO near $0.151, flat', text: 'io.net traded near $0.151, down about 0.2% on the day, with market cap near $62M and 24h volume about $7.8M. Rank remains deep in the hundreds. Not financial advice.' },
      { date: 'Oct 13, 2026', title: 'DePIN rally note', text: 'Earlier mid-October saw IO up double digits with DePIN tokens after sell-off. Thin book continues. Not financial advice.' },
      { date: 'Oct 5, 2026', title: 'Compute hours milestone', text: 'Network reported more than 34 million compute hours earlier. Unlocks and emissions remain a headwind. Not financial advice.' }
    ],
    prediction: { base: '$0.12 - $0.24', bull: '$0.25 - $0.40', bear: '$0.06 - $0.12', summary: '69-day path needs BTC stability and a new compute-hour print. Thin book risk remains. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.696, change24h: 4.20, marketCap: 208.06e6, volume24h: 8.23e6, rank: 181 },
    news: [
      { date: 'Oct 19, 2026', title: 'AKT near $0.696, +4.2%', text: 'Akash traded near $0.696, up about 4.2% on the day, with market cap near $208M and volume about $8.2M. Rank near 181. Not financial advice.' },
      { date: 'Oct 5, 2026', title: 'DePIN basket re-rate', text: 'Earlier week saw AKT up double digits with compute tokens amid AI infrastructure interest. Not financial advice.' },
      { date: 'Oct 19, 2026', title: 'Lease marketplace focus', text: 'Decentralized GPU marketplace continues as key narrative. Volume lighter than RENDER. Not financial advice.' }
    ],
    prediction: { base: '$0.55 - $1.00', bull: '$1.05 - $1.40', bear: '$0.35 - $0.55', summary: 'AKT is still sector beta. A 69-day hold needs BTC stable and a lease-spend print to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.80, change24h: -1.44, marketCap: 934.17e6, volume24h: 55.54e6, rank: 85 },
    news: [
      { date: 'Oct 19, 2026', title: 'RENDER near $1.80, -1.4%', text: 'RENDER traded near $1.80, down about 1.4%, with about $934M market cap and volume near $56M. Rank around 85. Not financial advice.' },
      { date: 'Oct 13, 2026', title: '82 million frames milestone', text: 'Render Network reported cumulative rendered frames past 82 million earlier. Most liquid in the compute set.' },
      { date: 'Oct 19, 2026', title: 'Still BTC beta', text: 'Tape follows risk assets after the broader recovery. Highest volume in the group. Not financial advice.' }
    ],
    prediction: { base: '$1.50 - $2.60', bull: '$2.70 - $3.40', bear: '$1.00 - $1.50', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range under $2.60 if BTC stabilizes. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';