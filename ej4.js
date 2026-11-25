import { View, Text, StyleSheet,TextInput } from "react-native";
import { useState } from "react";
const App = () => {
  const [online, setOnline] = useState(true);
  const [premium, setPremium] = useState(true);
  const onlines = () => {
    setOnline(!online);
  };
  const premiums = () => {
    setPremium(!premium);
  };
  return (
    <View style={styles.contenidor}>
    <View style={styles.tarjeta}>
       
      <Text style={styles.nom}>Hola soy Amir</Text>
      <Text style={styles.sub}>Mi profesion es hacker</Text>
      <Text style={{ fontSize: 10, color: '#888888', fontStyle: 'italic' }}>
        Membre des de: Novembre 2026
      </Text>
      <Text style={[styles.insignia, online ? styles.verde : styles.rojo]}>
        {online ? 'Connectat' : 'Desconnectat'}
      </Text>
      <Text style={[styles.textBase, styles.textDestacat]}>
        {premium ? 'premium' : 'nopremium'}
      </Text>
      
    </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  contenidor: {
  flex: 1,
  backgroundColor: "purple",
  justifyContent: "center",
  alignItems: "center",
  height:30,
},
  tarjeta: {
    width: '90%',
    maxWidth: 360,
    padding: 40,
    borderRadius: 16,
    elevation: 5,
    backgroundColor: 'white',

  },

  nom: {
    fontWeight: 'bold',
  },

  sub: {
    marginTop: 20,
  },


  insignia: {
    padding: 10,
    marginTop: 10,
  },

  verde: {
    backgroundColor: '#e8f5e9',
  },

  rojo: {
    backgroundColor: '#ffebee',
  },

  textBase: {
    color: '#888888',
  },

  textDestacat: {
    color: 'red',
  },
});

export default App;
