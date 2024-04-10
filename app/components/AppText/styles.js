import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
})

export default styles;