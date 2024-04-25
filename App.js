import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import { useState } from 'react';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen style={{ padding: 10 }}>
        <ImageInputList
          imageUris={imageUris}
          onAddImage={(newUri) => setImageUris([...imageUris, newUri])}
          onRemoveImage={(newUri) => setImageUris(imageUris.filter(uri => uri !== newUri))}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
