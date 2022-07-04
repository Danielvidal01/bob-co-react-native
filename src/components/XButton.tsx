import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface XButtonProps {
  children?: React.ReactNode | string;
  style?: XButtonStyleProps;
  onPress?: () => void;
  icon?: boolean;
  iconProps?: IconProps;
}

interface XButtonStyleProps {
  text?: TextStyle;
  container?: ViewStyle;
  box?: ViewStyle;
  shadowStyle?: ViewStyle;
  iconContainer?: ViewStyle;
}
interface IconProps {
  size: number;
  name: string;
  color: string;
}

export const XButton = ({
  onPress,
  style,
  children,
  icon = false,
  iconProps = { size: 20, name: 'rocket', color: '#000000' },
}: XButtonProps) => {
  const defaultStyle = StyleSheet.create({
    text: {
      color: Colors.black,
    },
    box: {
      flex: 1,
    },
    container: {
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      borderRadius: icon ? iconProps?.size * 2 : 0,
      marginVertical: 5,
      marginHorizontal: 12,
    },
    shadowStyle: {
      shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 1,
      shadowRadius: -1,
      elevation: 2,
    },
    iconContainer: {
      width: iconProps?.size + 10,
      height: iconProps?.size + 10,
      borderRadius: iconProps?.size / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { ...style?.container, ...defaultStyle.container },
        defaultStyle.shadowStyle,
      ]}>
      {icon ? (
        <View style={defaultStyle.iconContainer}>
          <Icon
            name={iconProps?.name}
            size={iconProps?.size}
            color={iconProps?.color}
          />
        </View>
      ) : typeof children === 'string' ? (
        <Text style={defaultStyle.text}>{children}</Text>
      ) : (
        <View style={defaultStyle.box}>{children}</View>
      )}
    </TouchableOpacity>
  );
};
