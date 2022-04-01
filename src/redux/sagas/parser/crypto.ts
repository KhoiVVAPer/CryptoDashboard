import {AxiosResponse} from 'axios';
import {ICrypto} from 'src/interfaces/ICrypto';

export const cryptoParser = (responses: AxiosResponse): ICrypto[] => {
  return responses.data.map((item: ICrypto) => ({
    symbol: item.symbol,
    priceChange: item.priceChange,
    priceChangePercent: item.priceChangePercent,
    weightedAvgPrice: item.weightedAvgPrice,
    prevClosePrice: item.prevClosePrice,
    lastPrice: item.lastPrice,
    lastQty: item.lastQty,
    bidPrice: item.bidPrice,
    bidQty: item.bidQty,
    askPrice: item.askPrice,
    askQty: item.askQty,
    openPrice: item.openPrice,
    highPrice: item.highPrice,
    lowPrice: item.lowPrice,
    volume: item.volume,
    quoteVolume: item.quoteVolume,
    openTime: item.openTime,
    closeTime: item.closeTime,
    firstId: item.firstId,
    lastId: item.lastId,
    count: item.count,
  }));
};
