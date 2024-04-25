import React from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet, View, Alert } from 'react-native';
import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, [])

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert('You need to enable permission to access the library')
  }
  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    });
    if (!result.canceled)
      onChangeImage(result.assets[0].uri);
  }
  const handlePress = async () => {
    try {
      if (!imageUri) selectImage();
      else Alert.alert('Delete', 'Are you sure you want to delete this?', [
        { text: 'Yes', onPress: () => onChangeImage(imageUri)},
        { text: 'No' }
      ])
    } catch (error) {
      console.log('Error reading an image', error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>      
      <View style={styles.container}>
        {
          imageUri
            ? <Image source={{ uri: imageUri }} style={styles.image} />
            : <MaterialCommunityIcons name='camera' size={35} color={defaultStyles.colors.medium} />
        }
      </View>
    </TouchableWithoutFeedback>
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