import api from "./api";

const ConsomeApi = {
    async criarTarefa(tarefa) {
        try{
            const response = await api.post('/tarefas',tarefa);
            return response.data;
        } catch(error) {
            throw error;
        }
    },
    async listarTarefas() {
        try{
            const response = await api.get('/tarefas');
            return response.data.dados;
        } catch(error) {
            throw error;
        }
    },
    async alterarTarefas(id, tarefa) {
        try{
            const response = await api.put(`/tarefas/${id}`, tarefa);
            return response.data;
        } catch(error) {
            throw error;
        }
    },

    async exibirTarefas(id) {
        try{
            const response = await api.get(`/tarefas/${id}`);
            return response.data;
        } catch(error) {
            throw error;
        }
    },
    async deletarTarefas(id) {
        try{
            const response = await api.delete(`/tarefas/${id}`);
            return response.data;
        } catch(error) {
            throw error;
        }
    },

    async criarUsuarios(usuario) {
        try{
            const response = await api.post('/usuarios',usuario);
            return response.data;
        } catch(error) {
            throw error;
        }
    },
    async listarUsuarios() {
        try{
            const response = await api.get('/usuarios');
            return response.data.dados;
        } catch(error) {
            throw error;
        }
    },
    async alterarUsuarios(id, usuario) {
        try{
            const response = await api.put(`/usuarios/${id}`, usuario);
            return response.data;
        } catch(error) {
            throw error;
        }
    },

    async exibirUsuarios(id) {
        try{
            const response = await api.get(`/usuarios/${id}`);
            return response.data;
        } catch(error) {
            throw error;
        }
    },
    async deletarUsuarios(id) {
        try{
            const response = await api.delete(`/usuarios/${id}`);
            return response.data;
        } catch(error) {
            throw error;
        }
    },
    async login(usuario) {
        try {
            const response = await api.post(`/login`, usuario);
            return response.data;
        } catch(error) {
            throw error;
        }
    }
}



export default ConsomeApi;