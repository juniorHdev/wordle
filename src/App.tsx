import "./App.css";
import { GameContext } from "./components/context/GameContext";
import Table from "./components/table/Table";

function App() {
  return (
    <>
      <GameContext>
        <div className="board">
          <h1>juego del wordle</h1>
          <Table />
        </div>
      </GameContext>
    </>
  );
}

export default App;
