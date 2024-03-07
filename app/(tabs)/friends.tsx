import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import FriendsHeader from "@/components/friends/friendsHeader"

const friends = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <FriendsHeader/>
      }}/>
    </SafeAreaView>
  )
}

export default friends;