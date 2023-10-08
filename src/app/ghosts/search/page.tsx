"use client";
import React, { useEffect } from "react";
import { Answer, Ghost } from "@/types";
import { Questions } from "@/components/questions/index";
import styles from "./page.module.css";
import Link from "next/link";
import { getGhosts } from "@/firebase/ghosts";

const GhostsSearch = () => {
  const [filtered, setFiltered] = React.useState<Ghost[]>([]);
  const [ghosts, setGhost] = React.useState<Ghost[]>([]);

  useEffect(() => {
    getGhosts().then((ghosts) => {
      setGhost(ghosts);
      setFiltered(ghosts);
    });
  }, []);

  const handleAnswers = (answers: Answer[]) => {
    console.log(answers);
    setFiltered(
      ghosts.filter((item) =>
        answers.every(
          (answer) =>
            item.filters && item.filters[answer.filter_id] === answer.value
        )
      )
    );
  };

  return (
    <div className={styles.root}>
      <div>
        <Link href="/">Главная</Link>
        <Link href="/ghosts">Призраки</Link>
      </div>
      <div className={styles.content}>
        <Questions handleAnswers={handleAnswers} />
        <div className={styles.feed}>
          <h2 className={styles.feed_header}>Результаты</h2>
          {filtered.map((item) => (
            <div key={item.name}>
              <Link href={"/ghosts/" + item.id}>
                <div className={styles.feed_item}>{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GhostsSearch;
