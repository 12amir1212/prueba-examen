import { ScrollView, StyleSheet, View } from 'react-native';
import Jugador from './components/Jugador';
import dades from './utils/dadesJugador.json';
export default function App() {
    
  return (
    <ScrollView style={styles.container}>



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