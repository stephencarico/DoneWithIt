import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoginScreen />
    </GestureHandlerRootView>
  );
}
