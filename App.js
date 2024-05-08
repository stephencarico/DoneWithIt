import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './app/navigation/AuthNavigator'
import navigationTheme from './app/navigation/navigationTheme'
import OfflineNotice from './app/components/OfflineNotice';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
