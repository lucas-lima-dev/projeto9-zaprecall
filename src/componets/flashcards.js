import styled from "styled-components";
import { cards } from "./cards";
import ConteudoCards from "./ConteudoCards";

export default function Flashcards({numCardsRespondidos,setNumCardsRespondidos}) {
  return (
    <StyledFlashCards>
      {cards.map((card, index) => (
        <ConteudoCards 
        key={index} 
        numeroPergunta={index + 1} 
        card={card}
        numCardsRespondidos={numCardsRespondidos}
        setNumCardsRespondidos={setNumCardsRespondidos}
        />
      ))}
    </StyledFlashCards>
  );
}

const StyledFlashCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 20px;
`;
