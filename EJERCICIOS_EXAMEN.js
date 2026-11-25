
import { StyleSheet, ScrollView, View, Button, Text } from 'react-native';
import Jugador from './components/Jugador';
import { useState } from 'react';
import {TextInput } from 'react-native-paper';


import dades from './utils/dadesJugador.json';
export default function App() {
    const [estatSB, setEstatSB] = useState({ocultaSB:false, textBoto:"Entrenamiento parado"});
      const [equipo, setEquipo] = useState('');
    const pulsar=(texto) => {
  console.log("Has pulsado" + texto);
  estatSB.ocultaSB?setEstatSB({ocultaSB:false, textBoto:"Entrenamiento parado"}):setEstatSB({ocultaSB:true, textBoto:"Entrenamiento iniciado"})
}
  return (
    <ScrollView style={styles.container}>

<Button title={estatSB.textBoto} onPress={()=>pulsar(estatSB.textBoto)}/>
       <TextInput
          style={styles.input}
          label="Nombre EQUIPO"
          value={equipo}
   onChangeText={(texto) => setEquipo(texto)}
   
/>
<Text style={{color: 'white', fontSize:20}}>Equipo: {equipo}</Text>

      {dades.llistatJugadors.map((jocs,index) => 
      <View key={jocs.nom} style={index % 2 === 0 ? styles.ej11 : styles.ej12}>
        <Jugador
          jocs={jocs}
        />
        
      </View>)}




    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    padding: 20,
  },
  input: {
  backgroundColor: 'white',
},
      ej11: {
    backgroundColor: '#f10050',
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
      ej12: {
    backgroundColor: '#4e192c',
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
});