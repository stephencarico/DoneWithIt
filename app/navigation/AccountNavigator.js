import { createStackNavigator } from '@react-navigation/stack'

import MyAccountScreen from '../screens/MyAccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Account' component={MyAccountScreen} />
    <Stack.Screen name='Messages' component={MessagesScreen} />
    <Stack.Screen name='Listings' component={ListingsScreen} />
  </Stack.Navigator>
)

export default AccountNavigator;