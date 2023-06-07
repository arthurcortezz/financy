import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function InputDescricao({ valor, setValor, nome, options }) {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 110,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
        {nome}
      </Text>
      <Picker
        style={{ width: '100%', backgroundColor: 'white', borderRadius: 110 }}
        selectedValue={valor}
        onValueChange={(itemValue) => setValor(itemValue)}
      >
        {options.map((item, index) => {
          return (
            <Picker.Item
              key={`${index}-input-select`}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Picker>
    </View>
  );
}
