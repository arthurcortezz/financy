import { View, Image, TouchableOpacity } from 'react-native';

export default function MenuInferior({ navigation, usuario }) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        height: 70,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('Principal', { usuario: usuario })}
      >
        <Image source={require('../../assets/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Historico', { usuario: usuario })}
      >
        <Image source={require('../../assets/transacoes.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NovaTransacao', { usuario: usuario })
        }
      >
        <Image source={require('../../assets/nova-transacao.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Relatorios', { usuario: usuario })}
      >
        <Image source={require('../../assets/relatorios.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Transacoes', { usuario: usuario })}
      >
        <Image source={require('../../assets/porquinho.png')} />
      </TouchableOpacity>
    </View>
  );
}
