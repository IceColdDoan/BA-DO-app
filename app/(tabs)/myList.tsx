import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import ListHeader from "@/components/list/listHeader"
import Todo from "@/components/list/todo"
import AddTodo from '@/components/list/addTodo';

const myList = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <ListHeader/>
      }}/>
      <AddTodo/>
    </SafeAreaView>
  )
}

export default myList;