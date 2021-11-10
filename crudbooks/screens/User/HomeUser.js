import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import DetailsUser from './DetailsUser';
import UpdateUser from './UpdateUser';
import MainUser from './MainUser';

const Stack = createNativeStackNavigator();

export default function HomeUser() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainUser"
        component={MainUser}
        options={{title: 'MainUser', headerShown: false}}
      />
      <Stack.Screen
        name="AddUser"
        component={AddUser}
        options={{title: 'Add User', headerShown: false}}
      />
      <Stack.Screen
        name="DeleteUser"
        component={DeleteUser}
        options={{title: 'Delete User', headerShown: false}}
      />
      <Stack.Screen
        name="DetailsUser"
        component={DetailsUser}
        options={{title: 'Details User', headerShown: false}}
      />
      <Stack.Screen
        name="UpdateUser"
        component={UpdateUser}
        options={{title: 'Update User', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
