import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

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

  const [valor, setValor] = useState(0);
  const [valorFormatado, setValorFormatado] = useState(0);
  const [descricao, setDescricao] = useState();
  const [categoria, setCategoria] = useState();
  const [data, setData] = useState();

  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: 140,
          top: 0,
          alignItems: 'center',
          backgroundColor: '#EA5454',
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
                fontSize: 30,
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

      <View style={{flex: 1, flexDirection: 'column',  alignItems: 'stretch'}}>
        <Input
          style={{ marginTop: 200}}
          placeholder="Adicionar descrição"
          secureTextEntry={true}
          onChangeText={(e) => setDescricao(e)}
        />

        <Input
          placeholder="Categoria"
          secureTextEntry={true}
          onChangeText={(e) => setCategoria(e)}
        />

        <Input
          placeholder="Data"
          secureTextEntry={true}
          onChangeText={(e) => setData(e)}
        />
      </View>

      <MenuInferior navigation={navigation} usuario={usuario}/>
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