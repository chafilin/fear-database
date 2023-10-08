import { Header } from "@/components/header";
import React from "react";
import RecordImage from "./record.svg";

import styles from "./page.module.css";
import Image from "next/image";

const EncyclopediaList = () => {
  return (
    <div className={styles.root}>
      <Header
        title="О городе - Джейлбрик"
        backTitle="Бюро Исследований Паранормальных Явлений"
        backHref="/"
      />
      <div className={styles.content}>
        <History />
        <School />
        <RadioCenter />
        <Hospital />
        <Church />
        <CityCenter />
      </div>
    </div>
  );
};

const History = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post_header}>История</div>
      <div className={styles.post_content}>
        <p>
          1975-1991 была тюрьма. Произошел ожесточенный бунт заключенных из-за
          условий содержания и насилия со стороны персонала. 104 жертв
          подтверждено, ещё 38 числятся без вести пропавшими. Тюрьма была
          разрушена.
        </p>
        <p>В 1996 на месте тюрьмы был построен город.</p>
        <p>
          31 октября 2007 года в 16:00 произошла цепочка массовых самоубийств.
          Официальная причина: протечка газа. Среди людей ходят слухи о секте и
          радио-зомбировании.
        </p>
      </div>
    </div>
  );
};

const School = () => {
  return (
    <div id="school" className={styles.post}>
      <div className={styles.post_header}>Школа</div>
      <div className={styles.post_content}>
        <p>
          Массовое самоубийство от передозировки снотворным в актовом зале. Лица
          некоторых девушек изуродованы серной кислотой. Первое массовое
          самоубийство, за два часа до цепочки остальных. 
        </p>
      </div>
    </div>
  );
};

const RadioCenter = () => {
  return (
    <div id="radio" className={styles.post}>
      <div className={styles.post_header}>Радиоцентр</div>
      <div className={styles.post_content}>
        <p>
          Центр ретранслировал широковещательные станции, а также местную
          дневную программу «Наш Джейлбрик».
        </p>
        <p>
          Также есть вероятность, что именно отсюда транслировалась местная
          ночная передача 116.6. Передача рассказывала о тайнах жителей города и
          предположительно стала причиной 8 самоубийств и 3 убийств, совершенные
          в разное время, начиная от полугода до массовых самоубийств. 
        </p>
        <p>
          Предполагаемая дикторка ночной передачи повесилась за 2 месяца до
          массовых самоубийств. Несмотря на это, ночное вещание продолжилось.
        </p>
        <p>
          Все работники радиоцентра убили себя во время массового
          помешательства.
        </p>
        <div className={styles.records}>
          <p className={styles.records_header}>Примеры записей эфира:</p>
          <div className={styles.record}>
            <Image src={RecordImage} alt="record" />
            <div className={styles.substring}>Запись дневного эфира</div>
          </div>
          <div className={styles.record}>
            <Image src={RecordImage} alt="record" />
            <div className={styles.substring}>Запись ночного эфира 1</div>
          </div>
          <div className={styles.record}>
            <Image src={RecordImage} alt="record" />
            <div className={styles.substring}>Запись ночного эфира 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hospital = () => {
  return (
    <div id="hospital" className={styles.post}>
      <div className={styles.post_header}>Больница</div>
      <div className={styles.post_content}>
        <p>
          Больница единственная на весь Джейлбрик, по совместительству роддом и
          хоспис. Известно, что с 2004 года из морга стали исчезать трупы.
          Некоторые из них находились через некоторое время в морге без видимых
          следов какого-либо вмешательства. Часть трупов так и не были найдены.
        </p>
        <p>
          В больнице также происходили массовые самоубийства, судя по отчёту
          судмедэкспертов. Однако, в отличие от остального Джейлбрика, в
          больнице было обнаружено намного меньше тел. Согласно экспертизе и
          больничной базе данных, тел должно было быть определенно больше. Не
          найденные люди: пациенты и работники, числятся без вести пропавшими.
        </p>
      </div>
    </div>
  );
};

const Church = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post_header}>Церковь</div>
      <div className={styles.post_content}>
        <p>
          Прихожане и служители убили себя на выходе из церкви. Один служитель
          церкви и одна прихожанка остались в живых. Прихожанка получает лечение
          в психиатрической больнице 12, Орегон.
        </p>
      </div>
    </div>
  );
};

const CityCenter = () => {
  return (
    <div id="citycenter" className={styles.post}>
      <div className={styles.post_header}>Ратуша</div>
      <div className={styles.post_content}>
        <p>
          Во время массовых самоубийств в ратуше и возле неё произошло больше
          всего пожаров и автомобильных аварий. Сама ратуша полностью сгорела.
          Никто не выжил.
        </p>
      </div>
    </div>
  );
};

export default EncyclopediaList;
