import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {stylesLibrary} from '../styles/stylesLibrary';

const Home = () => {
  const nav = useNavigation();
  return (
    <View style={stylesLibrary.container}>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Home Book'}
          onPress={() => nav.navigate('HomeBook')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Home Categorie'}
          onPress={() => nav.navigate('HomeCategorie')}
        />
      </View>
      <View style={stylesLibrary.contView}>
        <Button
          style={stylesLibrary.btnScreen}
          title={'Home User'}
          onPress={() => nav.navigate('HomeUser')}
        />
      </View>
    </View>
  );
};

export default Home;
