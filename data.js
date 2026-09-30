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
    snapshot: { price: 0.0956, change24h: 1.23, marketCap: 14.91e9, volume24h: 1.12e9, rank: 12 },
    news: [
      { date: 'Sep 30, 2026', title: 'Musk/Delta chatter keeps DOGE on alert', text: 'Traders watched Musk comments on Delta/Starlink as DOGE held near $0.095 after a volatile week around $0.09–0.10.' },
      { date: 'Sep 29, 2026', title: 'DOGE in 2026 accumulation zone', text: 'Technical notes flagged a monthly accumulation zone near $0.10 with RSI mid-range after repeated tests of $0.092 support.' },
      { date: 'Sep 28, 2026', title: 'ETF inflows vs Bitwise wind-down', text: 'Record ~$2.89M weekly DOGE ETF inflows contrasted with Bitwise plans to close its DOGE ETF around Oct 14.' }
    ],
    prediction: { base: '$0.07 - $0.12', bull: '$0.13 - $0.20', bear: '$0.05 - $0.07', summary: 'DOGE remains high-beta to BTC and social flow. 69-day path hinges on $0.09 support and whether ETF demand outlasts supply. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://dogecoin.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/dogecoin' }, { name: 'Explorer', url: 'https://dogechain.info/' }]
  },
  ethereum: {
    id: 'ethereum', name: 'Ethereum', symbol: 'ETH', tab: 'ETH',
    snapshot: { price: 2693, change24h: 0.30, marketCap: 328.6e9, volume24h: 13.2e9, rank: 2 },
    news: [
      { date: 'Sep 30, 2026', title: 'Lubin talks Korea partnerships', text: 'Joseph Lubin said Consensys is in talks with Korean financial institutions at KBW 2026 as ETH held near $2.69k.' },
      { date: 'Sep 29, 2026', title: 'Hayes $10k target; ETF streak ends', text: 'Arthur Hayes reiterated a year-end $10k ETH call as spot ETH ETFs posted a ~$2.8M net outflow, ending a seven-day inflow streak.' },
      { date: 'Sep 28, 2026', title: 'ETH holds with majors on yields', text: 'Ethereum stayed firm with BTC/XRP/DOGE as Treasury yields hit multi-decade highs and risk assets digested the move.' }
    ],
    prediction: { base: '$2,300 - $3,100', bull: '$3,300 - $4,000', bear: '$1,900 - $2,300', summary: 'ETF flow persistence and BTC direction still set the 69-day range. Partnership headlines are secondary to liquidity. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://ethereum.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/ethereum' }, { name: 'Explorer', url: 'https://etherscan.io/' }]
  },
  bitcoin: {
    id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', tab: 'BTC',
    snapshot: { price: 83755, change24h: 0.46, marketCap: 1.682e12, volume24h: 32.4e9, rank: 1 },
    news: [
      { date: 'Sep 30, 2026', title: 'Bulls defend $82k after $87.4k peak', text: 'BTC pulled back from an eight-month high above $87,400 on Sep 21; $82k–$83k is the line traders say decides the next leg.' },
      { date: 'Sep 29, 2026', title: '2011-era wallet moves 20.43 BTC', text: 'A wallet dormant since 2011 transferred 20.43 BTC (~$1.7M), a small but watched on-chain print during the pullback.' },
      { date: 'Sep 28, 2026', title: 'Yields spike; majors hold firm', text: 'Bitcoin, ETH, XRP and DOGE held through a 24-year high in Treasury yields after midweek slides flagged as dip-buying by some desks.' }
    ],
    prediction: { base: '$75,000 - $92,000', bull: '$95,000 - $115,000', bear: '$65,000 - $75,000', summary: '69-day base case stays a higher range if $82k holds and ETF demand returns. Yields remain the main cap. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://bitcoin.org/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/bitcoin' }, { name: 'Explorer', url: 'https://mempool.space/' }]
  },
  io: {
    id: 'io', name: 'io.net', symbol: 'IO', tab: 'IO',
    snapshot: { price: 0.1598, change24h: -1.05, marketCap: 63.5e6, volume24h: 12.1e6, rank: 412 },
    news: [
      { date: 'Sep 30, 2026', title: 'IO quiet vs AI rotation', text: 'io.net stayed muted while TAO/RENDER saw more of the late-September decentralized-AI tape; no major IO-specific catalyst.' },
      { date: 'Sep 28, 2026', title: 'Compute tokens digest risk-off', text: 'Smaller DePIN names including IO tracked the prior week’s yield-driven risk-off more than protocol headlines.' },
      { date: 'Sep 26, 2026', title: 'GPU-supply beta intact', text: 'IO continues to trade as open GPU supply for inference; unlocks and BTC beta still dominate short-term price.' }
    ],
    prediction: { base: '$0.10 - $0.24', bull: '$0.28 - $0.45', bear: '$0.06 - $0.10', summary: 'IO needs BTC stability and visible inference demand. Unlocks can still dominate a 69-day window. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://io.net/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/io' }, { name: 'Solana', url: 'https://solscan.io/token/BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K' }]
  },
  'akash-network': {
    id: 'akash-network', name: 'Akash Network', symbol: 'AKT', tab: 'AKT',
    snapshot: { price: 0.655, change24h: -1.06, marketCap: 195.4e6, volume24h: 6.9e6, rank: 196 },
    news: [
      { date: 'Sep 30, 2026', title: 'AKT follows compute tape', text: 'Akash stayed soft with peers as capital rotated toward more liquid AI names; lease demand remains the fundamental tell.' },
      { date: 'Sep 28, 2026', title: 'Yields weigh on DePIN beta', text: 'Higher Treasury yields and alt risk-off kept AKT in the same bucket as other mid-cap compute tokens.' },
      { date: 'Sep 26, 2026', title: 'BME still the supply story', text: 'Burn-mint economics ease net supply only if sustained GPU/CPU lease spend shows up on-chain.' }
    ],
    prediction: { base: '$0.45 - $0.90', bull: '$0.95 - $1.40', bear: '$0.30 - $0.45', summary: 'AKT is sector beta. A 69-day bounce needs BTC stability and visible lease demand. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://akash.network/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/akash-network' }, { name: 'Docs', url: 'https://akash.network/docs/' }]
  },
  'render-token': {
    id: 'render-token', name: 'Render', symbol: 'RENDER', tab: 'RENDER',
    snapshot: { price: 1.98, change24h: 1.02, marketCap: 1.028e9, volume24h: 88.4e6, rank: 64 },
    news: [
      { date: 'Sep 30, 2026', title: 'RENDER in AI-token rotation', text: 'RENDER kept relative liquidity as TAO/FET/NEAR/RENDER were cited in the late-September decentralized-AI bounce.' },
      { date: 'Sep 28, 2026', title: 'Pullback after mid-month run', text: 'Price digested the mid-September GPU-narrative rally alongside other AI names as yields rose.' },
      { date: 'Sep 22, 2026', title: 'AI infra narrative lifts GPU names', text: 'Coverage of large AI data-center buildouts again grouped RENDER with TAO/FET/NEAR as compute beta.' }
    ],
    prediction: { base: '$1.40 - $2.50', bull: '$2.60 - $3.80', bear: '$0.95 - $1.40', summary: 'RENDER should keep leading the compute group on liquidity. Base case is a higher range if AI-job demand and BTC both hold. Not financial advice.' },
    links: [{ name: 'Official', url: 'https://rendernetwork.com/' }, { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/render' }, { name: 'Docs', url: 'https://know.rendernetwork.com/' }]
  }
};
let currentGroup = 'coin';
let currentCoin = 'dogecoin';
