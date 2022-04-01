import {LIMIT_RECORD_LOAD_LIST_DATA} from '@constants/common';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICrypto} from 'src/interfaces/ICrypto';

interface SliceCryptoState {
  error: string;
  isLoading: boolean;
  take: number;
  cryptoData: ICrypto[];
  cryptoShowingData: ICrypto[];
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    error: '',
    take: 0,
    isLoading: false,
    cryptoData: [],
    cryptoShowingData: [],
  } as SliceCryptoState,
  reducers: {
    getCryptoDataRequest: state => {
      state.error = '';
      state.isLoading = true;
    },
    getCryptoDataSuccess: (state, action: PayloadAction<ICrypto[]>) => {
      state.cryptoData = action.payload;
      state.cryptoShowingData = action.payload.slice(
        0,
        LIMIT_RECORD_LOAD_LIST_DATA,
      );
      state.take = LIMIT_RECORD_LOAD_LIST_DATA;
      state.error = '';
      state.isLoading = false;
    },
    getCryptoDataFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    loadMoreShowingCryptoData: state => {
      state.cryptoShowingData = [
        ...state.cryptoShowingData,
        ...state.cryptoData.slice(
          state.take,
          state.take + LIMIT_RECORD_LOAD_LIST_DATA,
        ),
      ];
      state.take = state.take + LIMIT_RECORD_LOAD_LIST_DATA;
    },
  },
});

export const {
  getCryptoDataRequest,
  getCryptoDataSuccess,
  getCryptoDataFailed,
  loadMoreShowingCryptoData,
} = cryptoSlice.actions;
const cryptoReducer = cryptoSlice.reducer;
export default cryptoReducer;
