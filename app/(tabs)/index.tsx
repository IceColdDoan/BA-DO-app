import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import HomeHeader from '@/components/homeHeader';

const index = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <HomeHeader/>
      }}/>
    </SafeAreaView>
  )
}

export default index;