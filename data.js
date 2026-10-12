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
    snapshot: { price: 0.08702, change24h: 2.08, marketCap: 13.601e9, volume24h: 0.498e9, rank: 12 },
    news: [
      { date: 'Oct 12, 2026', title: 'DOGE near $0.087, +2.1%', text: 'Dogecoin traded near $0.0870, up about 2.1% on the day, with roughly $498M in 24h volume. Market cap near $13.6B. Rank around 12.' },
      { date: 'Oct 12, 2026', title: 'Recovering with majors', text: 'DOGE joined broader gains as BTC held above $83k after last week\u2019s dip toward $80k. No major DOGE-specific protocol news in this pass.' },
      { date: 'Oct 11, 2026', title: 'Week still mixed', text: 'Prior week showed DOGE softer with the market. Current print is modest green. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.16', bear: '$0.05 - $0.07', summary: '69-day path needs a hold above $0.085 after the modest bounce. Still pure BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2539, change24h: 1.41, marketCap: 310.09e9, volume24h: 12.09e9, rank: 2 },
    news: [
      { date: 'Oct 12, 2026', title: 'ETH near $2,539, +1.4%', text: 'Ethereum traded near $2,539, up about 1.4% on the day, with market cap near $310B and volume about $12.1B. Rank 2.' },
      { date: 'Oct 12, 2026', title: 'Tracking BTC recovery', text: 'ETH advanced with Bitcoin as the market recovered from sub-$81k levels. Focus remains on upcoming CPI data Oct 14.' },
      { date: 'Oct 12, 2026', title: 'No major L2 headline', text: 'This pass found no new Ethereum mainnet or L2 revenue print. Tape is still macro-driven. Not financial advice.' }
    ],
    prediction: { base: '$2,250 - $2,950', bull: '$3,000 - $3,600', bear: '$1,900 - $2,250', summary: '69-day base case is a grind higher only if BTC holds $82k. CPI print is the near catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 83105, change24h: 0.05, marketCap: 1.670e12, volume24h: 23.13e9, rank: 1 },
    news: [
      { date: 'Oct 12, 2026', title: 'BTC near $83,105', text: 'Bitcoin traded near $83,105, essentially flat on the day after bouncing from last week\u2019s low near $80k. Market cap about $1.67T. Dominance near 60%.' },
      { date: 'Oct 12, 2026', title: 'ETF outflows continue', text: 'Spot BTC ETFs saw large weekly outflows recently, yet price held above $83k as oil fell. Analysts watch $82k support.' },
      { date: 'Oct 12, 2026', title: 'CPI due Oct 14', text: 'US inflation data on October 14 is the next major catalyst after the recovery from $80k. Not financial advice.' }
    ],
    prediction: { base: '$76,000 - $94,000', bull: '$96,000 - $108,000', bear: '$66,000 - $76,000', summary: '69-day base case needs $82k to hold after the bounce. $90k remains overhead resistance. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1781, change24h: 8.52, marketCap: 73.62e6, volume24h: 62.59e6, rank: 380 },
    news: [
      { date: 'Oct 12, 2026', title: 'IO near $0.178, +8.5%', text: 'io.net traded near $0.178, up about 8.5%, with market cap near $74M and 24h volume about $63M. Rank improved into the 300s.' },
      { date: 'Oct 12, 2026', title: 'Compute beta bounce', text: 'IO led the compute set on the day as risk assets recovered. No fresh compute-hour or listing headline in this pass.' },
      { date: 'Oct 12, 2026', title: 'Still thin liquidity', text: 'Volume spiked but remains modest. Unlocks can still dominate. Not financial advice.' }
    ],
    prediction: { base: '$0.12 - $0.24', bull: '$0.25 - $0.40', bear: '$0.06 - $0.12', summary: '69-day path needs BTC stability and a new compute-hour print after today\u2019s bounce. Thin book risk remains. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.7597, change24h: 0.48, marketCap: 225.60e6, volume24h: 10.35e6, rank: 175 },
    news: [
      { date: 'Oct 12, 2026', title: 'AKT near $0.760, +0.5%', text: 'Akash traded near $0.760, up about 0.5% on the day, with market cap near $226M and volume about $10.4M. Rank near 175.' },
      { date: 'Oct 12, 2026', title: 'Quiet compute day', text: 'No fresh Akash lease or revenue headline in this pass. The move tracks mid-cap compute beta after the BTC recovery.' },
      { date: 'Oct 12, 2026', title: 'Range continues', text: 'Price is modestly higher than the prior snapshot. Volume remains lighter than RENDER. Not financial advice.' }
    ],
    prediction: { base: '$0.55 - $1.00', bull: '$1.05 - $1.40', bear: '$0.35 - $0.55', summary: 'AKT is still sector beta. A 69-day hold needs BTC stable and a lease-spend print to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 2.09, change24h: 9.48, marketCap: 1.088e9, volume24h: 86.23e6, rank: 75 },
    news: [
      { date: 'Oct 12, 2026', title: 'RENDER near $2.09, +9.5%', text: 'RENDER traded at $2.09, up about 9.5%, with about $1.09B market cap and volume near $86M. Rank around 75.' },
      { date: 'Oct 12, 2026', title: 'Liquid AI-GPU leader', text: 'RENDER led the compute group on the bounce. No fresh burn or USD job-spend headline in this pass.' },
      { date: 'Oct 12, 2026', title: 'Highest compute volume', text: 'It remains the most liquid name in the set. Tape is still BTC and risk-on beta. Not financial advice.' }
    ],
    prediction: { base: '$1.50 - $2.60', bull: '$2.70 - $3.40', bear: '$1.00 - $1.50', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range under $2.60 if BTC stabilizes. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
