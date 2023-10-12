"use client";
import React, { useEffect } from "react";
import { Answer, Ghost, Question } from "@/types";
import { Questions } from "@/components/questions/index";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "@/components/header";

const GhostsSearch = () => {
  const [filtered, setFiltered] = React.useState<Ghost[]>([]);
  const [ghosts, setGhost] = React.useState<Ghost[]>([]);
  const [filters, setFilters] = React.useState<Question[]>([]);

  useEffect(() => {
    fetch("/api/ghosts/search")
      .then((res) => res.json())
      .then(({ ghosts, filters }) => {
        setGhost(ghosts);
        setFiltered(ghosts);
        setFilters(filters);
      });
  }, []);

  const handleAnswers = (answers: Answer[]) => {
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
      <Header
        title="Определить призрака"
        backTitle="Бюро Исследований Паранормальных Явлений"
        backHref="/"
      />
      <div className={styles.content}>
        <Questions handleAnswers={handleAnswers} questions={filters} />
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
