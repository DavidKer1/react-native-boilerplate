import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParams";

// navigations
import { MainTabNavigation } from "./main";

// screens
import NotFoundScreen from "@/screens/root/NotFoundScreen";
import ModalScreen from "../screens/root/ModalScreen";
import LoadingScreen from "@/screens/root/LoadingScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();
const isLoading = true;

function RootNavigation() {
	return (
		<Stack.Navigator>
			{isLoading ? (
				<Stack.Screen
					name="Loading"
					options={{
						headerShown: false,
					}}
					component={LoadingScreen}
				/>
			) : (
				<>
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
				</>
			)}
		</Stack.Navigator>
	);
}

export default RootNavigation;
