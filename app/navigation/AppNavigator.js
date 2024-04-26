import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={MyAccountScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator