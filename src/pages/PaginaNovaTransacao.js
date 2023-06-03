import { useEffect } from 'react';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { MenuInferior } from '../components';

let meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default function PaginaPrincipal({ navigation }) {
  const route = useRoute();
  const usuario = route.params?.usuario;

  useEffect(() => {
    if (!usuario) navigation.navigate('Login');
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: 140,
          top: 0,
          alignItems: 'center',
          backgroundColor: '#9C29B2',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            position: 'relative',
            marginTop: 60,
            paddingLeft: 40,
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          Adicionar nova transação
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          top: 140,
          position: 'absolute',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 20,
            marginTop: 15,
          }}
          onPress={() => {
            navigation.navigate('Receita', { usuario: usuario });
          }}
        >
          <Text
            style={{
              marginRight: 20,
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Receita
          </Text>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/receita.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 20,
            margin: 5,
          }}
          onPress={() => {}}
        >
          <Text
            style={{
              marginRight: 20,
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Despesa
          </Text>
          <Image
            style={{ width: 50, height: 50 }}
            source={require('../../assets/despesa.png')}
          />
        </TouchableOpacity>
      </View>

      <MenuInferior navigation={navigation} usuario={usuario} />
    </View>
  );
}
const styles = StyleSheet.create({
  imagem: {
    marginRight: 20,
    height: 90,
    width: 90,
    marginLeft: 10,
    marginTop: 20,
  },
  container: {
    position: 'relative',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
