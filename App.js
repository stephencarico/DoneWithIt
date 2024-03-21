import { View } from "react-native";

import Button from "./app/components/Button";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button>Login</Button>
    </View>
  );
}
