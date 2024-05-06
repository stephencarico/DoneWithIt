import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from 'expo-constants'

import colors from '../config/colors'

function Notification(props) {
  const { type, isInternetReachable } = useNetInfo();

  if (type !== 'unknown' && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});

export default Notification;