import React from 'react';
import {View, Button} from 'react-native';
import {stylesLibrary} from '../../styles/stylesLibrary';
import {useNavigation} from '@react-navigation/core';

export default function MainUser() {
  const nav = useNavigation();
  return (
    <View style={stylesLibrary.container}>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Agregar usuario'}
          onPress={() => nav.navigate('AddUser')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Eliminar usuario'}
          onPress={() => nav.navigate('DeleteUser')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Ver detalles del usuario'}
          onPress={() => nav.navigate('DetailsUser')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Actualizar usuario'}
          onPress={() => nav.navigate('UpdateUser')}
        />
      </View>
    </View>
  );
}
