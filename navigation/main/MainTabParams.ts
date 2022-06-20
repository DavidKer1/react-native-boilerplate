import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";

export type MainTabParamList = {
	TabOne: undefined;
	TabTwo: undefined;
};

export type MainTabScreenProps<Screen extends keyof MainTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<MainTabParamList, Screen>,
		NativeStackScreenProps<RootStackParamList>
	>;
