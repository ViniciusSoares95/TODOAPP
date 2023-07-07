import React, {useEffect, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { criarUsuarioRequest } from '../store/modules/usuario/action';
import ModalSpinner from './ModalSpinner' 

function CadastroScreen({navigation}) {

  const dispatch = useDispatch();
  const usuario = useSelector(({usuario}) => usuario);
  const [dados, setDados] = useState({nome: '', email: '', senha: ''});
  const handleChange = (text, nomeInput) => {
    setDados({...dados,[nomeInput]: text});
  }
  //acao de fazer login ao clicar no botao entrar
  const handleCadastrar = () => {
    dispatch(criarUsuarioRequest(dados, navigation));
  }

  if(usuario.loading) {
    return <ModalSpinner />
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', marginBottom: 50}}>
        Cadastra-se ToDoApp
      </Text>

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholder="Nome"
        value={dados.nome}
        onChangeText={(text) => handleChange(text, 'nome')}
      />

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
        onPress={{}}>
        <Text
          style={{fontSize: 16, color: '#FFF'}}
          onPress={() => handleCadastrar()}> 
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default CadastroScreen;
