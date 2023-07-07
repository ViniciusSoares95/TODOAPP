import {call, put, all, takeLatest, delay} from 'redux-saga/effects';
import api from '../../../Services/api';
import { criarUsuarioFailure, criarUsuarioSuccess, CRIAR_USUARIO_REQUEST,} from './action';

export function* criarUsuario(action) {
    try {
       yield delay(2000);
        const response = yield call(() => api.post('/usuarios', action.payload.usuario));
        yield put(criarUsuarioSuccess(response.data));
    } catch(error) {
        yield put (criarUsuarioFailure(error));
    }
}

export default all([
    takeLatest(CRIAR_USUARIO_REQUEST, criarUsuario)
]);