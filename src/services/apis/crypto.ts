import {CRYPTO_URL} from '@constants/apiUrls';
import APIUtils from '@utils/apiUtils';
import {IRequestAction} from 'src/interfaces/IRequestAction';

export async function getCryptoApi(action: IRequestAction) {
  return APIUtils.get(CRYPTO_URL, {params: {}});
}
