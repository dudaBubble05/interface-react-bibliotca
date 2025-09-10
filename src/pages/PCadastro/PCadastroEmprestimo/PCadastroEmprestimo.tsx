import Cabecalho from "../../../components/Cabecalho/Cabecalho";
import Rodape from "../../../components/Rodape/Rodape";
import FormEmprestimo from "../../../components/Formularios/FormEmprestimo/FormEmprestimo";
import { JSX } from "react";

function PCadastroEmprestimo(): JSX.Element {
    return (
        <div className="pagina-grid">
            <Cabecalho />
            <FormEmprestimo />
            <Rodape />
        </div>
    );
}

export default PCadastroEmprestimo;