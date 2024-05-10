import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Notifications from 'expo-notifications';

import AccountNavigator from './AccountNavigator';
import expoPushTokensApi from '../api/expoPushTokens';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
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

  useEffect(() => {
    registerForPushNotifications();
  }, []);

  return (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Listing"
      component={ListingEditScreen}
      options={{
        headerShown: false,
        tabBarButton: ({ onPress }) => <NewListingButton onPress={onPress} />
      }}
    />
    <Tab.Screen
      name="AccountHome"
      component={AccountNavigator}
      options={{
        headerShown: false,
        title: 'Account',
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='account' size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)};

export default AppNavigator
