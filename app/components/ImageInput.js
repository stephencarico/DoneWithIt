import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library')
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      if (imageUri) {
        onChangeImage(imageUri);
      } else {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.canceled)
          onChangeImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={selectImage}>
      {
        imageUri
          ? <Image source={{ uri: imageUri }} style={styles.image} />
          : <MaterialCommunityIcons name='camera' size={35} color={defaultStyles.colors.medium} />
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
    backgroundColor: defaultStyles.colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: defaultStyles.borderRadius.sm,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%',
  }
});

export default ImageInput;