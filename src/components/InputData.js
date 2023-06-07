import { Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function InputDescricao({ valor, setValor, nome }) {
  return (
    <View style={{ width: '100%', paddingHorizontal: 20, marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
        {nome}
      </Text>
      <DatePicker
        style={{ width: 200 }}
        date={valor}
        format="DD-MM-YYYY"
        minDate="10-07-2019"
        maxDate="31-08-2019"
        onDateChange={(valor) => setValor(valor)}
      />
      <Text style={{ fontSize: 25 }}>{valor}</Text>
    </View>
  );
}
