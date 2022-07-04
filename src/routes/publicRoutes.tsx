import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Catalog, Home } from '../screens';
import { PublicStackParamsList } from '../types';

export default function PublicScreens() {
  const { Navigator, Screen } =
    createNativeStackNavigator<PublicStackParamsList>();

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} options={{ title: 'Homea' }} />
      <Screen
        name="Catalog"
        component={Catalog}
        options={{ title: 'Catalog' }}
      />
    </Navigator>
  );
}
