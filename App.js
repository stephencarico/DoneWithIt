import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MessagesScreen />
    </GestureHandlerRootView>
  );
}
