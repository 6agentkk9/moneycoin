const GROUPS = {
  coin: { label: 'Coin', coins: ['dogecoin', 'ethereum', 'bitcoin'] },
  compute: { label: 'Compute Coin', coins: ['io', 'akash-network', 'render-token'] }
};

const COINS = {
  dogecoin: {
    id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', tab: 'DOGE',
    snapshot: { price: 0.0875, change24h: -2.1, marketCap: 13.6e9, volume24h: 980e6, rank: 10 },
    news: [
      { date: 'Aug 25, 2026', title: 'Key support in focus', text: 'Analysts watching $0.081-$0.087 zone. Holding it could open a path toward $0.10.' },
      { date: 'Aug 24-25, 2026', title: 'ETF inflows return', text: 'Spot Dogecoin ETFs recorded positive net inflows after a multi-week dry spell.' },
      { date: 'Aug 2026', title: 'CleanCore exits DOGE', text: 'CleanCore Solutions sold ~463M DOGE (~$33.4M) to fund an AI infrastructure pivot.' },
      { date: 'Recent weeks', title: '~30% weekly rally', text: 'DOGE bounced strongly alongside broader crypto strength.' }
    ],
    prediction: { base: '$0.075 - $0.12', bull: '$0.13 - $0.18+', bear: '$0.055 - $0.075', summary: 'Near-term bias is cautiously constructive while support holds. CleanCore sale keeps pullback risk elevated. 69 days is long enough for a full meme cycle.' },
    links: [
      { name: 'Official', url: 'https://dogecoin.com/' },
      { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' },
      { name: 'Explorer', url: 'https://dogechain.info/' }
    ]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2650, change24h: 1.4, marketCap: 320e9, volume24h: 18e9, rank: 2 },
    news: [
      { date: 'Aug 2026', title: 'ETH holds key levels', text: 'Ethereum consolidating after recent volatility. Staking yields and L2 activity remain supportive.' },
      { date: 'Recent weeks', title: 'Layer-2 growth continues', text: 'Arbitrum, Base and Optimism continue to see strong usage and fee generation.' },
      { date: '2026', title: 'Institutional interest', text: 'Spot ETH ETFs and corporate treasury discussions keep the medium-term narrative constructive.' },
      { date: 'Ongoing', title: 'Upgrade roadmap', text: 'Focus remains on scaling, blob data and further efficiency improvements.' }
    ],
    prediction: { base: '$2,200 - $3,200', bull: '$3,500 - $4,500+', bear: '$1,800 - $2,200', summary: 'Base case is range-bound to modestly higher if BTC remains stable. Stronger upside requires sustained risk-on and clear ETF/institutional flows.' },
    links: [
      { name: 'Official', url: 'https://ethereum.org/' },
      { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' },
      { name: 'Explorer', url: 'https://etherscan.io/' }
    ]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 64500, change24h: 0.8, marketCap: 1280e9, volume24h: 32e9, rank: 1 },
    news: [
      { date: 'Aug 2026', title: 'BTC consolidating', text: 'Bitcoin trading in a broad range. Market watching macro data and ETF flow trends.' },
      { date: 'Recent weeks', title: 'ETF flows mixed', text: 'Spot Bitcoin ETF flows have been choppy - a key near-term driver for price direction.' },
      { date: '2026', title: 'Halving cycle context', text: 'Post-halving dynamics still in focus for medium-term positioning.' },
      { date: 'Ongoing', title: 'Macro sensitivity', text: 'Rates, dollar strength and risk appetite remain primary external drivers.' }
    ],
    prediction: { base: '$55,000 - $75,000', bull: '$80,000 - $100,000+', bear: '$45,000 - $55,000', summary: 'Base case is continued range with upside bias if ETF demand returns and macro stays supportive. 69 days can produce large swings either way.' },
    links: [
      { name: 'Official', url: 'https://bitcoin.org/' },
      { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' },
      { name: 'Explorer', url: 'https://mempool.space/' }
    ]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.133, change24h: 3.9, marketCap: 52.4e6, volume24h: 7.9e6, rank: 480 },
    news: [
      { date: 'Aug 28, 2026', title: 'GLM-5.3 launch partner', text: 'io.net joined Z.ai as a Day-0 partner for GLM-5.3, tying the network to a new coding and agentic-work model.' },
      { date: 'Jun 11, 2026', title: 'IDE tokenomics live', text: 'Incentive Dynamic Engine launched. Burns are tied to real network revenue; project targets ~12M IO burned in year one.' },
      { date: '2026', title: '$8M enterprise contract', text: 'io.net cited an $8M enterprise deal (~$650K/month network earnings) and high inference throughput on OpenRouter.' },
      { date: 'Ongoing', title: 'Unlock risk remains', text: 'Scheduled investor/team unlocks can add sell pressure even if usage grows. Watch sustainability ratio vs emissions.' }
    ],
    prediction: { base: '$0.10 - $0.22', bull: '$0.28 - $0.45+', bear: '$0.06 - $0.10', summary: 'IO is a high-beta compute token. Usage-linked burns are constructive if enterprise demand holds, but unlocks and thin liquidity can cap rallies over the next 69 days.' },
    links: [
      { name: 'Official', url: 'https://io.net/' },
      { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' },
      { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }
    ]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.522, change24h: 5.3, marketCap: 155e6, volume24h: 4.2e6, rank: 205 },
    news: [
      { date: 'Sep 1-2, 2026', title: 'AKT rally on AI compute demand', text: 'AKT jumped sharply toward ~$0.53 as decentralized AI infrastructure tokens attracted renewed flows.' },
      { date: 'Jun 11, 2026', title: 'Mainnet 18 live', text: 'Upgrade added Oracle v2 price feeds and resource-reclamation rules for unpaid leases.' },
      { date: 'Mar-Jun 2026', title: 'BME burn model', text: 'Burn-and-mint equilibrium aims to link AKT supply more tightly to real compute usage.' },
      { date: '2026', title: 'Marketplace vs peers', text: 'Akash remains a general-purpose cloud marketplace (CPU/GPU/storage), competing with Render and io.net for AI buyers.' }
    ],
    prediction: { base: '$0.40 - $0.75', bull: '$0.90 - $1.20+', bear: '$0.25 - $0.40', summary: 'AKT can re-rate if GPU lease demand stays visible, but provider-base depth and chain-roadmap uncertainty keep the 69-day path volatile.' },
    links: [
      { name: 'Official', url: 'https://akash.network/' },
      { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' },
      { name: 'Docs', url: 'https://akash.network/docs/' }
    ]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.47, change24h: 4.4, marketCap: 761e6, volume24h: 35.6e6, rank: 86 },
    news: [
      { date: 'Aug 2026', title: 'Grayscale AI Fund weight', text: 'Grayscale AI Fund rebalance listed Render among larger holdings (~21.6% weight in early August commentary).' },
      { date: 'Q2 2026', title: 'GPU demand > supply', text: 'Network commentary said GPU demand outstripped available supply for the first time in years; AI workloads now a large share of activity.' },
      { date: 'Apr 2026', title: 'Salad subnet (RNP-023)', text: 'Governance approved folding Salad Network in as a subnet, expanding consumer-grade GPU capacity.' },
      { date: 'Ongoing', title: 'Render + AI pivot', text: 'Still the largest of the three compute names by market cap, spanning creative rendering and AI compute on Solana.' }
    ],
    prediction: { base: '$1.10 - $2.10', bull: '$2.40 - $3.50+', bear: '$0.75 - $1.10', summary: 'RENDER is the most liquid compute name here. Base case is choppy range unless AI-compute demand and fund flows stay strong.' },
    links: [
      { name: 'Official', url: 'https://rendernetwork.com/' },
      { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' },
      { name: 'Docs', url: 'https://know.rendernetwork.com/' }
    ]
  }
};

let currentGroup = 'coin';
let currentCoin = 'dogecoin';
