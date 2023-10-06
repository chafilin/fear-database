import Link from "next/link";
import styles from "./index.module.css";
import postGhosts from "@/firebase/data/syncData";

export default function EncyclopaediaList() {
  return (
    <div className={styles.root}>
      <h1>БИПЯ</h1>
      <h2>Бюро Исследований Паранормальных Явлений</h2>
      <div className={styles.linklist}>
        <Link href="/ghosts">Призраки</Link>
        <Link href="/connection">Связь</Link>
        <Link href="/logs">Логи</Link>
        <Link href="/encyclopedia">Энциклопедия</Link>
      </div>
    </div>
  );
}
