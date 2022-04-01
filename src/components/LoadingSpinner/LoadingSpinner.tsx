import React, {FC} from 'react';
import {BLACK, SUCCESS} from '@constants/colors';
import {ICON_SIZE_LARGE} from '@constants/common';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const LoadingSpinner: FC = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <ActivityIndicator size={ICON_SIZE_LARGE} color={SUCCESS} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: BLACK,
    opacity: 0.2,
  },
});

export default LoadingSpinner;
