import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, StatusBar, StyleSheet, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';
import {db, createTable, listarTarefas, tabelaExiste } from "./db";
import ConsomeApi from "../Services/crud";
import ModalLoading from './ModalSpinner';
import {listarTarefaRequest, updateTarefaRequest, deleteTarefaRequest} from '../store/modules/tarefa/actions'
import { useDispatch, useSelector } from 'react-redux';
/*const DATA = [
    {
      id: 'tarefaUm',
      title: 'Estudar PHP',
      date: '22/05/2023'
    },
    {
      id: 'tarefaDois',
      title: 'Estudar inglês',
      date: '22/05/2023'
    },
    {
      id: 'tarefaTres',
      title: 'Praticar exercicios',
      date: '22/05/2023'
    },
  
   
    
  ];*/

  const ItemList = ({tarefa }) => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    function excluirTarefa() {
      dispatch(deleteTarefaRequest(tarefa.id));
      navigation.push('HomeScreen');
    }
   /*  function deletarTarefas(){
      ConsomeApi.deletarTarefas(tarefa.id)
      navigation.push('HomeScreen')
    } */
    return (
      <TouchableOpacity onPress={() => navigation.push('ViewTarefaScreen',{tarefa: tarefa})}>
        <View style={{flex:1, marginTop: 5,}}>
          <View style={{flex: 1, padding: 20, marginVertical: 3, marginHorizontal: 10, backgroundColor: '#74e0cc'}} >
            <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#000' }}>{tarefa.descricao}</Text>
            <Text style={{fontSize: 19, fontWeight: 'bold', color: '#000' }}>{tarefa.data}</Text>
          <View style={{ position: 'absolute', height: 50, marginLeft: 300, marginTop: 22}}>
            <Icon.Button name='trash-2' backgroundColor='#74e0cc' size={30} onPress={() => excluirTarefa()}/>
          </View> 
        </View>
        </View>
      </TouchableOpacity>
    )
  }
  

  const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch(); //dispara acoes do reducer  
    const tarefa = useSelector(({tarefa}) => tarefa); 
    const usuario = useSelector(({usuario}) => usuario); 
    console.log(usuario);
    //observando o reducer global o objeto q ta la na memoria qualquer 
    //alteracao ja atualiza o componente
    const [novaTarefa, setnovaTarefa] = useState('ESTUDAR REACT NATIVE');
    const [tarefas, setTarefas] = useState([]);
    useEffect(() => { 
      /* createTable();
      tabelaExiste();
      listarTarefas(); 
      ConsomeApi.listarTarefas()
        .then((dados) => {
          console.log(dados);
          setTarefas(dados);
        })
        .catch() */
      dispatch(listarTarefaRequest());
    }, []);

    if(tarefa.loading) {
      return <ModalLoading/>
    }
    
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ position: 'absolute' ,marginBottom: 25,  alignItems:'flex-start', marginLeft: 20}}>
          <TouchableOpacity style={{width: 50}} onPress={() => navigation.push('Usuarios')}>
              <Icon.Button name='user' backgroundColor='#000' size={30}/>
              
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30, color: '#000', marginBottom: 50}}>
            Listas de tarefas
          </Text>
        </View>
        
        <FlatList
          data={tarefa?.tarefas}
          renderItem={({ item }) => <ItemList tarefa={item} />}
          keyExtractor={item => item.id}
          /*extraData={selectedId}*/
        />

        <View style={{marginBottom: 25,  alignItems:'flex-end', marginRight: 20}}>
          <TouchableOpacity style={{width: 58}}>
              <Icon.Button name='plus' backgroundColor='#000' size={40} onPress={() => navigation.push('CadastroTarefaScreen')}/>
              
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 22,
    },
  });

export default HomeScreen;
