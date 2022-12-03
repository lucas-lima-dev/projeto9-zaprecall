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
  card: { question, answer },
  numCardsRespondidos,
  setNumCardsRespondidos
}) {
  const [textoCard, setTextoCard] = useState(`Pergunta ${numeroPergunta}`);
  const [estaAberto, setEstaAberto] = useState(false);
  const [estaRespondida, setEstaRespondida] = useState(false);
  const [estaFinalizada, setEstaFinalizada] = useState(false);
  const [corEstado, setCorEstado] = useState("");
  const [imagemCard, setImagemCard] = useState(setaPlay);
  const [dataTestImg, setDataTestImg] = useState("play-btn");

  function clicarAbrirCarta(){
    setEstaAberto(true)
    setTextoCard(question)
    setImagemCard(setaVirar)
    setDataTestImg("turn-btn")
  }

  function verResposta() {
    setEstaRespondida(true)
    setTextoCard(answer)
  }

  function clicarCardImg() {
    if(!estaAberto){
      clicarAbrirCarta()
    } else if(estaAberto){
      verResposta()
    }
  }

  function checarBotaoEscolhido(cor,imagem, dataTest) {
    setEstaFinalizada(true)
    setCorEstado(cor)
    setImagemCard(imagem)
    setTextoCard(`Pergunta ${numeroPergunta}`)
    setDataTestImg(dataTest)
    setNumCardsRespondidos(numCardsRespondidos+1)
  }

  return (
    <StyledConteudoCards
      data-test="flashcard"
      estaAberto={estaAberto}
      estaFinalizada={estaFinalizada}
      corEstado={corEstado}
    >
      <p data-test="flashcard-text">{textoCard}</p>
      {(!estaRespondida || estaFinalizada) && <img onClick={clicarCardImg} src={imagemCard} alt={setaPlay} data-test={dataTestImg} />}
      {(estaRespondida && !estaFinalizada) && 
      <ContainerBotoes> 
        <StyledBotoes onClick={()=> checarBotaoEscolhido(VERMELHO, iconeErro, "no-icon")} color={VERMELHO} data-teste="no-btn">
          Não Lembrei
        </StyledBotoes>

        <StyledBotoes onClick={()=> checarBotaoEscolhido(AMARELO, iconeQuase, "partial-icon")} color={AMARELO} data-teste="partial-btn">
          Quase não lembrei
        </StyledBotoes>

        <StyledBotoes onClick={()=> checarBotaoEscolhido(VERDE, iconeCerto, "zap-icon")} color={VERDE} data-teste="zap-btn">
          Zap!
        </StyledBotoes>
      </ContainerBotoes>
      }
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
    cursor: pointer;
  }

`;

const StyledConteudoCards = styled.div`
  ${props => props.estaAberto && !props.estaFinalizada ? StyleCartaAberta : StyleCartaFechada}
  
  & p {
    font-family: "Recursive";
    text-decoration: ${props => props.estaFinalizada && "line-through"};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color:${props => props.corEstado ? props.corEstado : "#333333"} ;
  }
  & img{
    cursor: ${props=> !props.estaAberto ? "pointer" : ""};
  }
`;

const ContainerBotoes = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
const StyledBotoes = styled.button`
  width: 90px;
  height: 40px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background-color:${props => props.color};
  border-radius: 5px;
  padding: 5px;
  border: none;
  cursor: pointer;
`;
