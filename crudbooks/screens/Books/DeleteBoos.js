import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Home = () => {
  const nav = useNavigation();

  return (
    <View>
      <Text> Delete Book</Text>
    </View>
  );
};

export default Home;
