import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  TouchableOpacityComponent,
} from 'react-native';
import ConsomeApi from '../Services/crud';
import { storeData } from '../Services/local';
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from '../store/modules/auth/action';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  //manipular os dados do formulario dos inputs
  const [dados, setDados] = useState({email: '', senha: ''});
  const handleChange = (text, nomeInput) => {
    setDados({...dados,[nomeInput]: text});
  }
  //acao de fazer login ao clicar no botao entrar
  const handleLogin = () => {
    /*ConsomeApi.login(dados)
    .then((token) => {
      //console.log(token);
      storeData('@login_token',token)
    })
    .catch(error => console.log(error));*/
    console.log('aqui');
    dispatch(loginRequest(dados.email,dados.senha));
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', marginBottom: 50}}>
        Login ToDoApp
      </Text>

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholder="e-mail"
        keyboardType="email-address"
        value={dados.email}
        onChangeText={(text) => handleChange(text, 'email')}
      />

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholder="senha"
        secureTextEntry={true}
        value={dados.senha}
        onChangeText={(text) => handleChange(text, 'senha')}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#900',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleLogin()}>  
        <Text style={{fontSize: 16, color: '#FFF'}}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '28%',
          height: 50,
          backgroundColor: '#dcdcdc',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}
        onPress={() => navigation.push('CadastroScreen')}>
        <Text style={{fontSize: 16, color: '#1e90ff'}}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}
export default LoginScreen;
