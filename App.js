import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import { useState } from 'react';
import ImageInput from './app/components/ImageInput';
import { Image } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <ImageInput
          imageUri={imageUri}
          onChangeImage={uri => setImageUri(uri)}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
