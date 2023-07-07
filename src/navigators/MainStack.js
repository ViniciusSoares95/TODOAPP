import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../pages/LoginScreen';
import CadastroScreen from '../pages/CadastroScreen';
import HomeScreen from '../pages/HomeScreen';
import CadastroTarefaScreen from '../pages/CadastroTarefaScreen';
import ViewTarefaScreen from '../pages/ViewTarefaScreen';
import Usuarios from '../pages/Usuarios'
import { getData } from '../Services/local';
import { useSelector, useDispatch } from "react-redux";
const MainStack = createNativeStackNavigator();

/* const getIsSignedIn = () => {
  const token = getData('@login_token');
  if(token)
    return false;
  else  
    return false;  
} */

const MainStackNavigator = () => {
     //get async store para retornar o token
     /* const isSignedIn = getIsSignedIn();
     console.log(isSignedIn); */
     const dispatch = useDispatch();
    const auth = useSelector(({auth}) => auth);
    console.log(auth);
     return (
         <MainStack.Navigator
             initialRouteName="HomeScreen"
         >
             {auth.isAuthenticated ? (
                 <>
                     <MainStack.Screen
                         options={{
                             headerShown: false
                         }}
                         name="HomeScreen" component={HomeScreen} />
                     <MainStack.Screen
                         name="CadastroTarefaScreen" component={CadastroTarefaScreen} />

                    <MainStack.Screen
                         name="Usuarios" component={Usuarios} />   
                     <MainStack.Screen
                         options={{
 
                             headerShown: false
                         }}
                         name="ViewTarefaScreen" component={ViewTarefaScreen} />
                 </>
             ) : (
                 <>
                     <MainStack.Screen
                         options={{
                             title: 'Inicio',
                             headerStyle: { backgroundColor: 'blue' },
                             headerTitleStyle: { color: '#FFF', fontWeight: "bold" },
                             headerTitleAlign: 'center',
                             headerShown: false
                         }}
                         name="LoginScreen" component={LoginScreen} />
                     <MainStack.Screen
                         name="CadastroScreen" component={CadastroScreen} />
                 </>
             )}
         </MainStack.Navigator>
     )
 }
export default MainStackNavigator;
