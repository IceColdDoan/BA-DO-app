import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, router, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Modal, Pressable, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { TokenCache } from '@clerk/clerk-expo/dist/cache';
import { Platform } from 'react-native';
import TaskScreen from "@/components/list/todo";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const CLERK_PUBLISHER_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

let tokenCache: TokenCache;

if (Platform.OS === "ios" || Platform.OS === "android") {
  tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } 
      catch (err) {
        return null;
      }
    },
  
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      }
      catch (err) {
        return;
      }
    },
  }  
}

else {
  tokenCache = {
    async getToken(key: string) {
      try {
        return AsyncStorage.getItem(key);
      }
      catch (err) {
        return null;
      }
    },
  
    async saveToken(key: string, value: string) {
      try {
        return AsyncStorage.setItem(key, value);
      }
      catch (err) {
        return;
      }
    },
  }  
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Press2P": require('@/assets/fonts/PressStart2P-Regular.ttf')
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

  return (
      <ClerkProvider publishableKey={ CLERK_PUBLISHER_KEY! } tokenCache={ tokenCache }>
        <RootLayoutNav/>
      </ClerkProvider>
  );
  
}

function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{ headerShown: false,  }} 
        />
        
        <Stack.Screen 
          name="(modals)/login" 
          options={{
            presentation: "modal",
            title: "Log in Or Sign Up",
            headerTitleStyle: {
              fontFamily: "Press2P",
              fontSize: 13,
          },
            animation: "slide_from_bottom",
            headerTitleAlign: "center",
            headerLeft: () => (
              <Pressable onPress={router.back} style={ {marginLeft: 5} }>
                <Ionicons name="close-outline" size={20}></Ionicons>
              </Pressable>
          ),
          
        }}
        /> 
        <Stack.Screen name="(activities)/[id]" 
          options={{
            title: "deez"
        }}
        />
        <Stack.Screen name="(modals)/dragScreen" 
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade"
        }}
        />
      </Stack>
  );
}
