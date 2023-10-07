"use client";
import React, { useEffect } from "react";
import { Answer, Ghost } from "@/types";
import { Questions } from "@/components/questions";
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
    <div>
      <div>
        <Link href="/">Главная</Link>
        <Link href="/ghosts">Призраки</Link>
      </div>
      <div className={styles.root}>
        <div className={styles.filters}>
          <Questions handleAnswers={handleAnswers} />
        </div>
        <div className={styles.feed}>
          {filtered.map((item) => (
            <div key={item.name}>
              <Link href={"/ghosts/" + item.id}>
                <h1>{item.name}</h1>
              </Link>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GhostsSearch;
