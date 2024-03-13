import React, {useEffect} from 'react';
import {getFetchData} from './apiUtils.js/getFetch';

const HomeScreen = ({navigation}) => {
  const {isPending, error, data} = getFetchData();

  console.log({isPending, data}, '<== data');

  return (
    <div style={{flex: 1}}>
      <header>Hello World</header>
      <a
        onClick={() => {
          navigation.navigate('SecondScreen');
        }}>
        Click Me
      </a>
    </div>
  );
};

export default HomeScreen;
