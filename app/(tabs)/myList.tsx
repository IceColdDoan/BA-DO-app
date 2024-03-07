import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import ListHeader from "@/components/list/listHeader"

const myList = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <ListHeader/>
      }}/>
    </SafeAreaView>
  )
}

export default myList;