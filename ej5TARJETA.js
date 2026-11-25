import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Tarjeta from './components/Tarjeta';
const App = () => {
  return (
    <View>
      <Text>Nombre</Text>
      <Tarjeta/>
    </View>
  );
};


export default App;