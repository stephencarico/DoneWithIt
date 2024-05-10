import * as Notifications from 'expo-notifications';
import expoPushTokensApi from '../api/expoPushTokens';
import { useEffect } from 'react';

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    const permission = await Notifications.requestPermissionsAsync();
    if (!permission.granted) return;

    try {
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  }
}
