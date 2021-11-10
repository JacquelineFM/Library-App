import React from 'react';
import {View, Button} from 'react-native';
import {stylesLibrary} from '../../styles/stylesLibrary';
import {useNavigation} from '@react-navigation/core';

export default function MainBook() {
  const nav = useNavigation();
  return (
    <View style={stylesLibrary.container}>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Agregar libro'}
          onPress={() => nav.navigate('AddBook')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Eliminar libro'}
          onPress={() => nav.navigate('DeleteBook')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Ver detalles del libro'}
          onPress={() => nav.navigate('DetailsBook')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Actualizar libro'}
          onPress={() => nav.navigate('UpdateBook')}
        />
      </View>
    </View>
  );
}
