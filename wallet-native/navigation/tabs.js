import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import {Home, Scan } from "../screens"
import { COLORS, icons } from "../constansts"
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, {
    Path
} from 'react-native-svg'
import { isIphoneX } from 'react-native-iphone-x-helper'

const Tab = createBottomTabNavigator();


export default function tabs() {
  return (
    <Tab.Navigator
        >
            <Tab.Screen
                name="Home"
                component={Home}
                
            />
            <Tab.Screen
                name="Scan"
                component={Scan}
                
            />
            <Tab.Screen
                name="User"
                component={Home}
            />
        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})