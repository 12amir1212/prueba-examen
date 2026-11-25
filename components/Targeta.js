import { View, Text, Image, StyleSheet } from 'react-native';

const Targeta = (props) => {
  return (
    <View style={styles.targeta}>
      <Text style={styles.nom}>
        {props.usuari.nomUsuari}
      </Text>

      <Text>{props.usuari.rolUsuari}</Text>

      <Text>Registre: {props.usuari.dataRegistre}</Text>

      <Text>
        {props.usuari.esOnline ? '🟢 Connectat' : '🔴 Desconnectat'}
      </Text>

      {props.usuari.esPremium ? (
        <Image
          source={require('../assets/premium.png')}
          style={styles.premium}
        />
      ): null}
    </View>
  );
};

const styles = StyleSheet.create({
  targeta: {
    backgroundColor: '#eeeeee',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  nom: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  premium: {
    width: 100,
    height: 100,
  },
});

export default Targeta;