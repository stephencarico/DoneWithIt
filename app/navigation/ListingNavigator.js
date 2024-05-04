import { createStackNavigator } from '@react-navigation/stack'

import ListingEditScreen from '../screens/ListingEditScreen';
import UploadScreen from '../screens/UploadScreen';

const Stack = createStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator screenOptions={{ presentation: 'modal', headerShown: false }}>
    <Stack.Screen name='ListingEdit' component={ListingEditScreen} />
    <Stack.Screen name='Upload' component={UploadScreen} />
  </Stack.Navigator>
)

export default ListingNavigator;