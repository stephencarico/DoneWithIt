import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import { useEffect, useState } from 'react';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  }

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}
