import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';
import DetailsBook from './DetailsBook';
import UpdateBook from './UpdateBook';
import MainBook from './MainBook';

const Stack = createNativeStackNavigator();

export default function HomeBook() {
  return (
    <Stack.Navigator initialRouteName="MainBook">
      <Stack.Screen
        name="MainBook"
        component={MainBook}
        options={{title: 'MainBook', headerShown: false}}
      />
      <Stack.Screen
        name="AddBook"
        component={AddBook}
        options={{title: 'Add Book', headerShown: false}}
      />
      <Stack.Screen
        name="DeleteBook"
        component={DeleteBook}
        options={{title: 'Delete Book', headerShown: false}}
      />
      <Stack.Screen
        name="DetailsBook"
        component={DetailsBook}
        options={{title: 'Details Book', headerShown: false}}
      />
      <Stack.Screen
        name="UpdateBook"
        component={UpdateBook}
        options={{title: 'Update Book', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
