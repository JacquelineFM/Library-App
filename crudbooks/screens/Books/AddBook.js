import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView, Button, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {stylesLibrary} from '../../styles/stylesLibrary';
import {useNavigation} from '@react-navigation/core';
import firestore from '@react-native-firebase/firestore';

const AddBook = () => {
  const nav = useNavigation();

  const bookState = {
    nombre: '',
    autor: '',
    categoria: '',
    fecha: '',
    usuario: '',
  };

  const [book, setBook] = useState(bookState);
  const [date, setDate] = useState(new Date());

  const handleChangeText = (value, property) => {
    setBook({...book, [property]: value});
  };

  const createNewBook = async () => {
    if (
      book.nombre === '' ||
      book.autor === '' ||
      book.categoria === '' ||
      book.fecha === '' ||
      book.usuario === ''
    ) {
      Alert.alert('Datos incorrectos', 'Por favor de llenar todos los campos');
    } else {
      try {
        await firestore.collection('libros').add({
          name: book.name,
          autor: book.autor,
          categoria: book.categoria,
          fecha: book.fecha,
          usuario: book.usuario,
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
        <Text>Nombre</Text>
        <TextInput
          placeholder="Jacqueline"
          onChange={value => handleChangeText(value, 'nombre')}
        />
      </View>
      <View>
        <Text>Autor</Text>
        <TextInput
          placeholder="Anónimo"
          onChange={value => handleChangeText(value, 'autor')}
        />
      </View>
      <View>
        <Text>Categoría</Text>
        <TextInput
          placeholder="Ciencia ficción"
          onChange={value => handleChangeText(value, 'categoria')}
        />
      </View>
      <View>
        <Text>Fecha</Text>
        <DatePicker
          date={date}
          onDateChange={value => handleChangeText(value, 'fecha')}
        />
      </View>
      <View>
        <Text> Usuario </Text>
        <TextInput
          placeholder="Eduardo"
          onChange={value => handleChangeText(value, 'usuario')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Agregar'}
          onPress={() => createNewBook()}
        />
      </View>
    </ScrollView>
  );
};

export default AddBook;
