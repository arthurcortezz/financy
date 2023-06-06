import { useEffect } from 'react';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { MenuInferior } from '../components';
import { Input } from '@rneui/themed';

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
          backgroundColor: '#6FEB8A',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        <View style={{ position: 'relative', width: '100%' }}>
          <Text
            style={{
              top:10,
              position: 'absolute',
              paddingLeft: 20,
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Adicionar receita
          </Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 20,
              width: 180,
            }}
          >
            <Image source={require('../../assets/editar-texto.png')} style={{
              top: 8,
              left: 120
            }}/>
            <Input
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
              }}
            >
              0,00
            </Input>
          </View>
        </View>
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
