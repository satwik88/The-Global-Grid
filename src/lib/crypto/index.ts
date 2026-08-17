import { fetchCryptoPrices } from './coingecko';
import { NormalizedCoin } from './types';

export async function getCryptoPrices(
  ids?: string[]
): Promise<NormalizedCoin[]> {
  try {
    return await fetchCryptoPrices(ids);
  } catch (err) {
    console.warn('Crypto fetch failed:', err);
    return [];
  }
}
