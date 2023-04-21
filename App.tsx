import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import { StatusBar } from 'react-native';
import RootStackNavigation from './src/navigations/RootStackNavigation';
import { observer } from 'mobx-react';

const App = () => {
  return (
    <MenuProvider>
      <StatusBar backgroundColor={'#000'} barStyle="light-content" />
      <RootStackNavigation />
    </MenuProvider>
  );
};

export default observer(App);
