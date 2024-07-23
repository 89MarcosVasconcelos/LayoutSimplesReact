//import "./estilo.css"

import styled from "styled-components";
const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante'];
const Opcoes = styled.ul`
    display: flex;`;

const Opcao = styled.li`
font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    height: 100%;
    cursor: pointer;
    min-width: 120px;`;


function OpcoesHeader(){
    return(
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader;