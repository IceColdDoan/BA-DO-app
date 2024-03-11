import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarHeader from "@/components/calendar/calendarHeader"
import { Stack } from 'expo-router';
import Calendar from "@/components/calendar/calendar"

const calendar = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <CalendarHeader/>
      }}/>
      <Calendar/>
    </SafeAreaView>
  )
}

export default calendar;