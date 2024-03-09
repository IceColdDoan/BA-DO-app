import React from 'react';
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
            fontFamily: "Press2P",
            fontSize: 8,
        },
        
        
    }}>
        <Tabs.Screen
            name="calendar"
            options={{
                tabBarLabel: "Calendar",
                tabBarIcon: ({ color, size }) => 
                    <Ionicons name="calendar"color={color} size={size}/>

            }}
        />
        
        <Tabs.Screen
            name="myList"
            options={{
                tabBarLabel: "My Tasks",
                tabBarIcon: ({ color, size }) =>
                    <Ionicons name="list" color={color} size={size}/> 

            }}
        />
        
        <Tabs.Screen
            name="index"
            options={{
                tabBarLabel: "Home",
                tabBarIcon: ( { color , size }) => 
                <Ionicons name="home" color={color} size={size}/> 
            }}
        />
        <Tabs.Screen
            name="friends"
            options={{
                tabBarLabel: "Friends",
                tabBarIcon: ({ color, size }) =>
                    <Ionicons name="people" color={color} size={size}/>
            }}
        />

        <Tabs.Screen
            name="activity"
            options={{
                tabBarLabel: "Activity",
                tabBarIcon: ({ color, size}) =>
                    <Ionicons name="bulb" color={color} size={size}/>,
            }}
        />

    </Tabs>
  )
}

export default Layout