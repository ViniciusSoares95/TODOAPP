import { openDatabase } from 'react-native-sqlite-storage';
export const db = openDatabase(
    {
      name: 'tasks',
      location: 'default'
    }, 
    () => { }, 
    (error) => { console.log('erro conexao: ' + error)}
  )

export const tabelaExiste = () => {
    db.transaction(tx => {
      tx.executeSql(
        "select name from sqlite_master where type='table' and name='tasks'",
        [],
        (tx, result) => {
          if(result.rows.length > 0) {
            console.log('tasks existe');
          } else {
            console.log('a tabela nao existe')
          }
        },
        (error) => {
          console.log('erro: ' + error);
        }
      )
    })
  }
export const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        +"tasks "
        +"(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT,data TEXT,hora TEXT, status TEXT)",
        [],
        (tx, result) => {
          console.log(result);
        },
        (error) => {console.log(error)}
      )
    })
  }
export const addTarefa = async (tarefa) => {
await db.transaction(async (tx) => {
    console.log(tarefa);
    await tx.executeSql(
    "INSERT INTO tasks (descricao, data, hora, status) values (?,?,?,?);", 
    [tarefa.descricao, tarefa.data, tarefa.hora, tarefa.status], 
    (tx, result) => {
        console.log(result);
        return true;
    },
    (error) => { console.log(error); return false}
    );
})
}

export  const listarTarefas = async () => {
    await db.transaction(async (tx) => {
    await tx.executeSql(
    "SELECT * FROM tasks",
    [],
    (tx, resultado) => {
        let tarefasArray = [];
        var len = resultado.rows.length;
        if (len > 0) {
        for(let i = 0; i < len; i++) {
            let tarefa = resultado.rows.item(i);
            tarefasArray.push(tarefa);
        }
        return tarefasArray;
        }
    },
    (error) => {
        console.log(error);
        return [];
    }
    )
})
}
