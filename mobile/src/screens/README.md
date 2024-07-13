# Pantallas de la Aplicación Móvil

Esta carpeta contiene los archivos `.tsx` que definen las pantallas de la aplicación móvil. Cada archivo representa una pantalla diferente de la aplicación, como la pantalla de inicio, la pantalla de perfil, etc.

## Archivos

- `HomeScreen.tsx`: Esta pantalla muestra la página de inicio de la aplicación.
- `ProfileScreen.tsx`: Esta pantalla muestra la información del perfil del usuario.
- `SettingsScreen.tsx`: Esta pantalla muestra la configuración de la aplicación.

## Navegación entre pantallas

La navegación entre pantallas se realiza utilizando la biblioteca de navegación de React Native. Se definen rutas y se utilizan navegadores y navegadores de pila para gestionar la navegación.

Por ejemplo, para navegar desde la pantalla de inicio a la pantalla de perfil, se puede utilizar el siguiente código:

```tsx
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootStack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <View>
      <Text>Pantalla de inicio</Text>
      <Button title="Ver perfil" onPress={handleProfilePress} />
    </View>
  );
};

export default HomeScreen;
```

En este ejemplo, se importa `StackNavigationProp` de `@react-navigation/stack` para definir el tipo de navegación de la pantalla de inicio. Luego, se utiliza `navigation.navigate` para navegar a la pantalla de perfil cuando se presiona el botón "Ver perfil".

## Personalización de las pantallas

Las pantallas se pueden personalizar según los requisitos del proyecto. Se pueden agregar componentes, estilos y lógica adicional a cada pantalla para adaptarlas a las necesidades específicas de la aplicación.

## Referencias

- [Documentación de React Navigation](https://reactnavigation.org/docs/getting-started)
- [Documentación de React Native](https://reactnative.dev/docs/getting-started)

Recuerda consultar la documentación de React Navigation y React Native para obtener más información sobre cómo trabajar con pantallas y navegación en aplicaciones móviles.