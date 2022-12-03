import styled from "styled-components";
import Footer from "./Footer";
import Flashcards from "./flashcards";
import LogoNome from "./Logo&Nome";
import { cards } from "./cards";
import { useState } from "react";

const totalCards = cards.length;

export default function ZapRecall() {
  const [numCardsRespondidos, setNumCardsRespondidos] = useState(0);

  return (
    <ScreenContainer>
      <LogoNome />
      <Flashcards
        numCardsRespondidos={numCardsRespondidos}
        setNumCardsRespondidos={setNumCardsRespondidos}
      />
      <Footer
        numCardsRespondidos={numCardsRespondidos}
        totalCards={totalCards}
      />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
