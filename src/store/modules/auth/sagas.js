import {call, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../Services/api';
import { setUsuario } from '../usuario/action';
import { loginFailure, loginSuccess, LOGIN_REQUEST } from './action';

export function* login(action) {
    try {
        console.log(action.payload);
        const response = yield call(() => api.post('/login', action.payload));
        yield put(loginSuccess(response.data.token));
        yield put (setUsuario(response.data.usuario));
    } catch(error) {
        yield put (loginFailure(error));
    }
}

export default all([
    takeLatest(LOGIN_REQUEST, login)
]);