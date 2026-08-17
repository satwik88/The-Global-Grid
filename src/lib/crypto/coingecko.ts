import { normalizeCoinGecko } from './normalize';
import { NormalizedCoin } from './types';

export async function fetchCryptoPrices(
  ids: string[] = ['bitcoin', 'ethereum', 'tether', 'solana', 'binancecoin']
): Promise<NormalizedCoin[]> {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids.join(',')}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CoinGecko failed: ${res.status}`);
  const data = await res.json();
  return data.map((coin: any) => normalizeCoinGecko(coin));
}
