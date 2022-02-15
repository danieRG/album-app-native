import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { Home } from './src/views/Home';
import { Album } from './src/views/Album';
import { ImageDetail } from './src/views/ImageDetail';

import { store } from './src/store/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
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

            <Stack.Screen 
              name="AlbumDetail" 
              component={Album}
              options={{
                title: 'Album Detail',
                headerStyle: {
                  backgroundColor: '#121A2B',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }          
              }} 
            />

            <Stack.Screen 
              name="ImageDetail"
              component={ImageDetail}
              options={{
                title: 'Image Detail',
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
    </Provider>

  );
};

export default App;
