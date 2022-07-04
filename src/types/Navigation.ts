import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PublicStackParamsList = {
  Home: undefined;
  Catalog: CatalogRouteProps;
};
export type ParamList = {
  Catalog: CatalogRouteProps;
};

type CatalogRouteProps = {
  text: string;
};

export type HomeNavigation = NativeStackNavigationProp<
  PublicStackParamsList,
  'Home'
>;
