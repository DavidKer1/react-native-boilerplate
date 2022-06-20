import React from "react";

import { ActivityIndicator, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useThemeColor } from "@/theme/useThemedColor";

export default function LoadingScreen() {
	const color = useThemeColor({}, "text");

	return (
		<View style={styles.container}>
			<ActivityIndicator size="large" color={color} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
