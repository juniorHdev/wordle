
import { Box } from '../box'
import styles from './Row.module.css'

type confirmRowProps = {
    wordDay: string,
    word: string
}

export const ConfirmRow = ({word, wordDay }:confirmRowProps) => {
  
    const calculateStyle = (index: number)=>{
             if (word[index] == wordDay[index]) {
                return 'correct'
             }if (wordDay.includes(word[index])) {
                return 'almost'
                
             }else{
                return 'incorrect'
             }
    }
   
  return (
    <div className={styles.row}>
        { word.split('').map((letter, index)=> <Box key={index} value={letter} style={calculateStyle(index)} /> ) }
    </div>
  )
}