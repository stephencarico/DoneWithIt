import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
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