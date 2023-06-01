import { React } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  PaginaPrimeiroAcesso,
  PaginaCriarConta,
  PaginaLogin,
  PaginaPrincipal,
} from './pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PrimeiroAcesso" component={PaginaPrimeiroAcesso} />
        <Stack.Screen name="CriarConta" component={PaginaCriarConta} />
        <Stack.Screen name="Login" component={PaginaLogin} />
        <Stack.Screen name="Principal" component={PaginaPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
