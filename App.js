import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { store } from './src/store';
import { Navigation } from './src/Nav/Navigation';

export default function App() {

  const [loaded] = useFonts({
    technofosiano: require('./assets/fonts/technofosiano.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigation />

      <StatusBar style="light" />
    </Provider>
  );
}
