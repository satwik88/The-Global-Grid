// eslint-disable-next-line @typescript-eslint/no-require-imports
const https = require('https');

const url = `https://query1.finance.yahoo.com/v8/finance/chart/^GSPC`;

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      console.log(parsed.quoteResponse.result.map(q => ({
        symbol: q.symbol,
        price: q.regularMarketPrice,
        change: q.regularMarketChangePercent
      })));
    } catch (e) {
      console.error(e, data);
    }
  });
});
