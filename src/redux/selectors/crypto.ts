import {RootState} from '../configureStore';

export const getCryptoState = (state: RootState) => state.crypto;
export const getIsLoadingState = (state: RootState) => state.crypto.isLoading;
export const getCryptoDataState = (state: RootState) => state.crypto.cryptoData;
export const getCryptoShowingDataState = (state: RootState) =>
  state.crypto.cryptoShowingData;
