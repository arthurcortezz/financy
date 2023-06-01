import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from '@rneui/themed';

export default function PaginaPrincipal() {
  const route = useRoute();
  const usuario = route.params?.usuario;
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: 200,
          top: 0,
          backgroundColor: '#9C29B2',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#9C29B2',
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.imagem}
              source={require('../../assets/tela-principal.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Olá,</Text>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {usuario.nome}
              </Text>
            </View>
          </View>

          <Image
            style={{ height: 43, width: 43 }}
            source={require('../../assets/notificacao-icone.png')}
          />
        </View>
      </View>
      <View
        style={{
          top: 160,
          position: 'absolute',
          borderRadius: 10,
          width: '90%',
          height: 200,
          backgroundColor: 'white',
        }}
      >
        <View style={{ padding: 20, flexDirection: 'column' }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: '#9C29B2',
                  height: 40,
                  width: 6,
                }}
              />
              <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={{ fontSize: 14 }}>Saldo geral</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                  R$ 0,00
                </Text>
              </View>
            </View>
            <Image
              style={{ marginRight: 10 }}
              source={require('../../assets/conteudo-sensivel.png')}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'black',
              width: '90%',
              height: 1,
            }}
          />
        </View>
        <Text style={{ marginTop: 10, marginLeft: 20, fontWeight: 800 }}>
          Minhas contas
        </Text>
        <View
          style={{
            marginVertical: 10,
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={{ width: 15, height: 15 }}
              source={require('../../assets/carteira.png')}
            />
            <Text style={{ marginLeft: 10, fontWeight: 800 }}>
              Conta inicial
            </Text>
          </View>
          <Text style={{ marginRight: 20, fontWeight: 800 }}>0,00</Text>
        </View>
        <Button
          buttonStyle={{
            marginBottom: 5,
            fontWeight: 800,
            alignSelf: 'center',
            borderRadius: 8,
            color: 'white',
            width: '50%',
            alignItems: 'center',
            height: 40,
            backgroundColor: '#9C29B2',
          }}
        >
          <Text style={{ fontWeight: 800, color: 'white' }}>
            Gerenciar contas
          </Text>
        </Button>
      </View>
      <View
        style={{
          top: 380,
          position: 'absolute',
          borderRadius: 10,
          width: '90%',
          height: 220,
          backgroundColor: 'white',
        }}
      >
        <View style={{ paddingTop: 20, flexDirection: 'column' }}>
          <Text style={{ fontSize: 14, marginLeft: 20, fontWeight: 800 }}>
            Cartões de crédito
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require('../../assets/cartoes.png')}
              />
              <Text style={{ fontSize: 14, fontWeight: 800 }}>
                Acompanhe suas faturas
              </Text>
              <Text style={{ marginTop: 10, fontSize: 14 }}>
                Tenha um histórico completo do
              </Text>
              <Text style={{ fontSize: 14, marginBottom: 10 }}>
                seu cartão de crédito.
              </Text>
              <Button
                titleStyle={{ color: 'black', marginHorizontal: 20 }}
                buttonStyle={{
                  alignItems: 'center',
                  height: 40,
                  borderColor: 'black',
                }}
                type="outline"
              >
                adicionar cartão
              </Button>
            </View>
          </View>
        </View>
      </View>
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
