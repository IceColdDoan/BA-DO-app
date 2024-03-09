import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const dragScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bottomRow}>
        <View style={styles.completedTask}>
          <Text>
            Completed Tasks!
          </Text>
        </View>
        <View style={styles.deleteTask}>
          <Text>
            Delete Tasks
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: "flex-end",
    alignContent: "flex-start",
    flexWrap: "wrap"
  },

  bottomRow: {
    flexDirection: "row",
    width: "100%",
  },

  completedTask: {
    backgroundColor: Colors.primary,
    height: 150,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  deleteTask: {
    backgroundColor: "red",
    height: 150,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    

  }
})

export default dragScreen