import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Product } from '../types';
import { XButton } from './XButton';
interface ProductProps {
  product: Product;
  onPress: () => void;
}

const ProductCard = ({ product, onPress }: ProductProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    card: {
      backgroundColor: Colors.white,
      marginVertical: '6%',
      marginHorizontal: '10%',
      padding: '6%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
    },
    productImage: {
      resizeMode: 'center',
      height: 250,
      width: 250,
    },

    text: {
      color: isDarkMode ? Colors.black : Colors.white,
      fontFamily: 'lucida grande',
      fontSize: 17,
      fontWeight: '600',
      width: '100%',
      textAlign: 'left',
      textTransform: 'uppercase',
    },
  });
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <TouchableOpacity>
        <Image style={styles.productImage} source={{ uri: product.photo }} />
      </TouchableOpacity>
      <Text style={styles.text}>{product.name}</Text>
      <Text style={styles.text}>${product.price}</Text>
      <View>
        <XButton
          icon
          onPress={onPress}
          iconProps={{ size: 20, name: 'plus', color: '#000000' }}
        />
      </View>
    </View>
  );
};

export default ProductCard;
