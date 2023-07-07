import { combineReducers } from "redux";
import auth from './auth/reducer';
import usuario from './usuario/reducer';
import tarefa from './tarefa/reducers'
export default combineReducers({
    auth,
    usuario,
    tarefa
});