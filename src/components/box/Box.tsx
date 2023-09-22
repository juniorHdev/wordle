
import styles from './Box.module.css'

type Props ={
  value: string,
  style: string 
}

export const Box = ({value, style}: Props) => {
  return (
    <div className={`${styles.box} ${styles[style]}`}>
    {value}
    </div>
  )
}