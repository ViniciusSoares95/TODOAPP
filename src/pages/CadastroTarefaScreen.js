import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {addTarefa} from './db';
import ConsomeApi from '../Services/crud';
import {
  criarTarefaRequest,
  deleteTarefaRequest,
  updateTarefaRequest,
  CRIAR_TAREFA_FAILURE,
} from '../store/modules/tarefa/actions';
import {useSelector, useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
const CadastroTarefaScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const tarefa = useSelector(({tarefa}) => tarefa);

  const [novaTarefa, setNovaTarefa] = useState({
    descricao: '',

    data: '',

    hora: '',

    status: 'false',
  });

  function handleChange(text, nomeInput) {
    setNovaTarefa({...novaTarefa, [nomeInput]: text});
  }

  function cadastrarTarefa() {
    /*addTarefa(novaTarefa);//inseri no sqlite local




   ConsomeApi.criarTarefa(novaTarefa) //insere na api




   navigation.push('HomeScreen');*/

    if (novaTarefa.id > 0)
      dispatch(updateTarefaRequest(novaTarefa.id, novaTarefa));
    else {
      console.log('aqui');
      dispatch(criarTarefaRequest(novaTarefa));
    
    }

    if (tarefa.tarefas) 
      navigation.push('HomeScreen');
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: '#000', marginBottom: 50}}>
        Cadastrar Tarefa
      </Text>

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor="#000"
        placeholder="Descrição da tarefa"
        value={novaTarefa.descricao}
        onChangeText={text => handleChange(text, 'descricao')}
      />

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor="#000"
        placeholder="data"
        value={novaTarefa.data}
        onChangeText={text => handleChange(text, 'data')}
      />

      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholderTextColor="#000"
        placeholder="hora"
        value={novaTarefa.hora}
        onChangeText={text => handleChange(text, 'hora')}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#8a2be2',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => cadastrarTarefa()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CadastroTarefaScreen;
