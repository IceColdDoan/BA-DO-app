import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import headerStyle from "@/components/headerStyle"

const listHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={headerStyle}>
        My To-Do List
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

  },

  listHeader: {
    fontFamily: "Press2P",
    padding: 10,
    fontSize: 20,


  }
})
export default listHeader