import { Header } from "@/components/header";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { Root } from "@/components/root";

const Inventory = () => {
  return (
    <Root>
      <Header
        title="Об оборудовании"
        backTitle="Бюро Исследований Паранормальных Явлений"
        backHref="/"
      />
      <div className={styles.list}>
        <Emp />
        <Termometer />
        <Uf />
        <Camera />
        <SpiritBox />
        <SoundSensor />
        <MovementSensor />
        <Salt />
        <Crucifix />
        <HolyWater />
        <Incense />
        <Candle />
        <Lamp />
      </div>
    </Root>
  );
};

type ItemProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  children: React.ReactNode;
};

const Item = ({ image, title, children }: ItemProps) => (
  <div className={styles.block}>
    <div className={styles.content}>
      <h2 className={styles.block_header}>{title}</h2>
      {children}
    </div>
    <div className={styles.image}>
      <Image src={image.src} width={200} height={200} alt={image.alt} />
    </div>
  </div>
);

const Emp = () => {
  const image = {
    src: "/assets/inventory/emp.png",
    alt: "Детектор ЭМП",
  };
  const title = "Детектор ЭМП";
  return (
    <Item image={image} title={title}>
      <div>
        Детектор ЭМП — это оборудование для измерения силы электромагнитных
        полей в близлежащей среде. Используется для обнаружения признаков ЭМП
      </div>
      <div>
        5-го уровня. При обнаружении ЭМП 5-го уровня загораются все пять
        индикаторов и издается очень высокий тональный сигнал.
      </div>
    </Item>
  );
};

const Termometer = () => {
  const image = {
    src: "/assets/inventory/temperature.png",
    alt: "Термометр",
  };
  const title = "Термометр";
  return (
    <Item image={image} title={title}>
      <div>
        Термометр — это оборудование для измерения температуры окружающей среды.
        Включите и нажмите на кнопку измерения, через несколько секунд термометр
        покажет показания в градусах Цельсия (°C). Используется для обнаружения
        минусовой температуры.
      </div>
    </Item>
  );
};

const Uf = () => {
  const image = {
    src: "/assets/inventory/uf.png",
    alt: "УФ-фонарь",
  };
  const title = "УФ-фонарь";
  return (
    <Item image={image} title={title}>
      <div>
        Фонарь, который излучает ультрафиолетовый свет. Используется для
        обнаружения следов ультрафиолета, таких как отпечатки пальцев, следы,
        эктоплазма.
      </div>
    </Item>
  );
};

const Camera = () => {
  const image = {
    src: "/assets/inventory/camera.png",
    alt: "Камера с режимом ночной съёмки",
  };
  const title = "Камера с режимом ночной съёмки";
  return (
    <Item image={image} title={title}>
      <div>
        Камера — это устройство, с помощью которого можно делать фотографии и
        видеозаписи. Некоторых призраков можно увидеть только через камеру.
        Также с помощью камеры можно определить, что перед вами иллюзия, если
        видимый вами предмет или существо невидимо на камере.
      </div>
      <div>
        Имеет режим ночной съёмки. Изображение с камеры можно вывести на экран в
        фургоне.
      </div>
    </Item>
  );
};

const SpiritBox = () => {
  const image = {
    src: "/assets/inventory/radio.png",
    alt: "Спирит Бокс",
  };
  const title = "Спирит Бокс";
  return (
    <Item image={image} title={title}>
      <div>
        Спирит Бокс — это часть оборудования, используемого для поиска улик. Он
        создает белый шум, постоянно переключая различные радиочастоты, что
        позволяет некоторым призракам общаться с вами
      </div>
    </Item>
  );
};

const SoundSensor = () => {
  const image = {
    src: "/assets/inventory/sound.png",
    alt: "Датчик звука",
  };
  const title = "Датчик звука";
  return (
    <Item image={image} title={title}>
      <div>
        Датчик звука обнаруживает звуки на большой территории вокруг себя,
        позволяя игроку отслеживать потенциальную активность призраков. Датчик
        передаёт все звуки в наушники. Есть режим записи звуков.
      </div>
      <div>
        Датчик звука можно разместить на земле или другой плоской поверхности
        или держать в руках.
      </div>
      <div>
        Можно синхронизировать с фургоном: выводить звуки в колонки фургона,
        переносить записи в ПК.
      </div>
    </Item>
  );
};

