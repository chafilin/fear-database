import React from "react";
import styles from "../page.module.css";

type Props = {
  onNewLog: () => void;
};

export const PostLog = ({ onNewLog }: Props) => {
  const [newLog, setNewLog] = React.useState<string>("");

  const handleSubmit = () => {
    fetch("/api/logs", {
      body: JSON.stringify({ message: newLog }),
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        setNewLog("");
        onNewLog();
      });
  };

  return (
    <div className={styles.input_area}>
      <h2>Добавить запись</h2>
      <textarea
        value={newLog}
        onChange={(e) => setNewLog(e.target.value)}
        className={styles.textarea}
        rows={10}
        placeholder="Напишите что-нибудь…"
        autoCorrect="on"
      />
      <button
        className={styles.button_submit}
        onClick={handleSubmit}
        disabled={!newLog}
      >
        Отправить
      </button>
    </div>
  );
};
