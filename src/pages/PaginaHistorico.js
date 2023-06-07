import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from '@rneui/themed';
import { useEffect } from 'react';

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
  const [mes, setMes] = useState('Junho');
  const [ano, setAno] = useState(2023);
  const route = useRoute();
  const usuario = route.params?.usuario;

  const definirMes = (direcao) => {
    const mesPosterior = meses[meses.indexOf(mes) + 1];
    const mesAnterior = meses[meses.indexOf(mes) - 1];
    if (direcao === 'voltar') {
      if (mes === 'Janeiro') {
        setAno(ano - 1);
        setMes('Dezembro');
      } else setMes(mesAnterior);
    }
    if (direcao === 'seguir') {
      if (mes === 'Dezembro') {
        setAno(ano + 1);
        setMes('Janeiro');
      } else setMes(mesPosterior);
    }
  };

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
          Histórico
        </Text>
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
          {ano}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          top: 140,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
        }}
      >
        <TouchableOpacity onPress={() => definirMes('voltar')}>
          <Image source={require('../../assets/seta-voltar.png')} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            width: '80%',
            justifyContent: 'space-between',
            paddingVertical: 5,
            flexDirection: 'row',
          }}
        >
          {meses.map((mesListagem, index) => {
            if (mes === mesListagem)
              return (
                <View
                  key={`${index}-meses`}
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                  <View style={{ width: '30%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: 800 }}>
                      {meses[index - 1]}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      backgroundColor: '#D9D9D9',
                      alignItems: 'center',
                      width: '40%',
                      padding: 10,
                      borderRadius: 20,
                    }}
                  >
                    <Text style={{ fontSize: 14, fontWeight: 800 }}>{mes}</Text>
                  </View>
                  <View style={{ alignItems: 'center', width: '30%' }}>
                    <Text style={{ fontSize: 14, fontWeight: 800 }}>
                      {meses[index + 1]}
                    </Text>
                  </View>
                </View>
              );
          })}
        </View>
        <TouchableOpacity onPress={() => definirMes('seguir')}>
          <Image source={require('../../assets/seta-proximo.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          top: 380,
          position: 'absolute',
          borderRadius: 10,
          width: '90%',
          height: 220,
        }}
      ></View>
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
