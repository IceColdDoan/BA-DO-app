import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Stack } from 'expo-router';
import ListHeader from "@/components/list/listHeader"
import AddTodo from '@/components/list/addTodo';

const myList = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => <ListHeader/>
      }}/>
      <AddTodo/>
      <Link href="/(modals)/dragScreen"> TEST </Link>

    </SafeAreaView>
  )
}

export default myList;