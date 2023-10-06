import { Question, Answer } from "@/types";
import React, { use, useEffect } from "react";
import { QuestionComponent } from "./question";
import { getFilters } from "@/firebase/filters";

type QuestionProps = {
  // questions: Question[];
  handleAnswers: (answers: Answer[]) => void;
};

const Questions = (props: QuestionProps) => {
  const { handleAnswers } = props;

  const [questions, setQuestions] = React.useState<Question[]>([]);

  useEffect(() => {
    getFilters().then((filters) => {
      setQuestions(filters.sort((a, b) => a.priority - b.priority));
    });
  }, []);

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
    <div>
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
