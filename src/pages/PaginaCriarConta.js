import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function PaginaCriarConta({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const redirecionar = (pagina) => {
    navigation.navigate(pagina);
  };

  let erro = false;

  const validarEmail = () => {
    // Expressão regular para validar o formato do e-mail
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(email)) {
      if (senha === confirmarSenha) {
        return true;
      }
    } else {
      Alert.alert('Erro', 'Digite um e-mail válido');
      erro = true;
    }
  };
  const validarSenha = () => {
    if (senha === confirmarSenha) {
      if (senha.length >= 8) {
        return true;
      } else {
        erro = true;
        Alert.alert('Erro', 'A senha deve conter no mínimo 8 caracteres');
      }
    } else {
      erro = true;
      Alert.alert('Erro', 'As senhas não coincidem');
    }
  };

  const registrar = async () => {
    const response = await fetch('http://192.168.0.3:3001/conta/cadastrar', {
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
    });

    const data = await response.json();
    if (response.ok) {
      Alert.alert('Sucesso', `${data.mensagem}`);
      redirecionar('Login');
    } else {
      Alert.alert('Ocorreu um erro', data.mensagem);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/tela-cadastro.png')}
      />
      <View style={styles.center}>
        <Text style={styles.center.superior}>Crie já sua conta e tenha </Text>
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
    width: '100%',
    flex: 1,
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
