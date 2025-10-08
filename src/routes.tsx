import { JSX } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from './appConfig';
import PHome from './pages/PHome/PHome';
import PLogin from './pages/PLogin/PLogin';
import PListaAlunos from './pages/PListagem/PListaAlunos/PListaAlunos';
import PListaEmprestimos from './pages/PListagem/PListaEmprestimos/PListaEmprestimos';
import PListagemLivros from './pages/PListagem/PListaLivros/PListaLivros';
import PCadastroAluno from './pages/PCadastro/PCadastroAluno/PCadastroAluno';
import PCadastroLivro from './pages/PCadastro/PCadastroLivro/PCadastroLivro';
import PCadastroEmprestimo from './pages/PCadastro/PCadastroEmprestimo/PCadastroEmprestimo';
import PAtualizaAluno from './pages/PAtualizacao/PAtualizacaoAluno/PAtualizacaoAluno';
import PAtualizaLivro from './pages/PAtualizacao/PAtualizacaoLivro/PAtualizacaoLivro';
import PAtualizaEmprestimo from './pages/PAtualizacao/PAtualizacaoEmprestimo/PAtualizacaoEmprestimo';

/**
 * Componente que irá lidar com todas as rotas da aplicação
 * @returns Um componente web para lidar com as rotas
 */
function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                {/* Quando a rota representada pela variável ROUTE_HOME é acessada, renderiza a página PHome */}
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome />} />
                {/* Quando a rota representada pela variável ROUTE_LOGIN é acessada, renderiza a página PLogin */}
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin />} />

                {/* Quando a rota representada pela variável ROUTE_LISTAGEM_ALUNOS é acessada, renderiza a página PListaAlunos */}
                <Route path={APP_ROUTES.ROUTE_LISTAGEM_ALUNOS} element={<PListaAlunos />} />
                {/* Quando a rota representada pela variável ROUTE_LISTAGEM_EMPRESTIMOS é acessada, renderiza a página PListaEmprestimos */}
                <Route path={APP_ROUTES.ROUTE_LISTAGEM_EMPRESTIMOS} element={<PListaEmprestimos />} />
                {/* Quando a rota representada pela variável ROUTE_LISTAGEM_LIVROS é acessada, renderiza a página PListagemLivros */}
                <Route path={APP_ROUTES.ROUTE_LISTAGEM_LIVROS} element={<PListagemLivros />} />
            
                <Route path={APP_ROUTES.ROUTE_CADASTRO_ALUNO} element={<PCadastroAluno />} />
                <Route path={APP_ROUTES.ROUTE_CADASTRO_LIVRO} element={<PCadastroLivro />} />
                <Route path={APP_ROUTES.ROUTE_CADASTRO_EMPRESTIMO} element={<PCadastroEmprestimo />} />

                <Route path={APP_ROUTES.ROUTE_ATUALIZACAO_ALUNO} element={<PAtualizaAluno />} />
                <Route path={APP_ROUTES.ROUTE_ATUALIZACAO_LIVRO} element={<PAtualizaLivro />} />
                <Route path={APP_ROUTES.ROUTE_ATUALIZACAO_EMPRESTIMO} element={<PAtualizaEmprestimo />} />



            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;