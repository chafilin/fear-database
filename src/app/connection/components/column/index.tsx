import styles from "./index.module.css";

type ColumnProps = {
  children: React.ReactNode;
};

export const Column: React.FC<ColumnProps> = ({ children }) => {
  return <div className={styles.column}>{children}</div>;
};
