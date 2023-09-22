import { Box } from "../box";
import styles from "./Row.module.css";
export const RowEmpty = () => {
  return (
    <>
      <div className={styles.row}>
        {["1", "2", "3", "5", "6"].map((item) => (
          <Box value={""} key={item} style="" />
        ))}
      </div>
      
    </>
  );
};
