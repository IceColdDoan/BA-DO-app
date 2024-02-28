import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';

const login = () => {
  useWarmUpBrowser();

  return (
    <View style={ styles.container }>
      <TextInput> LOGIN HERE</TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ab773b",
    padding: 20,
    
  }
})
export default login