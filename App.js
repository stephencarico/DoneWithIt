import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingsScreen />
    </GestureHandlerRootView>
  );
}
