import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const homeHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>
        BA-DO! TASKS
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center"
    },

    headerText: {
        paddingTop: 10,
        fontFamily: "Press2P",
        fontSize: 20,
    }
     
})

export default homeHeader;