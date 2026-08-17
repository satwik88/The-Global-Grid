import { NextResponse } from 'next/server';
import { getCryptoPrices } from '@/lib/crypto';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const idsStr = searchParams.get('ids');
  const ids = idsStr ? idsStr.split(',') : undefined;

  const data = await getCryptoPrices(ids);

  if (!data || data.length === 0) {
    return NextResponse.json({ error: 'Failed to fetch crypto data' }, { status: 500 });
  }

  return NextResponse.json({ data });
}
