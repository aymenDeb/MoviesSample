import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const Spinner: React.FC<{}> = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999,
  },
});

export default Spinner;
