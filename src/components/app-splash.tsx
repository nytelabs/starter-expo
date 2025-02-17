// Modules
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts as useSansFont,
  Figtree_400Regular,
  Figtree_600SemiBold,
  Figtree_900Black,
} from "@expo-google-fonts/figtree";

// Components
import { AppRouter } from "@/components/app-router";

// Types
type AppSplashProps = {};

SplashScreen.preventAutoHideAsync();

// Component
export const AppSplash: React.FC<AppSplashProps> = (): React.ReactNode => {
  // Fonts
  const [isSansFontLoaded] = useSansFont({
    Figtree_400Regular,
    Figtree_600SemiBold,
    Figtree_900Black,
  });

  // State
  const [isAppReady, setIsAppReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isSansFontLoaded) {
      setIsAppReady(true);
    }
  }, [isSansFontLoaded]);

  React.useEffect(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return <AppRouter />;
};
