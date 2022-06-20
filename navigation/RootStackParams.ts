import { NavigatorScreenParams } from "@react-navigation/native";
import { MainTabParamList } from "./main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
	Loading: undefined;
	Main: NavigatorScreenParams<MainTabParamList> | undefined;
	Modal: undefined;
	NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;
