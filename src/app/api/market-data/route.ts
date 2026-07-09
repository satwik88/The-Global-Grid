import { NextResponse } from 'next/server';

const tickers = ['^GSPC', '^FTSE', '^N225', '^GDAXI', '^HSI', 'GC=F', '^NSEI', '^BSESN', 'USDINR=X'];

export async function GET() {
  try {
    const results = await Promise.all(tickers.map(async (ticker) => {
      try {
        const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`, {
          next: { revalidate: 300 }, 
          headers: {
            'User-Agent': 'Mozilla/5.0'
          }
        });
        if (!res.ok) return null;

        const data = await res.json();
        const result = data.chart?.result?.[0];
        if (!result) return null;

        const meta = result.meta;
        const price = meta.regularMarketPrice;
        const prevClose = meta.chartPreviousClose || meta.previousClose;
        const change = price - prevClose;
        const changePercent = (change / prevClose) * 100;

        return {
          symbol: ticker,
          price,
          changePercent
        };
      } catch (e) {
        console.error(`Failed to fetch ${ticker}`, e);
        return null;
      }
    }));

    return NextResponse.json({ data: results.filter(Boolean) });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch market data' }, { status: 500 });
  }
}
