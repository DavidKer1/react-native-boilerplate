import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParams";


// navigations
import { MainTabNavigation } from "./main";

// screens
import NotFoundScreen from "@/screens/root/NotFoundScreen";
import ModalScreen from "../screens/root/ModalScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigation() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Main"
				component={MainTabNavigation}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

export default RootNavigation;

