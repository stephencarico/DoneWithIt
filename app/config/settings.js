import Constants from 'expo-constants'

const settings = {
  dev: {
    apiUrl: 'http://127.0.0.1:9000/api'
  },
  staging: {
    apiUrl: 'http://127.0.0.1:9000/api'
  },
  prod: {
    apiUrl: 'http://127.0.0.1:9000/api'
  },
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.expoConfig.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
}

export default getCurrentSettings();