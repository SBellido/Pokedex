import React from "react";
import { Image } from "react-native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import ChallengeScreen from "../screens/ChallengeScreen";
import InstructionsScreen from "../screens/InstructionsScreen";
import AchievementsScreen from "../screens/AchievementsScreen";
import PokedexScreen from "../screens/PokedexScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen 
        name="Challenge" 
        component={ChallengeScreen} 
        options={{
          tabBarLabel: "Desafío",
          tabBarIcon: ({ color, size }) => (
            <Icon name="arm" color={color} size={size} />
          ),
          headerTitle:"Desafío"
        }}
      /> */}
      
      <Tab.Screen 
        name="Pokedex" 
        component={PokedexScreen} 
        options={{
          tabBarLabel: "Pokemon",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitle:"Pokedex"
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
            <Icon name="heart" color={color} size={size} />
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