import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

const activity = () => {
  const { isSignedIn, signOut } = useAuth();
  
  return (
    <SafeAreaView>
      <Pressable onPress={() => signOut}> 
        <Text>
          Sign Out  
        </Text> 
      </Pressable>
      {(!isSignedIn) && (
        <Link href={"/(modals)/login"}> Log in </Link>
      )}
      
      <Link href="/(activities)/chicken"> My activities </Link>
    </SafeAreaView>
  )
}

export default activity;