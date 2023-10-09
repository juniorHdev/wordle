import { createContext, useContext, useState } from "react";
import { useWord } from "../hooks/useKeys";



const initGame = {
    wordDay: "maria",
    answers: [''],
    word: "",
    tries: 5,
}
const Context = createContext(initGame);

type Props = {
  children: React.ReactNode;
};

export const GameContext = ({ children }: Props) => {
  const wordDay = "maria";
  const [answers, SetAnswer] = useState<string[]>([]);
  const [tries, setTries] = useState(5);

  const handlerOnEnter = () => {
    if (word.length !== 5) {
      return;
    }
    SetAnswer((current) => [...current, word]);
    const newTries = tries - 1;
    setTries(newTries);
  };
  const word = useWord(handlerOnEnter);

  return (
    <Context.Provider value={{ wordDay, answers, word, tries }}>
      {children}
    </Context.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameContext");
  }
  return context;
};

export default useGameContext;
