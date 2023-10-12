"use client";
import { Question, Answer } from "@/types";
import React, { useEffect } from "react";
import { QuestionComponent } from "./components/question";
import { getFilters } from "@/firebase/filters";
import styles from "./index.module.css";

type QuestionProps = {
  questions: Question[];
  handleAnswers: (answers: Answer[]) => void;
};

const Questions = (props: QuestionProps) => {
  const { handleAnswers, questions } = props;

  const [answers, setAnswers] = React.useState<Answer[]>([]);

  const handleChange = (answer: Answer) => {
    if (answer.value === "unknown") {
      setAnswers(answers.filter((item) => item.filter_id !== answer.filter_id));
    } else if (answers.some((item) => item.filter_id === answer.filter_id)) {
      setAnswers(
        answers.map((item) =>
          item.filter_id === answer.filter_id ? answer : item
        )
      );
    } else {
      setAnswers([...answers, answer]);
    }
  };

  useEffect(() => {
    handleAnswers(answers);
  }, [answers]);

  return (
    <div className={styles.questions}>
      {questions.map((question) => (
        <QuestionComponent
          key={question.id}
          question={question}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export { Questions };
