import {all, fork} from '@redux-saga/core/effects';
import watcherCrypto from './watchers/crypto';

export default function* rootSaga() {
  yield all([fork(watcherCrypto)]);
}
