"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Log } from "@/types";
import { deleteLog, getLogs, postLog } from "@/firebase/log";
import { Header } from "@/components/header";

export default function Logs() {
  const [logs, setLogs] = React.useState<Log[]>([]);
  const [newLog, setNewLog] = React.useState<string>("");
  const [needUpdate, setNeedUpdate] = React.useState<boolean>(true);

  useEffect(() => {
    if (needUpdate) {
      setNeedUpdate(false);
      getLogs().then((logs) => {
        setLogs(logs.sort((a, b) => (a.date > b.date ? 1 : -1)));
      });
    }
  }, [needUpdate]);

  const handleSubmit = () => {
    postLog(newLog).then(() => {
      setNewLog("");
      setNeedUpdate(true);
    });
  };

  // const handleDelete = (id: string) => {
  //   deleteLog(id);
  //   setNeedUpdate(true);
  // };

  return (
    <div className={styles.root}>
      <Header
        title="Логи экспедиции"
        backTitle="Бюро Исследований Паранормальных Явлений"
        backHref="/"
      />
      <div className={styles.logs}>
        <h2 className={styles.author}>Автор: Доктор Сал Ангер</h2>
        <div className={styles.entries}>
          <div className={styles.date}> 13 июля </div>

          <div className={styles.entry}>
            <div className={styles.time}>1. 9:00</div>
            Въехали в город. <br />
            Состав команды: Капитан Сибил Беннет, Доктор Сал Ангер, Гарри
            Форрестер
          </div>
          <div className={styles.entry}>
            <div className={styles.time}>2. 9:15</div>
            Связь с командами Бетта и Гамма, Орегоном и ЦО была потеряна через 3
            минуты после въезда в город.
            <br />
            По нашим наблюдениям, погода в городе сейчас осенняя, несмотря на
            то, что сейчас 13 июля. Мы связываем это с тем, что аномалия
            случилась осенью (31 октября 2007 г). Все устройства показывают
            правильное время: 13 июля 2023 года
          </div>
          <div className={styles.entry}>
            <div className={styles.time}>3. 15:00</div>
            Настройка датчиков закончена.
            <br />
            Мы локализовали самые активные источники паранормального шума:{" "}
            <Link className={styles.link} href="/encyclopedia?#school">
              школа
            </Link>
            ,{" "}
            <Link className={styles.link} href="/encyclopedia?#radio">
              радиостанция
            </Link>
            ,{" "}
            <Link className={styles.link} href="/encyclopedia?#hospital">
              больница
            </Link>{" "}
            и{" "}
            <Link className={styles.link} href="/encyclopedia?#citycenter">
              ратуша
            </Link>
            . Ратуша имеет наиболее высокую активность. Отправляемся к ратуше.
          </div>
          <div className={styles.entry}>
            <div className={styles.time}>4. 17:00</div>
            Саму ратушу обнаружить не удалось. На месте, где она должна быть,
            наша техника начала сбоить, 2 датчика ЭМП сломались при приближении
            к центру магнитного поля. Часы стали спешить, чем ближе к центру,
            тем сильнее. Иногда время на устройствах показывало 31 октября, что
            подтверждает наши предположения.
          </div>
          <div className={styles.entry}>
            <div className={styles.time}>5. 17:30</div>
            Судя по полученным замерам, это место как воронка: всасывает в себя
            энергию. <br />
            Похоже, школа, радиостанция и больница каким-то образом подпитывают
            ратушу и скрывают её от нас. Необходимо начать с них, очистить и
            проверить таким образом гипотезу. <br />
            <blockquote className={styles.note}>
              <p>
                <i>Примечания Гарри Форрестера:</i>
                <br />
                Сал не посчитала нужным добавить это в отчёт. Назвав мои
                наблюдения “лишней лирикой”. Но я не могу не зафиксировать:
                место ратуши скорее похоже не на воронку, а на сердце, так как
                забирает энергию с определенной частотой. Тем не менее вопрос —
                куда уходит эта энергия — остаётся открытым.
              </p>
            </blockquote>
          </div>
          <div className={styles.entry}>
            <div className={styles.time}>6. 18:00</div>
            После ратуши все чувствуем сильное утомление. Из-за этого и из-за
            того, что уже темно, решили переждать ночь в фургоне. Завтра с утра
            планируем отправиться в школу.
          </div>

          <div className={styles.date}> 14 июля </div>

          <div className={styles.entry}>
            <div className={styles.time}> 1. 12:00 </div>
            <blockquote className={styles.note}>
              <p>
                <i>Примечания Гарри Форрестера:</i>
                <br /> Спал плохо, слышал странные звуки снаружи фургона. Утром
                обследовал Сибил и Сэл. Никаких признаков заболевания, но все
                плохо отдохнули.
              </p>
            </blockquote>
            Мы собирались начать проверку гипотезы со школы, но обнаружили
            слабые импульсы из жилого дома (42.654563, -121.973873).
            Направляемся туда.
          </div>
        </div>
        <div className={styles.entries}>
          {logs.map((log) => (
            <div className={styles.entry} key={log.date}>
              <div className={styles.time}> {log.date} </div>
              <div>{log.log}</div>
              {/* <button onClick={() => handleDelete(log.id)}>Delete</button> */}
            </div>
          ))}
        </div>
      </div>

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
        <button className={styles.button_submit} onClick={handleSubmit}>
          Отправить
        </button>
      </div>
    </div>
  );
}
