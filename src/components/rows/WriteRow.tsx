import { Box } from "../box"
import styles from "./Row.module.css"

type Props = {
    word: string 
}

const MAX_WORD_LENGTH = 5

export const WriteRow = ({ word}: Props) => {
  const missingBoxes = MAX_WORD_LENGTH - word.length
  
  return (
    <div className={styles.row}>
     { Array.from(word).map((letter, index)=> <Box key={index} value={letter} style=""/>) }
     { word.length <=5 && Array(missingBoxes).fill('').map((_, index) =>  (<Box value={''} key={index} style=""/>))  }
    </div>
  )
}