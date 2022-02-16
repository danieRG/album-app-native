import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import { Home } from './src/views/Home';
import { Album } from './src/views/Album';
import { ImageDetail } from './src/views/ImageDetail';

import { store, persistor } from './src/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';;

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                  title: 'Album List',
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
      </PersistGate>
    </Provider>

  );
};

export default App;
