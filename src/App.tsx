import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container/intex";
import Rodape from "./components/Rodape";
import Titulo from "./components/Titulos";

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Area Administrativa</Titulo>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
