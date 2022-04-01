import {takeLatest} from '@redux-saga/core/effects';
import {getCryptoDataRequest} from '@redux/slices/crypto';
import {handlerGetCryptoData} from '../handlers/crypto';

export default function* watcherCrypto() {
  yield takeLatest(getCryptoDataRequest.type, handlerGetCryptoData);
}
