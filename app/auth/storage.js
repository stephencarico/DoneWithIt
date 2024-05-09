import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode';

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

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
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
  getUser,
  removeToken,
  storeToken,
}
