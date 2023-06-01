import { Alert } from 'react-native';
import { React, useState } from 'react';
import Constants from 'expo-constants';
import { Button, Input } from '@rneui/themed';
import { Text, View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PaginaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const redirecionar = (pagina, usuario) => {
    navigation.navigate(pagina, usuario);
  };

  const entrar = async () => {
    const queryParams = new URLSearchParams({
      email: email,
      senha: senha,
    }).toString();

    try {
      const response = await fetch(
        `http://192.168.0.3:3001/conta/entrar?${queryParams}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Sucesso', `${data.mensagem}`);
        await AsyncStorage.setItem('usuario', JSON.stringify(data.retorno));
        redirecionar('Principal', { usuario: data.retorno });
      } else {
        Alert.alert('Ocorreu um erro', data.mensagem);
      }
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/tela-login.jpg')}
      />
      <Text style={styles.center.superior}>Acesse sua conta</Text>
      <View style={styles.input}>
        <Input
          style={{ marginTop: 30 }}
          placeholder="E-mail"
          onChangeText={(e) => setEmail(e)}
        />
        <Input
          style={{ marginTop: 10 }}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(e) => setSenha(e)}
        />
        <Text
          style={{
            textAlign: 'right',
            fontSize: 12,
            fontStyle: 'italic',
            color: 'gray',
            textDecorationLine: 'underline',
          }}
        >
          Esqueceu a senha
        </Text>
      </View>

      <View style={styles.button}>
        <Button radius={5} color="#9C29B2" onPress={() => entrar()}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 700,
            }}
          >
            Entrar
          </Text>
        </Button>
        <View
          style={{
            justifyContent: 'center',
            width: '100%',
            bacgroundColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'black',
              height: 1,
              width: '40%',
              marginTop: 10,
            }}
          />
          <Text style={{ margin: 10 }}>ou</Text>
          <View
            style={{
              backgroundColor: 'black',
              height: 1,
              width: '40%',
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../../assets/google.jpg')}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require('../../assets/facebook.jpg')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
  },
  center: {
    superior: {
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
  logo: {
    height: 189,
    width: 189,
  },
  button: {
    marginTop: '20%',
    height: 128,
    width: '80%',
  },
  container: {
    width: '100%',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
