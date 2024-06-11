"use client";
import React from "react";
import { Answer, Ghost, Question } from "@/types";
import { Questions } from "./components/questions/index";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "@/components/header";
import allGhosts from "@/data/ghosts.json";
import allFilters from "@/data/filters.json";
import { Root } from "@/components/root";

const GhostsSearch = () => {
  const [filtered, setFiltered] = React.useState<Ghost[]>(allGhosts as Ghost[]);
  const ghosts = allGhosts as Ghost[];
  const filters = allFilters.sort(
    (a, b) => a.priority - b.priority,
  ) as Question[];

  const handleAnswers = (answers: Answer[]) => {
    setFiltered(
      ghosts.filter((item) =>
        answers.every(
          (answer) =>
            item.filters && item.filters[answer.filter_id] === answer.value,
        ),
      ),
    );
  };

  return (
    <Root>
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
    </Root>
  );
};

export default GhostsSearch;
