import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Button, Alert} from 'react-native';
import {stylesLibrary} from '../../styles/stylesLibrary';
import {useNavigation} from '@react-navigation/core';
import firestore from '@react-native-firebase/firestore';

const AddCategorie = () => {
  const nav = useNavigation();
  const categorieState = {
    descripcion: '',
    nombre: '',
  };
  const [categorie, setCategorie] = useState(categorieState);
  const handleChangeText = (value, property) => {
    setCategorie({...categorie, [property]: value});
  };

  const createNewCategorie = async () => {
    if (categorie.descripcion === '' || categorie.nombre === '') {
      Alert.alert('Datos incorrectos', 'Por favor de llenar todos los campos');
    } else {
      try {
        await firestore.collection('categoria').add({
          descripcion: categorie.descripcion,
          nombre: categorie.nombre,
        });
        nav.navigate('MainBook');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ScrollView>
      <View>
        <Text>Descripción</Text>
        <TextInput
          placeholder="Ciencia ficción para jóvenes creativos"
          onChange={value => handleChangeText(value, 'descripcion')}
        />
      </View>
      <View>
        <Text>Nombre</Text>
        <TextInput
          placeholder="Ciencia ficción"
          onChange={value => handleChangeText(value, 'nombre')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Agregar'}
          onPress={() => createNewCategorie()}
        />
      </View>
    </ScrollView>
  );
};

export default AddCategorie;
