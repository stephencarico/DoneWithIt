import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import FeedNavigator from './FeedNavigator';
import ListingNavigator from './ListingNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
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
      component={ListingNavigator}
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
);

export default AppNavigator
