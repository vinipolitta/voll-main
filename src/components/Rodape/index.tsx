import styled from "styled-components";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import instagram from "./assets/instagram.png";
import whatsapp from "./assets/whatsapp.png";

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: #0B3B60;
  text-align: center;
`;

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%
  margin: 1em auto;
  `;

const ItemEstilizado = styled.li `
  list-style: none;
  display: flex; 
  justify-content: space-between;
  width: 10%;
`

function Rodape() {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <a href="https://www.exemplo.com">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.exemplo.com">
            <img src={google} alt="Google" />
          </a>
          <a href="https://www.exemplo.com">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.exemplo.com">
            <img src={whatsapp} alt="Whatsapp" />
          </a>
        </ItemEstilizado>
      </ListaEstilizada>

      <p>
        2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
      </p>
    </RodapeEstilizado>
  );
}

export default Rodape;
