import React from "react";

import { FontAwesome } from "@expo/vector-icons";

type Props = {
	color: string;
	name: React.ComponentProps<typeof FontAwesome>["name"];
};
type FontAwesomeProps = React.ComponentProps<typeof FontAwesome>;
export function TabBarIcon(props: Props & FontAwesomeProps) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
