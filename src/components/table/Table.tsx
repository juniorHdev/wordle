import { RowEmpty } from "../rows";
import { WriteRow } from "../rows/WriteRow";
import styles from "./Table.module.css";
import { ConfirmRow } from "../rows/ConfirmRow";
import useGameContext from "../context/GameContext";

function Table() {
  const { word, answers, tries, wordDay } = useGameContext();

  return (
    <>
      <div> intentos restatantes {tries}</div>
      <div className={styles.table}>
        {answers.map((item, index) => (
          <ConfirmRow key={index} wordDay={wordDay} word={item} />
        ))}
        {tries > 0 ? <WriteRow word={word} /> : null}
        {tries > 1
          ? Array(tries - 1)
              .fill("")
              .map((_, index) => <RowEmpty key={index} />)
          : null}
      </div>
    </>
  );
}
export default Table;
