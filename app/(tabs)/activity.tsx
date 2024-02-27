import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';

const community = () => {
  const { isSignedIn, signOut } = useAuth();

  return (
    <View>
      <Pressable onPress={() => signOut}>Sign Out</Pressable>
      {(!isSignedIn) && (
        <Link href={"/(modals)/login"}> Log in </Link>
      )}
      <Link href="/(activities)/chicken"> My activities </Link>
    </View>
  )
}

export default community;