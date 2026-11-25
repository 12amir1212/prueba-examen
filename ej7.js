
import { ScrollView, StyleSheet } from 'react-native';
import Targeta from './components/Targeta';
import dades from './utils/dadesUsuaris.json';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {dades.llistatUsuaris.map((usuari) => (
        <Targeta
          key={usuari.nomUsuari}
          usuari={usuari}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
