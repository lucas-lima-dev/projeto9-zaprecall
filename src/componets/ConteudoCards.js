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

export default function ConteudoCards({
  numeroPergunta,
  cards: { question, answer },
}) {
  const [textoCard, setTextoCard] = useState(`Pergunta ${numeroPergunta}`);
  const [estaAberto, setEstaAberto] = useState(false);
  const [dataTestImg, setDataTestImg] = useState("play-btn");

  return (
    <StyledConteudoCards data-test="flashcard">
      <p data-test="flashcard-text">{textoCard}</p>
      <img src={setaPlay} alt={setaPlay} data-test={dataTestImg} />
    </StyledConteudoCards>
  );
}

const StyleCartaFechada = `
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
  cursor: pointer;

`;
const StyleCartaAberta = `
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

`;

const StyledConteudoCards = styled.div`
  ${StyleCartaFechada}

  & p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;

const ContainerBotoes = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

`
const StyledBotoes = styled.button`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: blue;
  border-radius: 5px;
  
  padding:5px;
`