import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function PaginaPrincipal() {
  const route = useRoute();
  const usuario = route.params?.usuario;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          style={styles.logo}
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
  );
}
const styles = StyleSheet.create({
  logo: {
    height: 90,
    width: 90,
    marginLeft: 10,
    marginTop: 20,
  },
});
