import styled from "styled-components";
import { cards } from "./cards";
import ConteudoCards from "./ConteudoCards";

export default function Flashcards() {
  return (
    <StyledFlashCards>
      {cards.map((cards, index) => (
        <ConteudoCards key={index} numeroPergunta={index + 1} />
      ))}
    </StyledFlashCards>
  );
}

const StyledFlashCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  width: 80%;
  margin: 20px;
`;
