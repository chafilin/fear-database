import { Answer, CheckboxQuestion, Question, RadioQuestion } from "@/types";
import React from "react";
import { Checkbox } from "./checkbox";

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
    <div>
      <b>{question.text}</b>
      <div>
        {question.variants.map((variant) => (
          <div key={variant.value}>
            <input
              type="radio"
              name={question.text}
              value={variant.value}
              onChange={handleCheck}
            />
            <label>{variant.text}</label>
          </div>
        ))}
      </div>
      <br />
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
    <div>
      <div>
        <Checkbox checked={false} name={question.text} onChange={handleCheck} />
      </div>
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
