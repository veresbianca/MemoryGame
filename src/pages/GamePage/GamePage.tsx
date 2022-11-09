import Header from "../../components/Header";
import Disc from "../../components/Disc";
import { BoardStyle, GamePageStyles } from "./GamePage.style";
import AppContext, { withContextProvider } from "../../AppContext";
import { useContext } from "react";

const gameSize = 6;
const boardArray = Array.from(Array(gameSize * gameSize).keys());



const GamePage: React.FC = withContextProvider(() => {
  const { discTheme } = useContext(AppContext);

  console.log('From global state: ', discTheme);
  return (
    <GamePageStyles>
      <Header />
      <BoardStyle boardSize={6}>
        {boardArray.map((disc, i) => {
          return (
            <Disc
              type="icon"
              onClick={() => { }}
              flipped={false}
              matched={false}
              key={i}
            ></Disc>
          );
        })}
      </BoardStyle>
      <div className="Footer">
        <div>player1</div>
        <div>player2</div>
        <div>player3</div>
        <div>player4</div>
      </div>
    </GamePageStyles>
  );
});

export default GamePage;
