import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const community = () => {

  return (
    <View>
      <Link href={"/(modals)/login"}> Login </Link>
      <Link href="/(tabs)/activities/breathing">etc</Link>
    </View>
  )
}

export default community;