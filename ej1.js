import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
const App = () => {
const [estatSB, setEstatSB] = useState({ocultaSB:false, textBoto:"Pulsa para ocultar"});
const pulsar=(texto) => {
  console.log("Has pulsado" + texto);
  estatSB.ocultaSB?setEstatSB({ocultaSB:false, textBoto:"Pulsa para ocultar"}):setEstatSB({ocultaSB:true, textBoto:"Pulsa para mostrar"})
}

return (
  <View style={styles.container}>
    <Text>Hola esta es mi prueba</Text>
    <StatusBar hidden={estatSB.ocultaSB}/> 
    <Button title={estatSB.textBoto} onPress={()=>pulsar(estatSB.textBoto)}/>
    </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
export default App;