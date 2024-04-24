import { Platform } from "react-native";
import colors from './colors'
import borderRadius from './borderRadius'

export default {
  borderRadius,
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  }
}