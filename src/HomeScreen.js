import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {getFetchData} from './apiUtils.js/getFetch';

const HomeScreen = ({navigation}) => {
  const {isPending, error, data} = getFetchData();

  console.log({isPending, data}, '<== data');

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate();
        }}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
