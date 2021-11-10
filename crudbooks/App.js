import React from 'react';

// Nav
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens Home
import Home from '../crudbooks/screens/Home';
import HomeBook from './screens/Books/HomeBook';
import HomeCategorie from '../crudbooks/screens/Categorie/HomeCategorie';
import HomeUser from '../crudbooks/screens/User/HomeUser';

const Stack = createNativeStackNavigator();

export default function Library() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home library'}}
        />
        <Stack.Screen
          name="HomeBook"
          component={HomeBook}
          options={{title: 'Home books'}}
        />
        <Stack.Screen
          name="HomeCategorie"
          component={HomeCategorie}
          options={{title: 'Home categorie'}}
        />
        <Stack.Screen
          name="HomeUser"
          component={HomeUser}
          options={{title: 'Home user'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
