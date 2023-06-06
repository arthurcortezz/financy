import { React } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  PaginaPrimeiroAcesso,
  PaginaCriarConta,
  PaginaLogin,
  PaginaPrincipal,
  PaginaHistorico,
  PaginaNovaTransacao,
  PaginaReceita,
  PaginaDespesa,
} from './pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PrimeiroAcesso"
          component={PaginaPrimeiroAcesso}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CriarConta"
          component={PaginaCriarConta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={PaginaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Principal"
          component={PaginaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NovaTransacao"
          component={PaginaNovaTransacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Historico"
          component={PaginaHistorico}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receita"
          component={PaginaReceita}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Despesa"
          component={PaginaDespesa}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
