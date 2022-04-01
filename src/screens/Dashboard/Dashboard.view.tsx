import {ItemCrypto} from 'components/CardCrypto/CardCrypto';
import React, {FC} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {ICrypto} from 'src/interfaces/ICrypto';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

type DashboardViewProps = {
  cryptoData: ICrypto[];
  isLoading: boolean;
  onLoadCryptoData: () => void;
  onLoadMoreCryptoData: () => void;
};

const DashboardView: FC<DashboardViewProps> = ({
  cryptoData,
  isLoading,
  onLoadCryptoData,
  onLoadMoreCryptoData,
}): JSX.Element => {
  return (
    <>
      <FlatList
        data={cryptoData}
        keyExtractor={(item, index) => `ItemCrypto-${item.firstId}-${index}`}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onLoadCryptoData} />
        }
        onEndReached={onLoadMoreCryptoData}
        onEndReachedThreshold={0.4}
        renderItem={({item}) => <ItemCrypto data={item} />}
      />
      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default DashboardView;
