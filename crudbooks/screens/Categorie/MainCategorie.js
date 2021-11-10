import React from 'react';
import {View, Button} from 'react-native';
import {stylesLibrary} from '../../styles/stylesLibrary';
import {useNavigation} from '@react-navigation/core';

export default function MainCategorie() {
  const nav = useNavigation();
  return (
    <View style={stylesLibrary.container}>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Agregar categoría'}
          onPress={() => nav.navigate('AddCategorie')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Eliminar categoría'}
          onPress={() => nav.navigate('DeleteCategorie')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Ver detalles de la categoría'}
          onPress={() => nav.navigate('DetailsCategorie')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Actualizar categoría'}
          onPress={() => nav.navigate('UpdateCategorie')}
        />
      </View>
    </View>
  );
}
