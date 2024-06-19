import { ParamListBase } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Help: undefined;
  Invite: undefined;
  Profile: { title: string };
} & ParamListBase;

type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Video: undefined;
  Profile: undefined;
} & ParamListBase