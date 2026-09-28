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
    snapshot: { price: 0.0944, change24h: -3.86, marketCap: 14.73e9, volume24h: 1.06e9, rank: 12 },
    news: [
      { date: 'Sep 28, 2026', title: 'Whales add $112M DOGE', text: 'Large wallets accumulated over 1.14B DOGE (~$112M) in 96 hours while price stalled near $0.09–0.10 resistance.' },
      { date: 'Sep 27, 2026', title: 'DOGE ETFs hit record inflows', text: 'US spot Dogecoin ETFs posted record weekly net inflows of ~$2.89M, led by Grayscale, even as price cooled.' },
      { date: 'Sep 26, 2026', title: 'DOGE tests $0.10 again', text: 'Dogecoin retested the $0.10 zone amid renewed Musk-related social attention and broader market volatility.' }
    ],
    prediction: { base: '$0.07 - $0.12', bull: '$0.13 - $0.20', bear: '$0.05 - $0.07', summary: 'DOGE stays high-beta to BTC. 69-day path depends on holding the $0.09 zone and ETF flow persistence. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2685, change24h: -1.09, marketCap: 327.8e9, volume24h: 13.6e9, rank: 2 },
    news: [
      { date: 'Sep 28, 2026', title: 'ETH holds near $2.68k', text: 'Ethereum tracked Bitcoin lower into the new week as Treasury yields and risk-off flows capped upside.' },
      { date: 'Sep 26, 2026', title: 'ETH consolidates under $2.7k', text: 'Price action remained rangebound while traders watched ETF flows and broader macro data.' },
      { date: 'Sep 24, 2026', title: 'ETH slides with majors', text: 'Ethereum declined alongside BTC as rate-hike odds and elevated yields pressured crypto risk assets.' }
    ],
    prediction: { base: '$2,300 - $3,100', bull: '$3,300 - $4,000', bear: '$1,900 - $2,300', summary: 'ETF flows and BTC direction remain the main drivers. 69-day rebound needs sustained risk-on. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 83369, change24h: -1.90, marketCap: 1.675e12, volume24h: 33.8e9, rank: 1 },
    news: [
      { date: 'Sep 28, 2026', title: 'BTC slips toward $83k', text: 'Bitcoin fell ~1.7–2% as Treasury yields surged and weekend risk-off extended into Monday trading.' },
      { date: 'Sep 27, 2026', title: 'Bitget hack weighs on sentiment', text: 'Exchange reported ~$387.5M unauthorized transfers; withdrawals phased restart planned while markets digested the news.' },
      { date: 'Sep 25, 2026', title: 'BTC ETFs see strong weekly inflows', text: 'US spot Bitcoin ETFs drew ~$2.4B for the week ending Sep 25, the strongest weekly total since late 2025.' }
    ],
    prediction: { base: '$75,000 - $92,000', bull: '$95,000 - $115,000', bear: '$65,000 - $75,000', summary: 'ETF demand remains supportive but yields and risk events cap near-term upside. 69-day base case is a higher range if inflows hold. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1615, change24h: -5.43, marketCap: 64.2e6, volume24h: 13.3e6, rank: 410 },
    news: [
      { date: 'Sep 28, 2026', title: 'IO tracks compute weakness', text: 'io.net declined with the broader AI-compute group as risk-off pressure hit smaller DePIN tokens.' },
      { date: 'Sep 26, 2026', title: 'IO consolidates post-rotation', text: 'Price action cooled after the prior sector bounce; no major protocol-specific headline this week.' },
      { date: 'Sep 24, 2026', title: 'Distributed GPU narrative intact', text: 'IO continues to trade as open GPU supply beta for AI inference despite short-term volatility.' }
    ],
    prediction: { base: '$0.10 - $0.24', bull: '$0.28 - $0.45', bear: '$0.06 - $0.10', summary: 'IO needs BTC stability plus visible inference demand. Unlocks can still dominate a 69-day window. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.662, change24h: -5.95, marketCap: 197.5e6, volume24h: 7.5e6, rank: 195 },
    news: [
      { date: 'Sep 28, 2026', title: 'AKT soft with compute peers', text: 'Akash declined alongside the DePIN group as broader risk-off and higher yields weighed on altcoins.' },
      { date: 'Sep 26, 2026', title: 'AKT consolidates sector move', text: 'Lease demand remains the key fundamental metric while price stays high-beta to the AI-compute tape.' },
      { date: 'Sep 24, 2026', title: 'BME economics watched', text: 'Burn-mint model continues; net supply pressure eases only if sustained GPU/CPU lease spend materializes.' }
    ],
    prediction: { base: '$0.45 - $0.90', bull: '$0.95 - $1.40', bear: '$0.30 - $0.45', summary: 'AKT is sector beta. A 69-day bounce needs BTC stability and visible lease demand. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.96, change24h: -4.46, marketCap: 1.017e9, volume24h: 97.1e6, rank: 65 },
    news: [
      { date: 'Sep 28, 2026', title: 'RENDER pulls back with AI tokens', text: 'Render declined ~4–5% as the broader AI-compute basket cooled after the mid-September run.' },
      { date: 'Sep 26, 2026', title: 'RENDER holds relative strength', text: 'Despite the pullback, RENDER remains one of the more liquid names in the decentralized GPU narrative.' },
      { date: 'Sep 23, 2026', title: 'GPU job demand in focus', text: 'Network continues to be watched for sustained rendering and AI inference workload growth.' }
    ],
    prediction: { base: '$1.40 - $2.50', bull: '$2.60 - $3.80', bear: '$0.95 - $1.40', summary: 'RENDER should keep leading the compute group on liquidity. Base case is a higher range if AI-job demand and BTC both hold. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
