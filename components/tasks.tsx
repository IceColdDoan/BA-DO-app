import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type todoTasks = {
  name: string;
};

const possibleTasks = [
  "take a cold shower",
  "go on a 15 min jog",
  "crank out 20 push ups",
  "learn a fun fact",
  "meditate for 20 mins",
  "read a book for 20 mins",
]

const switchIndex = (myArray: string[], index: number): string[] => {
  let temp = myArray[myArray.length - 1]
  myArray[myArray.length - 1] = myArray[index]
  myArray[index] = temp

  return myArray;
}

const generateAllTasks = () => {
  const cpyTasks = [...possibleTasks]
  const tasks = []

  for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * cpyTasks.length)
    let task = cpyTasks[index] 
    tasks.push(<Text key={i}>{task}</Text>)  
    switchIndex(cpyTasks, index)
    cpyTasks.pop()
  }

  return tasks;
}   

const tasks = () => {
  const generatedTasks = generateAllTasks()
  return (
    <View>
      {generatedTasks}
    </View>
  )
}

const styles = StyleSheet.create({

})

export default tasks