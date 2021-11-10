import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import AddCategorie from './AddCategorie';
import DeleteCategorie from './DeleteCategorie';
import DetailsCategorie from './DetailsCategorie';
import UpdateCategorie from './UpdateCategorie';
import MainCategorie from './MainCategorie';

const Stack = createNativeStackNavigator();

export default function HomeCategorie() {
  return (
    <Stack.Navigator initialRouteName="MainCategorie">
      <Stack.Screen
        name="MainCategorie"
        component={MainCategorie}
        options={{title: 'MainCategorie', headerShown: false}}
      />
      <Stack.Screen
        name="AddCategorie"
        component={AddCategorie}
        options={{title: 'Add Categorie', headerShown: false}}
      />
      <Stack.Screen
        name="DeleteCategorie"
        component={DeleteCategorie}
        options={{title: 'Delete Categorie', headerShown: false}}
      />
      <Stack.Screen
        name="DetailsCategorie"
        component={DetailsCategorie}
        options={{title: 'Details Categorie', headerShown: false}}
      />
      <Stack.Screen
        name="UpdateCategorie"
        component={UpdateCategorie}
        options={{title: 'Update Categorie', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
