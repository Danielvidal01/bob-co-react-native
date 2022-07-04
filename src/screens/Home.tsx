import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { XButton } from '../components';
import FloatingCart from '../components/FloatingCart';
import { HomeNavigation } from '../types';

export const Home = () => {
  const navigation = useNavigation<HomeNavigation>();
  const goToCatalog = () => {
    navigation.navigate('Catalog', { text: 'Hello World' });
  };
  const style = StyleSheet.create({
    body: {
      backgroundColor: Colors.white,
      flex: 1,
    },
    header: {
      color: Colors.black,
      marginTop: 18,
      alignSelf: 'center',
    },
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  });

  return (
    <SafeAreaView style={style.body}>
      <Text style={style.header}>Bob&.co</Text>
      <View style={style.main}>
        <XButton onPress={goToCatalog}>CATALOGO</XButton>
      </View>
      <FloatingCart />
    </SafeAreaView>
  );
};
