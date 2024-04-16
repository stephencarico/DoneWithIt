import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyAccountScreen from './app/screens/MyAccountScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyAccountScreen />
    </GestureHandlerRootView>
  );
}
