import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { Navigation } from "./navigation";
import { store } from "@/redux/store/index";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();
	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<ReduxProvider store={store}>
				<SafeAreaProvider>
					<Navigation colorScheme={colorScheme} />
					<StatusBar />
				</SafeAreaProvider>
			</ReduxProvider>
		);
	}
}
