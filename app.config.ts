export default {
  expo: {
    name: "Starter",
    slug: "Starter",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
      backgroundColor: "#ffffff",
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
  },
};