const MovementSensor = () => {
  const image = {
    src: "/assets/inventory/move.png",
    alt: "Датчик движения",
  };
  const title = "Датчик движения";
  return (
    <Item image={image} title={title}>
      <div>
        Датчик движения — это оборудование, которое может помочь отслеживать
        движение призрака. Датчик движения можно разместить на стене или на
        полу. При установке датчик излучает красный лазерный луч, указывая на
        эффективное расстояние обнаружения. Когда кто или что-либо проходит
        через лазерный луч, датчик движения излучает яркий свет в течение 2
        секунд и издаёт звуковой сигнал.
      </div>
      <div>
        Можно синхронизировать с фургоном и выводить результаты датчиков на
        экран в фургоне.
      </div>
    </Item>
  );
};

const Salt = () => {
  const image = {
    src: "/assets/inventory/salt.png",
    alt: "Соль",
  };
  const title = "Соль";
  return (
    <Item image={image} title={title}>
      <div>
        Гималайская соль, собранная монашеским орденом. Прямой контакт с солью
        способен напугать или разозлить призрака. Некоторые призраки не
        реагируют на соль. Используется в некоторых ритуалах по изгнанию
        призрака.
      </div>
      <div>
        С помощью горстки соли можно определить, наступает ли призрак на песок
        или соль.
      </div>
      <div>Более эффективна, чем обычная соль.</div>
    </Item>
  );
};

const Crucifix = () => {
  const image = {
    src: "/assets/inventory/crucifix.png",
    alt: "Распятие",
  };
  const title = "Распятие";
  return (
    <Item image={image} title={title}>
      <div>
        Освящённый крест из серебра. Распятие способно напугать или разозлить
        призрака. Некоторые призраки не реагируют на крест. Используется в
        некоторых ритуалах по изгнанию призрака.
      </div>
      <div>Наиболее эффективно в руках набожного человека.</div>
    </Item>
  );
};

const HolyWater = () => {
  const image = {
    src: "/assets/inventory/water.png",
    alt: "Святая вода",
  };
  const title = "Святая вода";
  return (
    <Item image={image} title={title}>
      <div>
        Святая вода, освящённая первосвященниками. Способна напугать или
        разозлить призрака. Некоторые призраки не реагируют на святую воду.
        Используется в некоторых ритуалах по изгнанию призрака.
      </div>
      <div>Наиболее эффективна в руках набожного человека.</div>
    </Item>
  );
};

const Incense = () => {
  const image = {
    src: "/assets/inventory/incense.png",
    alt: "Благовония",
  };
  const title = "Благовония";
  return (
    <Item image={image} title={title}>
      <div>
        Белый шалфей, имеет сладкий горьковатый аромат. Благовония способны
        напугать или разозлить призрака. Некоторые призраки не реагируют на
        соль. Используется в некоторых ритуалах по изгнанию призрака.
      </div>
      <div>
        Также эффективны благовония из вербены, гардении, красной гвоздики,
        жасмина, кедра, кипариса и ладана.
      </div>
    </Item>
  );
};

const Candle = () => {
  const image = {
    src: "/assets/inventory/candle.png",
    alt: "Свеча",
  };
  const title = "Свеча";
  return (
    <Item image={image} title={title}>
      <div>Обычная свеча: можно заменить любой другой.</div>
      <div>
        В очень редких случаях способна напугать или разозлить призрака.
        Большинство призраков без труда могут задуть одну свечу. Используется в
        некоторых ритуалах по изгнанию призрака.
      </div>
    </Item>
  );
};

const Lamp = () => {
  const image = {
    src: "/assets/inventory/lamp.png",
    alt: "Фонарик",
  };
  const title = "Фонарик";
  return (
    <Item image={image} title={title}>
      <div>Обычный фонарик, ничего больше, ничего меньше.</div>
    </Item>
  );
};

export default Inventory;
