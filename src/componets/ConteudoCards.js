import { useState } from "react";
import styled from "styled-components";
import setaPlay from ".././assets/img/seta_play.png";
import setaVirar from ".././assets/img/seta_virar.png";
import iconeCerto from ".././assets/img/icone_certo.png";
import iconeErro from ".././assets/img/icone_erro.png";
import iconeQuase from ".././assets/img/icone_quase.png";

const VERDE = "#2FBE34";
const AMARELO = "#FF922E";
const VERMELHO = "#FF3030";

export default function ConteudoCards({ numeroPergunta }) {
  const [textoCard, setTextoCard] = useState(`Pergunta ${numeroPergunta}`);

  return (
    <StyledConteudoCards>
      <p>{textoCard}</p>
      <img src={setaPlay} />
    </StyledConteudoCards>
  );
}

const StyledConteudoCards = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
