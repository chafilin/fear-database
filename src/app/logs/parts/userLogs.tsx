import { Log } from "@/types";
import React, { useEffect } from "react";
import useSWR, { Fetcher, mutate } from "swr";
import styles from "../page.module.css";

const fetcher: Fetcher<Log[], string> = (url: string) =>
  fetch(url).then((res) => res.json());

type Props = {
  refresh: boolean;
  onRefresh: () => void;
};

export const UserLogs = ({ refresh, onRefresh }: Props) => {
  const { data: userLogs, error, isLoading } = useSWR("/api/logs", fetcher);

  // reload on new log
  useEffect(() => {
    if (refresh) {
      mutate("/api/logs");
      onRefresh();
    }
  }, [refresh, onRefresh]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки логов</div>;
  }

  return (
    <div className={styles.entries}>
      {userLogs &&
        userLogs.map((log) => (
          <div className={styles.entry} key={log.id}>
            <div className={styles.time}> {dateFormater(log.created_at)} </div>
            <div>{log.message}</div>
          </div>
        ))}
    </div>
  );
};

const dateFormater = (date: string) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
