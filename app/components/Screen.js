import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants';
import { useNetInfo } from "@react-native-community/netinfo";

import Notification from './Notification';

function Screen({ children, style }) {
  const { isInternetReachable } = useNetInfo();

  return (
    <SafeAreaView style={styles.screen}>
      <Notification message='No Internet Connection' visible={!isInternetReachable} />
      <View style={[style, { flex: 1 }]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
})