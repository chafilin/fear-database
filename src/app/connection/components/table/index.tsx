import styles from "./index.module.css";

type TableProps = {
  children: React.ReactNode;
};

export const Table: React.FC<TableProps> = ({ children }) => {
  return <div className={styles.table}>{children}</div>;
};
