import { View, Text, TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Link, Stack, router } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActivityHeader from "@/components/activity/activityHeader"
import { ResizeMode, Video } from "expo-av"
import vid from "@/assets/videos/boxBreathing.mp4"
import vid2 from "@/assets/videos/yoga.mp4"

const activity = () => {
  const { isSignedIn, signOut } = useAuth();
  const video = React.useRef(null);
  
  return (
    <SafeAreaView>
      <Stack.Screen options={{
        header: () => [<ActivityHeader key={0}/>, <Pressable key={1} onPress={() => router.navigate("(modals)/login")}><MaterialCommunityIcons name="face-man-profile" style={{fontSize: 50, alignSelf: "flex-end"}}/></Pressable>]
      }}/>
      {isSignedIn ? <Pressable onPress={() => signOut()}><Text style={{textAlign: "center"}}>Sign Out</Text></Pressable> : null}
      <View style={styles.vidContainer}>
        <View>
          <Text style={{textAlign: "center"}}> Box Breathing Exercise </Text>
          <Video
            source={vid}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            useNativeControls
            resizeMode={ResizeMode.COVER}
            style={styles.video}
            /> 
        </View>
        <View>
          <Text style={{textAlign: "center"}}> 10 min yoga </Text>
        <Video
          source={vid2}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          style={styles.video}
          /> 
        </View>
      </View>
    </SafeAreaView>
  )
} 

const styles = StyleSheet.create({
  vidContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },

  video: {
    height: 200,
    width: 170,

  },
})
export default activity;