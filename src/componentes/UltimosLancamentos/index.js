import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import imagemLivro from '../../imagens/livro2.png'
import CardRecomenda from '../CardRecomenda';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const ImgLivro = styled.img`
    width: 250px;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor={"#EB9B00"} tamanhoFonte="36px">Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <ImgLivro src={livro.src} alt={livro.nome}/>
                ))}
            </NovosLivrosContainer>
            <br/>
           <CardRecomenda 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
           />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos