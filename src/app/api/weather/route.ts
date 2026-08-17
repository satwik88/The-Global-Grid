import { NextResponse } from 'next/server';
import { getWeather } from '@/lib/weather';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'Katihar';
  
  // Also parse lat/lon if provided
  const latStr = searchParams.get('lat');
  const lonStr = searchParams.get('lon');
  const lat = latStr ? parseFloat(latStr) : undefined;
  const lon = lonStr ? parseFloat(lonStr) : undefined;

  const data = await getWeather(city, lat, lon);

  if (!data) {
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
  }

  return NextResponse.json(data);
}
