import { SERVER_CFG, APP_ROUTES } from '../appConfig';

class UsuarioRequests {
    private serverUrl: string;
    private routeCadastroUsuario: string;

    /**
     * Construtor das rotas e do endereço do servidor
     */
    constructor() {
        // endereço do servidor
        this.serverUrl = SERVER_CFG.SERVER_URL;
        // rota do servidor
        this.routeCadastroUsuario = SERVER_CFG.ENDPOINT_CADASTRO_USUARIO;
    }

    /**
     * Função de envio de formulário do aluno
     */
    async enviarFormularioUsuario (formulario: any): Promise<boolean> {
        const token = localStorage.getItem('token'); //pegar token

        const formDataToSend = new FormData();
        formDataToSend.append('nome', formulario.nome);
        formDataToSend.append('username', formulario.username);
        formDataToSend.append('email', formulario.email);
        formDataToSend.append('senha', formulario.senha);
        
        try {
            const respostaAPI = await fetch(`${this.serverUrl}${this.routeCadastroUsuario}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${token}`
                },
                body: formulario
            });

            if(!respostaAPI.ok) {
                throw new Error('Erro ao fazer requisição com o servidor.');
            }

            return true;
        } catch (error) {
            console.error(`Erro ao enviar o formulário. ${error}`);
            return false;
        }
    }
    
}

export default new UsuarioRequests();