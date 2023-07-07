import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';
import store from './src/store'
import { Provider } from 'react-redux';
const App = () => {
 
  return(
    <Provider store={store}>
    <NavigationContainer>
       <MainStack />   
    </NavigationContainer>
    </Provider>
  )
}

export default App;