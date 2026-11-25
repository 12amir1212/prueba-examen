import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { PaperProvider, Button, TextInput, Snackbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [contra, setContra] = useState('');
  const [missatge, modificaMissatge] = useState('');
  const [visible, modificaVisible] = useState(false);
  const [mostrarcontra, setMostrarContra] = useState(false);

  const [estatSB, modificaEstatSB] = useState({
    ocultaSB: false,
    textBoto: "Oculta Status Bar"
  });

  const botoPolsat = (unaCadenaText) => {
    console.log("Has polsat el boto " + unaCadenaText);

    if (usuario === '' || contra === '') {
      modificaMissatge('Has de completar els camps');
      modificaVisible(true);
      return;
    }

    estatSB.ocultaSB ?
      modificaEstatSB({ ocultaSB: false, textBoto: "Oculta Status Bar" }) :
      modificaEstatSB({ ocultaSB: true, textBoto: "Mostra Status Bar" });
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" hidden={estatSB.ocultaSB} />

        <Text>Benvinguts al mon de React Native</Text>

        <TextInput
          style={styles.input}
          label="Usuario"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={styles.input}
          label="Contra"
          value={contra}
          onChangeText={setContra}
          secureTextEntry={!mostrarcontra}
          right={
            <TextInput.Icon
              icon={mostrarcontra ? "eye-off" : "eye"}
              onPress={() => setMostrarContra(!mostrarcontra)}
            />
          }
        />

        <Button
          style={styles.boton}
          mode="contained"
          icon={estatSB.ocultaSB ? "eye" : "eye-off"}
          onPress={() => botoPolsat(estatSB.textBoto)}
        >
          {estatSB.textBoto}
        </Button>

        <Snackbar
          visible={visible}
          onDismiss={() => modificaVisible(false)}
        >
          {missatge}
        </Snackbar>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    gap: 20,
  },
  input: {
    width: '100%',
  },
  boton: {
    width: '100%',
  },
});