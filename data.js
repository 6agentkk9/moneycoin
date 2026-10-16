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
    snapshot: { price: 0.08224, change24h: 2.7, marketCap: 12.86e9, volume24h: 1.19e9, rank: 12 },
    news: [
      { date: 'Oct 16, 2026', title: 'DOGE near $0.082, +2.7%', text: 'Dogecoin traded near $0.0822, up about 2.7% on the day, with roughly $1.19B in 24h volume. Market cap near $12.9B. Rank around 12.' },
      { date: 'Oct 15, 2026', title: 'Futures whales favor DOGE', text: 'Dogecoin USD-margined long-position share rose while Ether fell. Funding rates positive. Not financial advice.' },
      { date: 'Oct 15, 2026', title: 'DogeOS testnet continues', text: 'EVM-compatible DogeOS public testnet remains active with builders on lending and trading apps using DOGE as gas. ETF wind-down noted earlier. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.16', bear: '$0.05 - $0.07', summary: '69-day path needs a hold above $0.080 after the modest bounce. Still pure BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2473.30, change24h: 4.6, marketCap: 302.04e9, volume24h: 14.83e9, rank: 2 },
    news: [
      { date: 'Oct 16, 2026', title: 'ETH near $2,473, +4.6%', text: 'Ethereum traded near $2,473, up about 4.6% on the day, with market cap near $302B and volume about $14.8B. Rank 2.' },
      { date: 'Oct 16, 2026', title: 'Tracking BTC rebound', text: 'ETH advanced with Bitcoin after the dip below $80k. Spot ETF outflows noted earlier in the week. Not financial advice.' },
      { date: 'Oct 15, 2026', title: 'Macro and inflation focus', text: 'Hotter CPI earlier triggered liquidations; rebound underway. No major new L2 headline in this pass. Not financial advice.' }
    ],
    prediction: { base: '$2,200 - $2,900', bull: '$3,000 - $3,500', bear: '$1,850 - $2,200', summary: '69-day base case is a grind higher only if BTC holds $82k. Macro prints remain the near catalyst. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 82301, change24h: 2.0, marketCap: 1.654e12, volume24h: 32.39e9, rank: 1 },
    news: [
      { date: 'Oct 16, 2026', title: 'BTC near $82,301', text: 'Bitcoin traded near $82,301, up about 2.0% on the day after bouncing from a dip near $80k. Market cap about $1.65T. Dominance near 59%.' },
      { date: 'Oct 15, 2026', title: 'Rebound after sub-$80k', text: 'BTC rebounded above $82k after briefly trading near $79,800-$80k. Spot ETF flows and inflation data remain in focus.' },
      { date: 'Oct 16, 2026', title: 'Altcoins outpace on day', text: 'Celestia and others led gains while BTC held relatively flat near $82k. Not financial advice.' }
    ],
    prediction: { base: '$75,000 - $92,000', bull: '$95,000 - $105,000', bear: '$65,000 - $75,000', summary: '69-day base case needs $81k to hold after the bounce. $90k remains overhead resistance. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.165, change24h: 1.5, marketCap: 68.5e6, volume24h: 11.0e6, rank: 400 },
    news: [
      { date: 'Oct 16, 2026', title: 'IO near $0.165', text: 'io.net traded near $0.165, with market cap near $69M and 24h volume about $11M. Rank remains deep in the hundreds.' },
      { date: 'Oct 5, 2026', title: 'DePIN GPU race note', text: 'Earlier coverage highlighted IO up high single digits amid compute basket re-rating. Thin book continues. Not financial advice.' },
      { date: 'Oct 16, 2026', title: 'Unlocks and liquidity', text: 'Circulating supply climb and modest volume keep the tape sensitive to emissions. Tracks broader risk. Not financial advice.' }
    ],
    prediction: { base: '$0.12 - $0.24', bull: '$0.25 - $0.40', bear: '$0.06 - $0.12', summary: '69-day path needs BTC stability and a new compute-hour print. Thin book risk remains. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.71, change24h: 9.9, marketCap: 212.08e6, volume24h: 6.94e6, rank: 181 },
    news: [
      { date: 'Oct 16, 2026', title: 'AKT near $0.71, +9.9%', text: 'Akash traded near $0.71, up about 9.9% on the day, with market cap near $212M and volume about $6.9M. Rank near 181.' },
      { date: 'Oct 5, 2026', title: 'DePIN basket re-rate', text: 'Earlier week saw AKT up double digits with compute tokens amid AI infrastructure interest. Not financial advice.' },
      { date: 'Oct 16, 2026', title: 'Lease marketplace focus', text: 'Decentralized GPU marketplace continues as key narrative. Volume lighter than RENDER. Not financial advice.' }
    ],
    prediction: { base: '$0.55 - $1.00', bull: '$1.05 - $1.40', bear: '$0.35 - $0.55', summary: 'AKT is still sector beta. A 69-day hold needs BTC stable and a lease-spend print to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.98, change24h: 7.0, marketCap: 1.02e9, volume24h: 67.05e6, rank: 85 },
    news: [
      { date: 'Oct 16, 2026', title: 'RENDER near $1.98, +7%', text: 'RENDER traded near $1.98, up about 7%, with about $1.02B market cap and volume near $67M. Rank around 85.' },
      { date: 'Oct 13, 2026', title: '82 million frames milestone', text: 'Render Network reported cumulative rendered frames past 82 million. Most liquid in the compute set.' },
      { date: 'Oct 16, 2026', title: 'Still BTC beta', text: 'Tape follows risk assets after the broader recovery. Highest volume in the group. Not financial advice.' }
    ],
    prediction: { base: '$1.50 - $2.60', bull: '$2.70 - $3.40', bear: '$1.00 - $1.50', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range under $2.60 if BTC stabilizes. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';