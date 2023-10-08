import { Answer, CheckboxQuestion, Question, RadioQuestion } from "@/types";
import React from "react";
import { Checkbox } from "./checkbox";
import styles from "../index.module.css";

type QuestionProps = {
  question: Question;
  handleChange: (answer: Answer) => void;
};

type RadioQuestionProps = {
  question: RadioQuestion;
  handleChange: (answer: Answer) => void;
};

type CheckboxQuestionProps = {
  question: CheckboxQuestion;
  handleChange: (answer: Answer) => void;
};

const RadioQuestion = ({ question, handleChange }: RadioQuestionProps) => {
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

  return (
    <div className={styles.question_checkbox}>
      <Checkbox checked={false} name={question.text} onChange={handleCheck} />
    </div>
  );
};

const QuestionComponent = ({ question, handleChange }: QuestionProps) => {
  switch (question.type) {
    case "radio":
      return <RadioQuestion question={question} handleChange={handleChange} />;
    case "checkbox":
      return (
        <CheckboxQuestion question={question} handleChange={handleChange} />
      );
    default:
      return null;
  }
};

export { QuestionComponent };
