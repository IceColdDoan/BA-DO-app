import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarHeader from "@/components/calendar/calendarHeader"
import { Stack } from 'expo-router';

const calendar = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <CalendarHeader/>
      }}/>
    </SafeAreaView>
  )
}

export default calendar;