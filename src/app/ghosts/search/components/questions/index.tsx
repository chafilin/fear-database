"use client";
import { Question, Answer } from "@/types";
import React from "react";
import { QuestionComponent } from "./components/question";
import styles from "./index.module.css";

type QuestionProps = {
  questions: Question[];
  handleAnswers: (answers: Answer[]) => void;
};

const Questions = (props: QuestionProps) => {
  const { handleAnswers, questions } = props;

  const [answers, setAnswers] = React.useState<Answer[]>([]);

  const handleChange = (answer: Answer) => {
    let resultAnswers = [];
    if (answer.value === "unknown") {
      resultAnswers = answers.filter(
        (item) => item.filter_id !== answer.filter_id
      );
    } else if (answers.some((item) => item.filter_id === answer.filter_id)) {
      resultAnswers = answers.map((item) =>
        item.filter_id === answer.filter_id ? answer : item
      );
    } else {
      resultAnswers = [...answers, answer];
    }
    handleAnswers(resultAnswers);
    setAnswers(resultAnswers);
  };

  const handleReset = () => {
    setAnswers([]);
    handleAnswers([]);
  };

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={handleReset}>
        Сбросить фильтры
      </button>
      <div className={styles.questions}>
        {questions.map((question) => (
          <QuestionComponent
            key={question.id}
            question={question}
            handleChange={handleChange}
            answer={answers.find((item) => item.filter_id === question.id)}
          />
        ))}
      </div>
    </div>
  );
};

export { Questions };
