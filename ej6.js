import { StyleSheet, Text, View,  } from 'react-native';
import {
  Provider as PaperProvider,
  TextInput,Button
} from 'react-native-paper';
const estil = 'upv';
const isAdmin = false;
const moduls2Dam = [
{ nom: 'DIN', professor: 'Manel', hores: 120 },
{ nom: 'ADA', professor: 'Roberto', hores: 120 },
{ nom: 'PMDM', professor: 'Paco', hores: 100 },
{ nom: 'PSP', professor: 'Roberto', hores: 60 },
{ nom: 'SGE', professor: 'Belén', hores: 100 },
{ nom: 'Anglés', professor: 'Caterina', hores: 40 },
{ nom: 'EIE', professor: 'Ana', hores: 60 },
];

const Inici = () => {
  return (
    <PaperProvider>
      {nom('AUGUSTO')}
      {dades(arr, estil)}
      {dades2(moduls2Dam)}
      {botonAdmin()}
    </PaperProvider>
  );
};

const nom = (textAMostrar) => {
  return <Text style={styles.nombre}>{textAMostrar}</Text>;
};

let arr = ['Email', 'Nom'];

const dades = (arr1, est) => {
  return arr1.map((element) => {
    return (
      <TextInput
        style={[styles.bloc, styles[est]]}
        label={element}
        placeholderTextColor={estil === 'florida' ? 'white' : 'orange'}
        textColor={estil === 'florida' ? 'white' : 'orange'}
      />
    );
  });
};
const dades2 = (arr2) => {
  return arr2.map((element, index) => {
    return (
      <View style={index % 2 === 0 ? styles.ej11 : styles.ej12}>
        <Text>{element.nom}</Text>
        <Text>{element.professor}</Text>
        <Text>{element.hores} hores</Text>
      </View>
    );
  });
};
const botonAdmin = () => {
  if (isAdmin === true) {
    return (
      <Button
        mode="contained"
        icon="format-list-bulleted"
        buttonColor="blue"
        textColor="white"
        
      >
        INFORME
      </Button>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  nombre: {
    padding: 10,
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
  },
  bloc: {
    marginTop: 10,
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
    ej11: {
    backgroundColor: '#F48FB1',
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
      ej12: {
    backgroundColor: '#F8BBD0',
    fontSize: 10,
    fontWeight: '600',
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default Inici;
