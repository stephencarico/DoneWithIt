import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="AccountHome" component={AccountNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default AppNavigator