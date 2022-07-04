import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import { XButton } from '../components';

export default function FloatingCart() {
  const { items } = useSelector((state: any) => state.cart);
  const style = StyleSheet.create({
    navigatorStyle: {
      position: 'absolute',
      bottom: 8,
      right: 8,
    },
    textContainer: {
      position: 'absolute',
      bottom: 2,
      right: 2,
      elevation: 2,
      backgroundColor: Colors.primary,
      width: 30,
      height: 30,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: Colors.black,
    },
  });
  return (
    <View style={style.navigatorStyle}>
      <XButton
        icon
        iconProps={{ name: 'shopping-cart', size: 20, color: '#000000' }}
      />
      <View style={style.textContainer}>
        <Text style={style.text}>{items.length}</Text>
      </View>
    </View>
  );
}
