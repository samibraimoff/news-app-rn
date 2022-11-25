import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { HomeScreen } from "./screens/Home";
import { FullPostScreen } from "./screens/FullPost";
import { Navigation } from "./screens/Navigation";

export default function App() {
  return <Navigation />;
}
