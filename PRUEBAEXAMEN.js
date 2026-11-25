import { ScrollView, StyleSheet } from 'react-native';
import Videojuego from './components/Videojuego';
import dades from './utils/dadesJocs.json';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      {dades.llistatJocs.map((jocs) => (
        <Videojuego
          key={jocs.nom}
          jocs={jocs}
        />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
    padding: 20,
  },
});