import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useEffect } from 'react';

import { MenuInferior } from '../components';
import { Button } from '@rneui/base';

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

export default function PaginaHistorico({ navigation }) {
  const route = useRoute();
  const usuario = route.params?.usuario;

  const [mes, setMes] = useState('Junho');
  const [ano, setAno] = useState(2023);
  const [loading, setLoading] = useState(false);
  const [lancamentos, setLancamentos] = useState([]);

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

  const listarLancamentos = async () => {
    try {
      const queryParams = new URLSearchParams({
        email: usuario.email,
      }).toString();

      const response = await fetch(
        `https://financy-api.onrender.com/lancamento/listarTodos?${queryParams}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setLancamentos(data.retorno);
        setLoading(false);
      } else {
        Alert.alert('Ocorreu um erro', data.mensagem);
        setLoading(false);
      }
    } catch (error) {
      Alert.alert('Ocorreu um erro', error.mensagem);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (!usuario) navigation.navigate('Login');
  // }, []);

  useEffect(() => {
    listarLancamentos();
  }, []);

  let count = 0;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#9C29B2" />
      ) : (
        <>
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
                        <Text style={{ fontSize: 14, fontWeight: 800 }}>
                          {mes}
                        </Text>
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
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              top: 200,
              position: 'absolute',
              width: '100%',
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                backgroundColor: 'white',
              }}
            >
              <View style={{ alignItems: 'center', width: '25%' }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                  }}
                >
                  DATA
                </Text>
              </View>
              <View style={{ alignItems: 'center', width: '25%' }}>
                <Text style={{ fontSize: 14, fontWeight: 800 }}>DESCRIÇÃO</Text>
              </View>
              <View style={{ alignItems: 'center', width: '25%' }}>
                <Text style={{ fontSize: 14, fontWeight: 800 }}>VALOR</Text>
              </View>
              <View style={{ alignItems: 'center', width: '25%' }}>
                <Text style={{ fontSize: 14, fontWeight: 800 }}>TIPO</Text>
              </View>
            </View>

            {lancamentos.map((lancamento, index) => {
              if (lancamento.mes && lancamento.mes.includes(mes)) {
                const topValue = 45 + count * 40;
                count++;
                return (
                  <View
                    key={`${index}-lancamentos`}
                    style={{
                      width: '100%',
                      position: 'absolute',
                      top: topValue,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      flexDirection: 'row',
                      backgroundColor: 'white',
                    }}
                  >
                    <View
                      style={{
                        alignItems: 'center',
                        width: '25%',
                      }}
                    >
                      <Text style={{ fontSize: 14, fontWeight: 800 }}>
                        {lancamento.dataLancamento}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '25%' }}>
                      <Text style={{ fontSize: 14, fontWeight: 800 }}>
                        {lancamento.descricao}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '25%' }}>
                      <Text style={{ fontSize: 14, fontWeight: 800 }}>
                        {lancamento.valor}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '25%' }}>
                      <Text style={{ fontSize: 14, fontWeight: 800 }}>
                        {lancamento.tipo}
                      </Text>
                    </View>
                  </View>
                );
              }
            })}
          </View>
          <MenuInferior navigation={navigation} usuario={usuario} />
        </>
      )}
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
