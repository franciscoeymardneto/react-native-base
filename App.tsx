import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from "redux-persist/integration/react";
import Routes from './src/navigation/routes';
import { store } from "./src/store";
import { FONTS } from "./utils/constants";

if(__DEV__) {
  import('./tools/reactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {
  const [fontsLoaded] = useFonts(FONTS)

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
}