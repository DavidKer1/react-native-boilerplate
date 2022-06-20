import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabOneScreen from "@/screens/main/TabOneScreen";
import TabTwoScreen from "@/screens/main/TabTwoScreen";
import { TabBarIcon } from "@/components/TabBarIcon";
import useColorScheme from "@/hooks/useColorScheme";
import Colors from "@/theme/Colors";
import type { MainTabParamList } from "./MainTabParams";
import { MainTabScreenProps } from "./MainTabParams";

const BottomTab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigation() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={({ navigation }: MainTabScreenProps<"TabOne">) => ({
					title: "Tab One",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate("Modal")}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name="info-circle"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={{
					title: "Tab Two",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}
