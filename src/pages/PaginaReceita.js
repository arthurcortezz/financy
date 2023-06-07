import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Button,
} from 'react-native';

import {
  MenuInferior,
  InputDescricao,
  InputSelect,
  InputData,
} from '../components';

export default function PaginaPrincipal({ navigation }) {
  const route = useRoute();
  const usuario = route.params?.usuario;

  const [dataLancamento, setDataLancamento] = useState('');
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [categoria, setCategoria] = useState('');
  const [loading, setLoading] = useState(false);
  const [valorFormatado, setValorFormatado] = useState('');
  const [open, setOpen] = useState(false);

  const enviar = async () => {
    setLoading(true);
    const response = await fetch(
      'http://192.168.0.3:3001/lancamento/cadastrar',
      {
        method: 'POST',
        body: JSON.stringify({
          valor: valorFormatado,
          dataLancamento,
          descricao,
          categoria,
          idUsuario: usuario._id,
          tipo: 'receita',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    if (response.ok) {
      Alert.alert('Sucesso', `${data.mensagem}`);
      navigation.navigate('NovaTransacao');
      setLoading(false);
    } else {
      Alert.alert('Ocorreu um erro', data.mensagem);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!usuario) navigation.navigate('Login');
  }, []);

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
              backgroundColor: '#6FEB8A',
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <TouchableWithoutFeedback
              style={{
                left: 10,
                justifyContent: 'space-between',
                position: 'relative',
                width: '100%',
              }}
            >
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  position: 'absolute',
                  width: '100%',
                }}
              >
                <Text
                  style={{
                    paddingLeft: 50,
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}
                >
                  Adicionar receita
                </Text>
                <View
                  style={{
                    paddingTop: 25,
                    paddingRight: 20,
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 0,
                  }}
                >
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require('../../assets/editar-texto.png')}
                  />
                  {/* <TextInputMask
                    style={{
                      fontSize: 20,
                      marginLeft: 10,
                      width: '100%',
                      color: 'white',
                    }}
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: 'R$',
                      suffixUnit: '',
                    }}
                    value={valor}
                    maxLength={18}
                    onChangeText={(text) => {
                      setValor(text);
                      text = text.replace('R$', '');
                      text = text.replace(',', '');
                      text = text.replace('.', '');
                      setValorFormatado(Number(text / 100));
                    }}
                  /> */}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              top: 140,
              width: '100%',
            }}
          >
            <ScrollView
              style={{
                marginBottom: 200,
                height: '100%',
              }}
            >
              <InputDescricao
                setValor={setDescricao}
                valor={descricao}
                nome={'Descrição'}
              />
              <InputSelect
                nome={'Categoria'}
                valor={categoria}
                setValor={setCategoria}
                options={[
                  { label: 'Salário', value: 'salario' },
                  { label: 'Investimentos', value: 'investimentos' },
                  { label: 'Empréstimos', value: 'emprestimos' },
                ]}
              />
              <InputData valor={dataLancamento} setValor={setDataLancamento} />
              <TouchableOpacity
                style={{ alignItems: 'center', marginVertical: 30 }}
                onPress={() => enviar()}
              >
                <Image source={require('../../assets/enviar.png')} />
              </TouchableOpacity>
            </ScrollView>
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
