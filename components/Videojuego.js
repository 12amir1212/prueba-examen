import { View, Text, Image, StyleSheet } from 'react-native';
const videojuego = (props) => {
  return (
    <View style={styles.video}>
      <Text style={styles.nom}>
        {props.jocs.nom}
        </Text>
        <Text>{props.jocs.plataforma}</Text>
        <Text>{props.jocs.data}</Text>
       <Text>{props.jocs.preu}</Text> 
      {props.jocs.recomanat ? (
        <Image
          source={require('../assets/estrella.png')}
          style={styles.premium}
        />
      ): null}
    </View>
  );
};
const styles = StyleSheet.create({
  video: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  nom: {
    fontSize: 30,
    fontWeight: 'bold',
  },
    premium: {
    width: 100,
    height: 100,
  }


});

export default videojuego;