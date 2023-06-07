import { Text, TextInput, View } from 'react-native';

export default function InputDescricao({ valor, setValor, nome }) {
  return (
    <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
        {nome}
      </Text>
      <TextInput
        valor={valor}
        onChangeText={(text) => setValor(text)}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: 'white',
          borderRadius: 10,
          paddingLeft: 10,
          marginTop: 10,
        }}
      />
    </View>
  );
}
