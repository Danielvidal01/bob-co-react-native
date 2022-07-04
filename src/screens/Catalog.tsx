// import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';
import FloatingCart from '../components/FloatingCart';
import ProductCard from '../components/ProductCard';
import { addItem } from '../store/cartStore';
import { Product } from '../types';
// import { ParamList } from '../types';

export const Catalog = () => {
  // const route = useRoute<RouteProp<ParamList, 'Catalog'>>();
  // const { text } = route.params;

  const products: Product[] = [
    {
      name: 'Camisa Classic',
      price: 40,
      photo:
        'https://img.joomcdn.net/1e1d13f58499a7813d9c630604f1de7f85ce4821_original.jpeg',
    },
    {
      name: 'Camisa Classic',
      price: 40,
      photo:
        'https://img.joomcdn.net/1e1d13f58499a7813d9c630604f1de7f85ce4821_original.jpeg',
    },
    {
      name: 'Camisa Classic',
      price: 40,
      photo:
        'https://img.joomcdn.net/1e1d13f58499a7813d9c630604f1de7f85ce4821_original.jpeg',
    },
    {
      name: 'Camisa Classic',
      price: 40,
      photo:
        'https://img.joomcdn.net/1e1d13f58499a7813d9c630604f1de7f85ce4821_original.jpeg',
    },
    {
      name: 'Camisa Classic',
      price: 40,
      photo:
        'https://img.joomcdn.net/1e1d13f58499a7813d9c630604f1de7f85ce4821_original.jpeg',
    },
  ];
  const dispatch = useDispatch();
  const style = StyleSheet.create({
    main: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    scroll: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: Colors.white,
    },
  });
  return (
    <View style={style.main}>
      <ScrollView style={style.scroll}>
        {products.map((product, index) => {
          return (
            <ProductCard
              onPress={() => {
                dispatch(addItem(product));
              }}
              product={product}
              key={index}
            />
          );
        })}
      </ScrollView>
      <FloatingCart />
    </View>
  );
};
