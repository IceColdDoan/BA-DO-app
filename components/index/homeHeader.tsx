import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderStyle from "@/components/headerStyle" 

const homeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={HeaderStyle}>
        BA-DO! TASKS
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center"
    },


})

export default homeHeader;