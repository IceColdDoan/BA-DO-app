import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import HomeHeader from '@/components/index/homeHeader';
import Tasks from '@/components/index/tasks';



const index = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <HomeHeader/>
      }}/>
      <Tasks/>
    </SafeAreaView>
  )
}

export default index;