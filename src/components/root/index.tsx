import styles from "./index.module.css";

type RootProps = {
  children: React.ReactNode;
};

export const Root: React.FC<RootProps> = ({ children }) => {
  return <main className={styles.root}>{children}</main>;
};
