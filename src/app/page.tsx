import Link from "next/link";
import styles from "./page.module.css";
import RootLayout from "@/app/layout";

export default function Home() {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>
        Бюро Исследований Паранормальных Явлений
      </h1>
      <h2 className={styles.subheader}>Миссия Джейлбрик</h2>
      <div className={styles.linklist}>
        <Link href="/connection">Связь с командами</Link>
        <Link href="/logs">Логи экспедиции</Link>
        <Link href="/encyclopedia">О городе</Link>
        <Link href="">Об оборудовании</Link>
        <Link href="/ghosts">Призраки</Link>
        <Link href="/ghosts/search">Определить призрака</Link>
      </div>
    </div>
  );
}
