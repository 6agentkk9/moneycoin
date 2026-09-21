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
    snapshot: { price: 0.09372, change24h: 5.5, marketCap: 14.2e9, volume24h: 1.3e9, rank: 12 },
    news: [
      { date: 'Sep 21, 2026', title: 'DOGE rides BTC to $85k rally', text: 'Dogecoin advanced with majors as Bitcoin hit multi-month highs and short liquidations accelerated the risk-on move.' },
      { date: 'Sep 20, 2026', title: 'Altcoin rotation lifts memes', text: 'DOGE participated in the broader altcoin rebound after the post-Fed digests and clarity-act volatility faded.' },
      { date: 'Sep 18, 2026', title: 'Range holds above $0.08', text: 'Earlier in the week DOGE defended the $0.08 zone while the market absorbed the rate hike and legislative headlines.' }
    ],
    prediction: { base: '$0.075 - $0.12', bull: '$0.13 - $0.20', bear: '$0.055 - $0.075', summary: 'DOGE remains BTC-beta. 69-day path still hinges on liquidity and whether $0.09 holds. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2727.38, change24h: 3.2, marketCap: 329e9, volume24h: 20e9, rank: 2 },
    news: [
      { date: 'Sep 21, 2026', title: 'ETH clears $2,700 on broad rally', text: 'Ethereum followed Bitcoin higher as ETF demand and short covering supported the move above $2,700.' },
      { date: 'Sep 20, 2026', title: 'Altcoin season chatter returns', text: 'ETH outperformed some large caps in the weekend recovery after the prior week’s rate-hike and bill volatility.' },
      { date: 'Sep 18, 2026', title: 'Post-hike stabilization', text: 'ETH held mid-$2,400s earlier then extended with the tape once the Fed move was digested.' }
    ],
    prediction: { base: '$2,300 - $3,100', bull: '$3,400 - $4,000', bear: '$1,900 - $2,300', summary: 'ETF flows and BTC leadership still set the near-term ceiling. 69-day rebound needs sustained risk appetite. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 85170, change24h: 4.5, marketCap: 1.69e12, volume24h: 25e9, rank: 1 },
    news: [
      { date: 'Sep 21, 2026', title: 'BTC hits $85k, shorts liquidated', text: 'Bitcoin surged above $85,000 for the first time since January amid heavy short liquidations and improved risk sentiment.' },
      { date: 'Sep 20, 2026', title: 'Reclaim of $80k+ levels', text: 'BTC extended the recovery from the post-Fed dip, with analysts watching the $80k–$85k zone as key resistance-turned-support.' },
      { date: 'Sep 18, 2026', title: 'Rate hike absorbed', text: 'The 25 bp Fed hike was digested; BTC later climbed as legislative noise faded and liquidity returned.' }
    ],
    prediction: { base: '$75,000 - $95,000', bull: '$100,000 - $120,000', bear: '$65,000 - $75,000', summary: 'Policy week digested and liquidity improving. Base case is a higher range over the next 69 days if ETF demand holds. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.150, change24h: 10.0, marketCap: 60e6, volume24h: 30e6, rank: 400 },
    news: [
      { date: 'Sep 21, 2026', title: 'IO +~10% with compute beta', text: 'io.net tracked the AI-compute rebound as majors rallied; market-cap comps remain in the $50–60M range.' },
      { date: 'Sep 18, 2026', title: 'Distributed GPU narrative', text: 'io.net continues to position as open distributed GPU supply for AI inference workloads.' },
      { date: 'Sep 15, 2026', title: 'Sector rotation continues', text: 'Compute tokens participated in the broader risk-on move after the mid-September volatility.' }
    ],
    prediction: { base: '$0.10 - $0.25', bull: '$0.30 - $0.50', bear: '$0.06 - $0.10', summary: 'IO needs BTC calm plus visible inference demand. Unlocks can still dominate a 69-day window. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.63, change24h: 8.0, marketCap: 185e6, volume24h: 8e6, rank: 180 },
    news: [
      { date: 'Sep 21, 2026', title: 'AKT rises with DePIN tape', text: 'Akash followed the AI-compute rebound; price remains sector-beta rather than single-headline driven.' },
      { date: 'Sep 18, 2026', title: 'BME lease demand watched', text: 'Burn-mint economics stay live; net supply tightens only if GPU/CPU lease spend remains elevated.' },
      { date: 'Sep 17, 2026', title: 'Compute peer comparison', text: 'Render vs Akash vs io.net narratives continue to frame the DePIN/compute group.' }
    ],
    prediction: { base: '$0.40 - $0.85', bull: '$0.95 - $1.40', bear: '$0.25 - $0.40', summary: 'AKT is sector beta. A 69-day bounce needs BTC stability and visible lease demand. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.78, change24h: 9.5, marketCap: 920e6, volume24h: 70e6, rank: 70 },
    news: [
      { date: 'Sep 21, 2026', title: 'RENDER leads compute on rally', text: 'Render remained the liquid compute name and outperformed as Bitcoin cleared $85k and risk appetite returned.' },
      { date: 'Sep 18, 2026', title: 'Node bonus window near', text: 'Traders continue to watch the early-October node-operator bonus claims as a short-term sentiment driver.' },
      { date: 'Sep 15, 2026', title: 'Platform project highlights', text: 'Render Network highlighted recent high-resolution and game titles rendered on its platform.' }
    ],
    prediction: { base: '$1.20 - $2.30', bull: '$2.50 - $3.80', bear: '$0.85 - $1.20', summary: 'RENDER should keep leading the compute group on liquidity. Base case is a higher range if AI-job demand and BTC both hold. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
