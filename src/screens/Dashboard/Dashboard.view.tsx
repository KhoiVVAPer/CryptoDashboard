import {getCryptoShowingDataState} from '@redux/selectors/crypto';
import {
  getCryptoDataRequest,
  loadMoreShowingCryptoData,
} from '@redux/slices/crypto';
import React, {FC} from 'react';
import {FlatList, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

type DashboardViewProps = {};

const DashboardView: FC<DashboardViewProps> = ({}): JSX.Element => {
  const dispatch = useDispatch();
  const cryptoData = useSelector(getCryptoShowingDataState);

  return (
    <>
      <TouchableOpacity onPress={() => dispatch(getCryptoDataRequest())}>
        <Text>asdasdasdasdasdas</Text>
      </TouchableOpacity>
      <FlatList
        data={cryptoData}
        onEndReached={() => dispatch(loadMoreShowingCryptoData())}
        onEndReachedThreshold={0.4}
        renderItem={({item}) => (
          <Text style={{height: 200}}>{item.askQty}</Text>
        )}
      />
    </>
  );
};

export default DashboardView;
