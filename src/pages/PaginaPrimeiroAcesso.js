import * as React from 'react';
import { Button } from '@rneui/themed';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function PaginaPrimeiroAcesso({ navigation }) {
  const redirecionar = (pagina) => {
    navigation.navigate(pagina);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/tela-inicial.png')}
      />
      <View style={styles.center}>
        <Text style={styles.center.superior}>Você está no</Text>
        <Text style={styles.center.superior}>lugar certo</Text>
        <View style={styles.center.inferiorDiv}>
          <Text style={styles.center.inferior}>Não perca tempo, organize</Text>
          <Text style={styles.center.inferior}>
            seus gastos e controle suas
          </Text>
          <Text style={styles.center.inferior}>finanças.</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          radius={5}
          color="#9C29B2"
          onPress={() => redirecionar('CriarConta')}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              width: 100,
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Criar conta
          </Text>
        </Button>
        <Button
          radius={5}
          color="transparent"
          onPress={() => redirecionar('Login')}
        >
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              width: 100,
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Fazer login
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    width: '100%',
    inferiorDiv: {
      marginTop: 20,
    },
    superior: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    inferior: {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'medium',
    },
  },
  logo: {
    height: 297,
    width: 320,
  },
  button: {
    width: '80%',
    marginTop: 50,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
