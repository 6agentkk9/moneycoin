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
    snapshot: { price: 0.0982, change24h: -1.31, marketCap: 15.3e9, volume24h: 1.55e9, rank: 12 },
    news: [
      { date: 'Sep 25, 2026', title: 'DOGE consolidates near $0.10', text: 'Dogecoin traded sideways after the prior weekly bounce as leverage cooled and attention rotated back to majors.' },
      { date: 'Sep 23, 2026', title: 'DOGE reclaims $0.10 level', text: 'Dogecoin held near $0.10 after a ~25% weekly advance, with derivatives OI above $1.6B and renewed ETF inflow attention.' },
      { date: 'Sep 22, 2026', title: 'DOGE leads major rebound', text: 'DOGE surged over 15% to the highest level since June as short liquidations and meme rotation lifted the tape.' }
    ],
    prediction: { base: '$0.08 - $0.13', bull: '$0.14 - $0.22', bear: '$0.055 - $0.08', summary: 'DOGE remains high-beta to BTC. 69-day path hinges on whether the $0.09–$0.10 zone holds. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2685, change24h: -1.39, marketCap: 328e9, volume24h: 15.8e9, rank: 2 },
    news: [
      { date: 'Sep 25, 2026', title: 'ETH consolidates under $2.7k', text: 'Ethereum eased with the broader tape while still tracking Bitcoin leadership into late September.' },
      { date: 'Sep 23, 2026', title: 'ETH consolidates near $2.7k', text: 'Ethereum cooled slightly after the prior risk-on push while BTC held the mid-$85k area.' },
      { date: 'Sep 22, 2026', title: 'ETH joins major rebound', text: 'ETH advanced with the broad tape as short covering and ETF flow chatter supported higher levels.' }
    ],
    prediction: { base: '$2,400 - $3,200', bull: '$3,400 - $4,200', bear: '$1,900 - $2,400', summary: 'ETF flows and BTC set the ceiling. 69-day rebound still needs sustained risk appetite. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 84250, change24h: -1.42, marketCap: 1.69e12, volume24h: 38.5e9, rank: 1 },
    news: [
      { date: 'Sep 25, 2026', title: 'BTC digests $85k zone', text: 'Bitcoin pulled back modestly after the multi-day advance, with traders watching whether $82–84k holds as support.' },
      { date: 'Sep 23, 2026', title: 'BTC holds above $85k', text: 'Bitcoin consolidated near $85.5k after the multi-day advance and large short-liquidation wave.' },
      { date: 'Sep 22, 2026', title: 'BTC steady post-squeeze', text: 'Forced covering of shorts fueled the move; further upside now depends more on spot demand than liquidations.' }
    ],
    prediction: { base: '$78,000 - $95,000', bull: '$100,000 - $120,000', bear: '$65,000 - $78,000', summary: 'Post-squeeze liquidity improved. Base case remains a higher range over 69 days if ETF demand holds. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.157, change24h: 6.1, marketCap: 62.2e6, volume24h: 30.2e6, rank: 410 },
    news: [
      { date: 'Sep 25, 2026', title: 'IO leads AI compute rotation', text: 'io.net rose ~6% on sector rotation into decentralized AI infrastructure with no single coin-specific catalyst.' },
      { date: 'Sep 23, 2026', title: 'IO tracks compute rebound', text: 'io.net advanced with the DePIN group as majors stabilized above key levels.' },
      { date: 'Sep 21, 2026', title: 'Distributed GPU narrative', text: 'IO continues to trade as open GPU supply beta for AI inference workloads.' }
    ],
    prediction: { base: '$0.10 - $0.25', bull: '$0.30 - $0.50', bear: '$0.06 - $0.10', summary: 'IO needs BTC calm plus visible inference demand. Unlocks can still dominate a 69-day window. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.68, change24h: -7.4, marketCap: 201.5e6, volume24h: 12.1e6, rank: 195 },
    news: [
      { date: 'Sep 25, 2026', title: 'AKT consolidates with peers', text: 'Akash tracked the broader compute group lower after the prior risk-on leg; lease demand remains the key metric.' },
      { date: 'Sep 23, 2026', title: 'AKT leads DePIN move', text: 'Akash rose with the AI-compute tape; price remains sector-beta rather than single-headline driven.' },
      { date: 'Sep 21, 2026', title: 'BME lease demand watched', text: 'Burn-mint economics stay live; net supply tightens only if GPU/CPU lease spend remains elevated.' }
    ],
    prediction: { base: '$0.45 - $0.95', bull: '$1.00 - $1.50', bear: '$0.30 - $0.45', summary: 'AKT is sector beta. A 69-day bounce needs BTC stability and visible lease demand. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.85, change24h: 3.4, marketCap: 959e6, volume24h: 65e6, rank: 68 },
    news: [
      { date: 'Sep 25, 2026', title: 'RENDER holds post-surge levels', text: 'Render Network stayed firm after the mid-September AI-token rally; GPU job demand remains the narrative focus.' },
      { date: 'Sep 23, 2026', title: 'RENDER consolidates after run', text: 'Render cooled after leading the compute group during the BTC-driven risk-on leg.' },
      { date: 'Sep 21, 2026', title: 'RENDER surges with AI tokens', text: 'RENDER climbed ~19% to ~$1.83 on AI sector momentum and institutional fund weighting.' }
    ],
    prediction: { base: '$1.30 - $2.40', bull: '$2.50 - $3.80', bear: '$0.90 - $1.30', summary: 'RENDER should keep leading the compute group on liquidity. Base case is a higher range if AI-job demand and BTC both hold. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
