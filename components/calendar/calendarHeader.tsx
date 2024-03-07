import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import headerStyle from '../headerStyle'

const activityHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={headerStyle}>
        Calendar
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
})
export default activityHeader