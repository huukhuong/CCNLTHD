import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './RootStackParams';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../pages/HomeScreen';
import ProductDetailScreen from '../pages/ProductDetailScreen';
import CartScreen from '../pages/CartScreen';
import { observer } from 'mobx-react';

const Stack = createNativeStackNavigator<RootStackParams>();
const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen} />

        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
        />
        
        <Stack.Screen 
          name="CartScreen" 
          component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default observer(RootStackNavigation);
