import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import{ store,persistor} from './src/store'

import { View, Text} from 'react-native';
import MainStack from './src/navigator/MainStack';
import { NavigationContainer } from '@react-navigation/native';

export default function appDevNotes() {
 return (

<Provider store ={store}>
  <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
    <MainStack/>
    </NavigationContainer>

  </PersistGate>
</Provider>

  );
}