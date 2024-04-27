import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './app/navigation/AppNavigator'
import navigationTheme from './app/navigation/navigationTheme'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
