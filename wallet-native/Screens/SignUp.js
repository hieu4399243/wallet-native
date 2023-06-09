import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    TextInput,
    Modal,
    FlatList,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient'


import { COLORS, SIZES, FONTS, icons, images }  from "../constansts";

export default function SignUp() {
  return (
    <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}
        >
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{ flex: 1 }}
            >
                
            </LinearGradient>
            
        </KeyboardAvoidingView>
  );
}
