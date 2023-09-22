
import { useState } from "react"
import { RowEmpty } from "../rows"
import { WriteRow } from "../rows/WriteRow"
import styles from "./Table.module.css"
import { useWord } from "../hooks/useKeys"
import { ConfirmRow } from "../rows/ConfirmRow"

function Table() {
  const [tries , setTries ] = useState(5)
  const  [answer, setAnswer] = useState<string[]>([])
  const word = useWord(handlerOnEnter)


  function handlerOnEnter() {
    if (word.length == 5) {
      setAnswer(current => [...current, word])
      const newTries = tries - 1
      setTries(newTries)
    }
  }

  return (
    <div className={styles.table}>
      { answer.map((item, index) => <ConfirmRow key={index} wordDay="maria" word={item}/>)}
        <WriteRow word={word}/>
        { Array(tries).fill('').map((_, index) =>  (<RowEmpty key={index} />)) }
    </div>
  )
}
export default Table