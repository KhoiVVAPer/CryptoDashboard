import {put, call} from 'typed-redux-saga';
import {getCryptoDataSuccess, getCryptoDataFailed} from '@redux/slices/crypto';
import {IRequestAction} from 'interfaces/IRequestAction';
import {getCryptoApi} from 'services/apis/crypto';
import {cryptoParser} from '../parser/crypto';

export function* handlerGetCryptoData(action: IRequestAction) {
  try {
    const response = yield* call(getCryptoApi, action);
    if (response && response.status === 200) {
      yield put(getCryptoDataSuccess(cryptoParser(response)));
    } else {
      yield put(getCryptoDataFailed(response.statusText));
    }
  } catch (error) {
    console.log('error', error);
  }
}
