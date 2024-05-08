import * as SecureStore from 'expo-secure-store'

const key = 'authToken'

const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (err) {
    console.log('Error storing the auth token', err);
  }
}

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (err) {
    console.log('Error getting the auth token', err);
  }
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (err) {
    console.log('Error removing the auth token', err);
  }
}

export default {
  getToken,
  removeToken,
  storeToken,
}
