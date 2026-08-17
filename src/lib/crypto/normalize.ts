import { NormalizedCoin } from './types';

export function normalizeCoinGecko(coin: any): NormalizedCoin {
  return {
    id: coin.id,
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    priceUsd: coin.current_price,
    change24h: coin.price_change_percentage_24h ?? 0,
    marketCap: coin.market_cap,
    image: coin.image,
  };
}
