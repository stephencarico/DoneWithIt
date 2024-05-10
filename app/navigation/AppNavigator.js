import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import useNotifications from '../hooks/useNotifications';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();

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
      name="Account"
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
