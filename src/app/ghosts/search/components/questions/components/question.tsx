import {
  Answer,
  CheckboxQuestionType,
  Question,
  RadioQuestionType,
} from "@/types";
import React from "react";
import { Checkbox } from "./checkbox";
import styles from "../index.module.css";

type QuestionProps = {
  question: Question;
  handleChange: (answer: Answer) => void;
  answer: Answer | undefined;
};

type RadioQuestionProps = {
  question: RadioQuestionType;
  handleChange: (answer: Answer) => void;
  answer: Answer | undefined;
};

type CheckboxQuestionProps = {
  question: CheckboxQuestionType;
  handleChange: (answer: Answer) => void;
  answer: Answer | undefined;
};

const RadioQuestion = ({
  question,
  handleChange,
  answer,
}: RadioQuestionProps) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange({ filter_id: question.id, value: event.target.value });
  };

  return (
    <div className={styles.question_radio}>
      <h2 className={styles.question_header}>{question.text}</h2>
      <div className={styles.question_radio_variants}>
        {question.variants.map((variant) => (
          <label key={variant.value}>
            <input
              type="radio"
              name={question.text}
              value={variant.value}
              onChange={handleCheck}
              checked={(answer && answer.value === variant.value) || false}
            />
            <div className={styles.label}>{variant.text}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

const CheckboxQuestion = ({
  question,
  handleChange,
  answer,
}: CheckboxQuestionProps) => {
  const handleCheck = (checked: boolean | null) => {
    switch (checked) {
      case true:
        handleChange({ filter_id: question.id, value: "yes" });
        break;
      case false:
        handleChange({ filter_id: question.id, value: "unknown" });
        break;
      case null:
        handleChange({ filter_id: question.id, value: "no" });
        break;
    }
  };

  const checked =
    answer && answer.value === "yes"
      ? true
      : answer && answer.value === "no"
        ? null
        : false;

  return (
    <div className={styles.question_checkbox}>
      <Checkbox checked={checked} name={question.text} onChange={handleCheck} />
    </div>
  );
};

const QuestionComponent = ({
  question,
  handleChange,
  answer,
}: QuestionProps) => {
  switch (question.type) {
    case "radio":
      return (
        <RadioQuestion
          question={question}
          handleChange={handleChange}
          answer={answer}
        />
      );
    case "checkbox":
      return (
        <CheckboxQuestion
          question={question}
          handleChange={handleChange}
          answer={answer}
        />
      );
    default:
      return null;
  }
};

export { QuestionComponent };
