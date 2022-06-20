import { View as DefaultView } from "react-native";
import { useThemeColor } from "@/theme/useThemedColor";
import { ThemeProps } from "@/theme/ThemeProps";

export type ViewProps = ThemeProps & DefaultView["props"];

export function View(props: ViewProps) {
	const { style, lightColor, darkColor, ...otherProps } = props;
	const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		"background",
	);

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
