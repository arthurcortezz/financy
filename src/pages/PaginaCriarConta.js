import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Input } from 'react-native';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function PaginaCriarConta({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const redirecionar = (pagina) => {
    navigation.navigate(pagina);
  };

  const registrar = async () => {

    setLoading(true);
    const response = await fetch(
      'https://financy-api.onrender.com/conta/cadastrar',
      {
        method: 'POST',
        body: JSON.stringify({
          nome,
          email,
          senha,
          confirmarSenha,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );


    const data = await response.json();
    if (response.ok) {
      Alert.alert('Sucesso', `${data.mensagem}`);
      redirecionar('Login');
      setLoading(false);
    } else {
      Alert.alert('Ocorreu um erro', data.mensagem);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#9C29B2" />
      ) : (
        <>
          <Image
            style={styles.logo}
            source={require('../../assets/tela-cadastro.png')}
          />
          <View style={styles.center}>
            <Text style={styles.center.superior}>
              Crie já sua conta e tenha{' '}
            </Text>
            <Text style={styles.center.superior}>mais organização </Text>
            <Text style={styles.center.superior}>financeira!</Text>
          </View>
          <View style={styles.input}>
            <Input placeholder="Nome" onChangeText={(e) => setNome(e)} />
            <Input placeholder="E-mail" onChangeText={(e) => setEmail(e)} />
            <Input
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(e) => setSenha(e)}
            />
            <Input
              placeholder="Confirmar senha"
              secureTextEntry={true}
              onChangeText={(e) => setConfirmarSenha(e)}
            />
          </View>
          <View style={styles.button}>
            <Button radius={5} color="#9C29B2" onPress={registrar}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  width: 100,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Registrar
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
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Já tenho uma conta
              </Text>
            </Button>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
  },
  center: {
    marginTop: 10,
    width: '100%',
    superior: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  },
  logo: {
    height: 120,
    width: 120,
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
