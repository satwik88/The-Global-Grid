import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker');

  if (!ticker) {
    return NextResponse.json({ error: 'Ticker is required' }, { status: 400 });
  }

  try {
    // Fetch 1 month of historical data with 1 day intervals
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?range=1mo&interval=1d`;
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from Yahoo Finance' }, { status: 500 });
    }

    const data = await res.json();
    const result = data.chart?.result?.[0];
    if (!result) {
      return NextResponse.json({ error: 'No data found' }, { status: 404 });
    }

    const timestamps = result.timestamp || [];
    const closePrices = result.indicators?.quote?.[0]?.close || [];
    
    // Some Yahoo data might have nulls in closePrices if trading was halted
    const chartData = timestamps
      .map((ts: number, i: number) => ({
        time: ts * 1000, // Convert to milliseconds
        price: closePrices[i]
      }))
      .filter((point: { time: number; price: number | null | undefined }) => point.price !== null && point.price !== undefined);

    const meta = result.meta;
    const currentPrice = meta.regularMarketPrice;
    const prevClose = meta.chartPreviousClose || meta.previousClose;
    const change = currentPrice - prevClose;
    const changePercent = (change / prevClose) * 100;

    return NextResponse.json({
      ticker,
      currency: meta.currency,
      currentPrice,
      change,
      changePercent,
      chartData
    });
  } catch (error) {
    console.error(`Failed to fetch currency data for ${ticker}`, error);
    return NextResponse.json({ error: 'Failed to fetch currency data' }, { status: 500 });
  }
}
