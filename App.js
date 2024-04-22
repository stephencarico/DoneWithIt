import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Image, Button } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library')
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled)
        setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <Button title='Select Image' onPress={selectImage} />
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      </Screen>
    </GestureHandlerRootView>
  );
}
