import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicScreens from './publicRoutes';

export default function Routes() {
  return (
    <NavigationContainer>
      <PublicScreens />
    </NavigationContainer>
  );
}
