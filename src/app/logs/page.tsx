"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Header } from "@/components/header";
import { UserLogs } from "./parts/userLogs";
import { PostLog } from "./parts/postLog";
import { Root } from "@/components/root";

export default function Logs() {
  const [refresh, setRefresh] = React.useState<boolean>(false);

  return (
    <Root>
      <Header
        title="Логи экспедиции"
        backTitle="Бюро Исследований Паранормальных Явлений"
        backHref="/"
      />
      <div className={styles.logs}>
        <h2 className={styles.author}>Автор: Доктор Сал Ангер</h2>
        <div className={styles.entries}>
          <div className={styles.date}> 13 июля </div>

          <LogEntry time="9:00">
            Въехали в город. <br />
            Состав команды: Капитан Сибил Беннет, Доктор Сал Ангер, Гарри
            Форрестер
          </LogEntry>
          <LogEntry time="9:15">
            Связь с командами Бетта и Гамма, Орегоном и ЦО была потеряна через 3
            минуты после въезда в город. <br />
            По нашим наблюдениям, погода в городе сейчас осенняя, несмотря на
            то, что сейчас 13 июля. Мы связываем это с тем, что аномалия
            случилась осенью (31 октября 2007 г). Все устройства показывают
            правильное время: 13 июля 2023 года
          </LogEntry>
          <LogEntry time="15:00">
            Настройка датчиков закончена. <br />
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
          </LogEntry>
          <LogEntry time="17:00">
            Саму ратушу обнаружить не удалось. На месте, где она должна быть,
            наша техника начала сбоить, 2 датчика ЭМП сломались при приближении
            к центру магнитного поля. Часы стали спешить, чем ближе к центру,
            тем сильнее. Иногда время на устройствах показывало 31 октября, что
            подтверждает наши предположения.
          </LogEntry>
          <LogEntry time="17:30">
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
          </LogEntry>

          <LogEntry time="18:00">
            После ратуши все чувствуем сильное утомление. Из-за этого и из-за
            того, что уже темно, решили переждать ночь в фургоне. Завтра с утра
            планируем отправиться в школу.
          </LogEntry>

          <div className={styles.date}> 14 июля </div>
          <LogEntry time="12:00">
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
          </LogEntry>
        </div>

        <UserLogs
          refresh={refresh}
          onRefresh={() => {
            setRefresh(false);
          }}
        />
      </div>

      <PostLog
        onNewLog={() => {
          setRefresh(true);
        }}
      />
    </Root>
  );
}

type LogEntryProps = {
  time: string;
  children: React.ReactNode;
};
const LogEntry: React.FC<LogEntryProps> = ({ time, children }) => (
  <div className={styles.entry}>
    <div className={styles.time}>{time}</div>
    {children}
  </div>
);
