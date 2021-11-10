import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Button, Alert} from 'react-native';
import {stylesLibrary} from '../../styles/stylesLibrary';
import {useNavigation} from '@react-navigation/core';
import firestore from '@react-native-firebase/firestore';

const AddUser = () => {
  const nav = useNavigation();
  const userState = {
    email: '',
    nombre: '',
  };
  const [user, setUser] = useState(userState);
  const handleChangeText = (value, property) => {
    setUser({...user, [property]: value});
  };

  const createNewUser = async () => {
    if (user.email === '' || user.nombre === '') {
      Alert.alert('Datos incorrectos', 'Por favor de llenar todos los campos');
    } else {
      try {
        await firestore.collection('usuario').add({
          email: user.email,
          nombre: user.nombre,
        });
        nav.navigate('MainUser');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="jflores43@gmail.com"
          onChange={value => handleChangeText(value, 'email')}
        />
      </View>
      <View>
        <Text>Nombre</Text>
        <TextInput
          placeholder="Joshua Elizabeth"
          onChange={value => handleChangeText(value, 'nombre')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Agregar'}
          onPress={() => createNewUser()}
        />
      </View>
    </ScrollView>
  );
};

export default AddUser;
