import {ALERT, BLACK, SUCCESS} from '@constants/colors';
import {scale} from '@constants/scale';
import React, {FC} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {ICrypto} from 'src/interfaces/ICrypto';

type CryptoItemProps = {
  data: ICrypto;
};

const defaultCryptoLogo = require('assets/images/bnb.png');

export const ItemCrypto: FC<CryptoItemProps> = ({data}: CryptoItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionRowContainer}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={defaultCryptoLogo} />
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.symbolTitle}>{data.symbol}</Text>
          <Text>{data.count}</Text>
        </View>
      </View>
      <View style={styles.sectionColumnContainer}>
        <Text style={styles.lastPriceTitle}>{`${data.lastPrice} $`}</Text>
        <Text
          style={
            data.isRaising
              ? styles.raisingPercentTitle
              : styles.reducePercentTitle
          }>{`${data.priceChangePercent}%`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(12),
    paddingVertical: scale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionColumnContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  symbolTitle: {color: BLACK},
  infoSection: {flexDirection: 'column', marginLeft: scale(10)},
  imageWrapper: {width: scale(35), height: scale(35)},
  image: {width: '100%', height: '100%'},
  raisingPercentTitle: {color: SUCCESS},
  reducePercentTitle: {color: ALERT},
  lastPriceTitle: {color: BLACK},
});
