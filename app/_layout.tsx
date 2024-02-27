import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Press2P": require('../assets/fonts/PressStart2P-Regular.ttf')
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
        name="(modals)/login" 
        options={{
          presentation: "modal",
          title: "Log in Or Sign Up",
          headerTitleStyle: {
            fontFamily: "Press2P",
            fontSize: 15,
          },
          animation: "slide_from_bottom",
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name="close-outline" size={20}></Ionicons>
            </TouchableOpacity>
          )
        }}
        /> 
        <Stack.Screen name="(activities)/[id]" 
        options={{
          title: "deez"
        }}
        />
      </Stack>
  );
}
