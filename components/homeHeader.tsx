import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const homeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        BA-DO! Tasks
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerText: {
        alignSelf: "center",
        fontFamily: "Press2P"
    }
     
})

export default homeHeader;