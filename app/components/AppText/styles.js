import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: 'dodgerblue',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
})

export default styles;