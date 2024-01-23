import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import { appStyles } from '../appStyles';

const FullScreenLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating size="large" color={appStyles.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenLoader;
