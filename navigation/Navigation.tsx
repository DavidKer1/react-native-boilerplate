import React from "react";
import { ColorSchemeName } from "react-native";
import { DarkTheme, NavigationContainer, DefaultTheme } from '@react-navigation/native';
import LinkingConfiguration from "./LinkingConfiguration";
import RootNavigation from "./RootNavigation";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigation />
		</NavigationContainer>
	);
}
