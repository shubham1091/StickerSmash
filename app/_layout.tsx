import { Stack } from "expo-router";
// import * as SplashScreen from "expo-splash-screen";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";


export default function RootLayout() {
  // SplashScreen.preventAutoHideAsync();
  // setTimeout(SplashScreen.hideAsync, 5000)
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
