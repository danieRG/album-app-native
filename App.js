import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { Home } from './src/views/Home';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#121A2B',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }          
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
