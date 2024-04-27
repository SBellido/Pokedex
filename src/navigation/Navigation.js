import React from "react";
import { Image } from "react-native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import ChallengeScreen from "../screens/ChallengeScreen";
import InstructionsScreen from "../screens/InstructionsScreen";
import AchievementsScreen from "../screens/AchievementsScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Challenge" 
        component={ChallengeScreen} 
        options={{
          tabBarLabel: "Desafío",
          tabBarIcon: ({ color, size }) => (
            <Icon name="arm" color={color} size={size} />
          ),
          headerTitle:"Desafío"
        }}
      />

      <Tab.Screen 
        name="Instructions" 
        component={InstructionsScreen} 
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderIdunIcon(),
          headerTitle:"Instrucciones"
        }}
      />

      <Tab.Screen 
        name="Achievements" 
        component={AchievementsScreen} 
        options={{
          tabBarLabel: "Logros",
          tabBarIcon: ({ color, size }) => (
            <Icon name="cup" color={color} size={size} />
          ),
          headerTitle:"Logros"
        }}
      />
    </Tab.Navigator>
  )
}


function renderIdunIcon() {
  return (
    <Image 
      source={require('../assests/idun_icon.png')}
      style={{ width: 75, height: 90, top: -20 }}
    />
  )
}