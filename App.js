import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import WelcomeScreen from './app/screens/WelcomeScreen'
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen';
import colors from './app/config/colors'

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: colors.white } }}>
    <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Register' component={RegisterScreen} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
