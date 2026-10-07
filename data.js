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
    snapshot: { price: 0.088884, change24h: -7.07, marketCap: 13.887e9, volume24h: 1.199e9, rank: 9 },
    news: [
      { date: 'Oct 7, 2026', title: 'DOGE near $0.089 on the risk-off tape', text: 'Dogecoin traded near $0.0889, down about 7.1% on the day, with roughly $1.20B in 24h volume as majors slipped under $84k.' },
      { date: 'Oct 7, 2026', title: 'Week also red', text: 'A live USD board showed DOGE near $0.0888, about 6% lower on the week, tracking meme beta rather than a new protocol print.' },
      { date: 'Oct 7, 2026', title: 'No fresh DOGE catalyst', text: 'No new mainnet, treasury, or listing headline in this pass. Standing DogeOS and perps context is unchanged. Not financial advice.' }
    ],
    prediction: { base: '$0.07 - $0.11', bull: '$0.12 - $0.16', bear: '$0.05 - $0.07', summary: '69-day path needs a reclaim of $0.09 and a clean $0.10 break. Tape is BTC beta after a risk-off open. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2577.51, change24h: -4.92, marketCap: 314.75e9, volume24h: 17.60e9, rank: 2 },
    news: [
      { date: 'Oct 7, 2026', title: 'ETH near $2,578', text: 'Ethereum traded near $2,578, down about 4.9% on the day, lagging Bitcoin as oil and the dollar firmed.' },
      { date: 'Oct 6, 2026', title: 'ETH ETFs lose $201.9M', text: 'US spot Ethereum ETFs posted a $201.9M net outflow on Oct 6, the largest in three weeks and a sixth straight down day, with BlackRock ETHA taking the exit.' },
      { date: 'Oct 6, 2026', title: 'Glamsterdam Sepolia was the next test', text: 'Sepolia activation was scheduled for Oct 6. That is a testnet step, not a mainnet price catalyst. Not financial advice.' }
    ],
    prediction: { base: '$2,250 - $3,050', bull: '$3,100 - $3,700', bear: '$1,900 - $2,250', summary: '69-day base case is a grind only if BTC reclaims $84k. ETF outflows and a testnet date are not a bid. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 83525, change24h: -3.10, marketCap: 1.679e12, volume24h: 36.48e9, rank: 1 },
    news: [
      { date: 'Oct 7, 2026', title: 'BTC slips below $84k', text: 'Bitcoin traded near $83,525, down about 3.1%, after reports it fell under $84,000 as Iranian tanker attacks lifted oil and the dollar. Liquidations were cited near $547M.' },
      { date: 'Oct 7, 2026', title: 'Robinhood adds $25M BTC', text: 'Robinhood was reported adding $25 million of bitcoin to its balance sheet on the same risk-off session.' },
      { date: 'Oct 7, 2026', title: 'Supply in profit still moderate', text: 'CryptoQuant analyst Darkfost put supply in profit near 60% excluding long-dormant coins, and longs absorbed about a $404M flush. Not a blow-off read. Not financial advice.' }
    ],
    prediction: { base: '$74,000 - $92,000', bull: '$94,000 - $108,000', bear: '$64,000 - $74,000', summary: '69-day base case needs $80k–$84k to hold. $90k remains a liquidation magnet, not a target. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.156678, change24h: -8.51, marketCap: 64.34e6, volume24h: 12.33e6, rank: 412 },
    news: [
      { date: 'Oct 7, 2026', title: 'IO near $0.157', text: 'io.net traded near $0.157, down about 8.5%, with market cap near $64M and 24h volume about $12M.' },
      { date: 'Oct 7, 2026', title: '34M+ compute hours cited', text: 'A daily roundup said io.net reported 34M+ compute hours delivered, up from 33M in July, arguing idle GPUs beat new AI data centers.' },
      { date: 'Oct 7, 2026', title: 'Still the thin GPU name', text: 'IO remains the smallest cap in the compute set. Unlocks and low liquidity can still dominate. Not financial advice.' }
    ],
    prediction: { base: '$0.10 - $0.22', bull: '$0.24 - $0.38', bear: '$0.05 - $0.10', summary: '69-day path needs BTC stability and visible inference spend. A risk-off tape still favors unlocks over narrative. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.704277, change24h: -6.96, marketCap: 210.20e6, volume24h: 6.60e6, rank: 196 },
    news: [
      { date: 'Oct 7, 2026', title: 'AKT back near $0.70', text: 'Akash traded near $0.704, down about 7.0% on the day, with market cap near $210M and volume about $6.6M.' },
      { date: 'Oct 7, 2026', title: 'Week still green on one board', text: 'A live USD board showed AKT up roughly 8% over seven days even after today’s drop, without a new protocol headline in this pass.' },
      { date: 'Oct 7, 2026', title: 'Lease spend still the tell', text: 'No fresh lease or revenue print found. Today’s move looks like mid-cap compute beta. Not financial advice.' }
    ],
    prediction: { base: '$0.50 - $0.95', bull: '$1.00 - $1.35', bear: '$0.32 - $0.50', summary: 'AKT is still sector beta after a strong week. A 69-day hold needs BTC stable and lease spend to confirm. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 2.01, change24h: -6.31, marketCap: 1.041e9, volume24h: 109.8e6, rank: 64 },
    news: [
      { date: 'Oct 7, 2026', title: 'RENDER holds $2.01', text: 'RENDER traded at $2.01, down about 6.3%, with about $1.04B market cap and the deepest compute-set volume at ~$110M.' },
      { date: 'Oct 7, 2026', title: 'No new job-spend print', text: 'This pass found no fresh Render burn or job-spend headline. It still trades as the liquid AI-GPU beta versus thinner DePIN names.' },
      { date: 'Oct 7, 2026', title: 'USD spend still unpublished', text: 'On-chain burns remain the visible metric. USD job-spend is still not published, so a revenue multiple cannot be set. Not financial advice.' }
    ],
    prediction: { base: '$1.45 - $2.50', bull: '$2.60 - $3.40', bear: '$1.00 - $1.45', summary: 'RENDER should keep leading the compute group on liquidity. 69-day base case is a range if BTC and AI demand stabilize. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
