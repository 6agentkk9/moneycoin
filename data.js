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
    snapshot: { price: 0.084978, change24h: -2.41, marketCap: 13.278e9, volume24h: 1.046e9, rank: 12 },
    news: [
      { date: 'Oct 9, 2026', title: 'DOGE near $0.085, rank 12', text: 'Dogecoin traded near $0.0850, down about 2.4% on the day, with roughly $1.05B in 24h volume. Rank slipped to 12 versus 9 on Oct 7.' },
      { date: 'Oct 9, 2026', title: 'Bitwise winds down DOGE ETF', text: 'Bitwise is liquidating its Dogecoin ETF BWOW after assets fell to about $725,900. Final trade is set for October 14.' },
      { date: 'Oct 9, 2026', title: 'Week still red', text: 'A live USD board showed DOGE near $0.085, about 8.7% lower on the week. No new protocol headline in this pass. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.15', bear: '$0.05 - $0.07', summary: '69-day path needs a reclaim of $0.09 after the rank slip and the BWOW wind-down. Tape is still BTC beta. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2502, change24h: -1.28, marketCap: 305.54e9, volume24h: 17.76e9, rank: 2 },
    news: [
      { date: 'Oct 9, 2026', title: 'ETH near $2,502', text: 'Ethereum traded near $2,502, down about 1.3% on the day, after leading a $1.16B liquidation flush with about $356M in ETH losses. Session low was near $2,409.' },
      { date: 'Oct 9, 2026', title: 'Mainnet revenue $18.52M', text: 'Ethereum mainnet earned $18.52 million in 30-day network revenue, up 61%, as Base, Polygon PoS and Arbitrum One grew.' },
      { date: 'Oct 9, 2026', title: 'Thailand ETH ETFs from Oct 16', text: 'Thailand SEC finalized crypto ETF rules, with Bitcoin and Ether funds from October 16. Blast L2 wind-down is a different chain. Not financial advice.' }
    ],
    prediction: { base: '$2,200 - $2,950', bull: '$3,000 - $3,500', bear: '$1,850 - $2,200', summary: '69-day base case is a grind only if BTC holds $80k. Revenue uptick and a Thailand ETF date are not a bid by themselves. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 83096, change24h: 0.83, marketCap: 1.670e12, volume24h: 39.71e9, rank: 1 },
    news: [
      { date: 'Oct 9, 2026', title: 'BTC near $83,096 after a flush', text: 'Bitcoin traded near $83,096, up about 0.8% on the day, after a session dip below $81,000. Dominance was cited near 59.43%. About $1.05B of a $1.16B liquidation wave came from longs.' },
      { date: 'Oct 9, 2026', title: 'Thailand BTC ETFs from Oct 16', text: 'Thailand SEC finalized rules for crypto ETFs, with Bitcoin and Ether funds starting October 16.' },
      { date: 'Oct 8, 2026', title: '6.26M BTC keys exposed', text: 'Glassnode co-founder Rafael Schultze-Kraft counted 6.26 million BTC, 31.2% of supply, with public keys visible on-chain. Not financial advice.' }
    ],
    prediction: { base: '$74,000 - $92,000', bull: '$94,000 - $106,000', bear: '$64,000 - $74,000', summary: '69-day base case needs $80k to hold after the sub-$81k wick. $90k remains a magnet, not a target. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.14792, change24h: -5.57, marketCap: 60.69e6, volume24h: 13.11e6, rank: 416 },
    news: [
      { date: 'Oct 9, 2026', title: 'IO near $0.148', text: 'io.net traded near $0.148, down about 5.6%, with market cap near $61M and 24h volume about $13M. Rank 416.' },
      { date: 'Oct 9, 2026', title: 'No fresh IO headline', text: 'This pass found no new io.net compute-hour, listing, or unlock print in the last week. The move tracks the risk-off compute tape.' },
      { date: 'Oct 9, 2026', title: 'Still the thin GPU name', text: 'IO remains the smallest cap in the compute set. Unlocks and low liquidity can still dominate the print. Not financial advice.' }
    ],
    prediction: { base: '$0.10 - $0.20', bull: '$0.22 - $0.35', bear: '$0.05 - $0.10', summary: '69-day path needs BTC stability and a new compute-hour print. A risk-off tape still favors unlocks over narrative. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.717714, change24h: -3.18, marketCap: 214.12e6, volume24h: 9.59e6, rank: 179 },
    news: [
      { date: 'Oct 9, 2026', title: 'AKT near $0.718', text: 'Akash traded near $0.718, down about 3.2% on the day, with market cap near $214M and volume about $9.6M. Rank 179.' },
      { date: 'Oct 9, 2026', title: 'No new lease print', text: 'No fresh Akash lease or revenue headline in this pass. The day looks like mid-cap compute beta after the BTC wick under $81k.' },
      { date: 'Oct 9, 2026', title: 'Range vs Oct 7', text: 'Price is little changed from the Oct 7 snapshot near $0.704. Volume is lighter than RENDER. Not financial advice.' }
    ],
    prediction: { base: '$0.50 - $0.95', bull: '$1.00 - $1.30', bear: '$0.32 - $0.50', summary: 'AKT is still sector beta. A 69-day hold needs BTC stable and a lease-spend print to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.89, change24h: -5.03, marketCap: 981.6e6, volume24h: 93.4e6, rank: 80 },
    news: [
      { date: 'Oct 9, 2026', title: 'RENDER near $1.89', text: 'RENDER traded at $1.89, down about 5.0%, with about $982M market cap and the deepest compute-set volume at ~$93M. Rank 80.' },
      { date: 'Oct 9, 2026', title: 'Week still cited green', text: 'A CoinMarketCap gaming board put RENDER, the largest name there near $1.03B, up about 4.3% over seven days even after today\u2019s drop.' },
      { date: 'Oct 9, 2026', title: 'No new job-spend print', text: 'No fresh Render burn or USD job-spend headline in this pass. It still trades as the liquid AI-GPU beta. Not financial advice.' }
    ],
    prediction: { base: '$1.40 - $2.40', bull: '$2.50 - $3.20', bear: '$0.95 - $1.40', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range under $2.40 if BTC stabilizes. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
