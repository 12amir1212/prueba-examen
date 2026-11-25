import { View, Text, Image, StyleSheet } from 'react-native';
import { useState } from "react";
const Jugador = (props) => {

  return (
    <View style={styles.video}>
      <Text style={styles.nom}>
        Nombre: {props.jocs.nom}
        </Text>
        <Text>Edad: {props.jocs.edat}</Text>
        <Text>Posicion: {props.jocs.posicio}</Text>
       <Text>Numero Dorsal: {props.jocs.numero}</Text> 
      {props.jocs.capita ? (
        <Image
          source={require('../assets/capitan.png')}
          style={styles.premium}
        />
      ): null}
      <Text style={[styles.insignia, props.jocs.online ? styles.verde : styles.rojo]}>
        {props.jocs.online ? 'Connectat' : 'Desconnectat'}
      </Text>
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
  insignia: {
    borderRadius: 60,
    padding: 10,
    marginTop: 10,
  },
    verde: {
    backgroundColor: '#e8f5e9',
  },

  rojo: {
    backgroundColor: '#ffebee',
  },

  nom: {
    fontSize: 30,
    fontWeight: 'bold',
  },
    premium: {
    width: 60,
    height: 60,
  }


});

export default Jugador;