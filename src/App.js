import Header from './componentes/Header';
//modifica o padrão do css normal para a aplicação de const js
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
//substitui o css padrão
const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);


`

function App() {
  //todo export precisa de um elemento html encapsuplador no conteúdo
  return (
    <AppConteiner>
     <Header />
     <Pesquisa />
     <UltimosLancamentos />
    </AppConteiner>
  );
}

export default App;
