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

const Emp = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Детектор ЭМП</h2>
        <div>
          Детектор ЭМП — это оборудование для измерения силы электромагнитных
          полей в близлежащей среде. Используется для обнаружения признаков ЭМП
        </div>
        <div>
          5-го уровня. При обнаружении ЭМП 5-го уровня загораются все пять
          индикаторов и издается очень высокий тональный сигнал.
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/emp.png"
          width={200}
          height={200}
          alt="Детектор ЭМП"
        />
      </div>
    </div>
  );
};

const Termometer = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Термометр</h2>
        <div>
          Термометр — это оборудование для измерения температуры окружающей
          среды. Включите и нажмите на кнопку измерения, через несколько секунд
          термометр покажет показания в градусах Цельсия (°C). Используется для
          обнаружения минусовой температуры.
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/temperature.png"
          width={200}
          height={200}
          alt="Термометр"
        />
      </div>
    </div>
  );
};

const Uf = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>УФ-фонарь</h2>
        <div>
          Фонарь, который излучает ультрафиолетовый свет. Используется для
          обнаружения следов ультрафиолета, таких как отпечатки пальцев, следы,
          эктоплазма.
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/uf.png"
          width={200}
          height={200}
          alt="УФ-фонарь"
        />
      </div>
    </div>
  );
};

const Camera = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Камера с режимом ночной съёмки</h2>
        <div>
          Камера — это устройство, с помощью которого можно делать фотографии и
          видеозаписи. Некоторых призраков можно увидеть только через камеру.
          Также с помощью камеры можно определить, что перед вами иллюзия, если
          видимый вами предмет или существо невидимо на камере.
        </div>
        <div>
          Имеет режим ночной съёмки. Изображение с камеры можно вывести на экран
          в фургоне.
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/camera.png"
          width={200}
          height={200}
          alt="Камера с режимом ночной съёмки"
        />
      </div>
    </div>
  );
};

const SpiritBox = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Спирит Бокс</h2>
        <div>
          Спирит Бокс — это часть оборудования, используемого для поиска улик.
          Он создает белый шум, постоянно переключая различные радиочастоты, что
          позволяет некоторым призракам общаться с вами
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/radio.png"
          width={200}
          height={200}
          alt="Спирит Бокс"
        />
      </div>
    </div>
  );
};

const SoundSensor = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Датчик звука</h2>
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
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/sound.png"
          width={200}
          height={200}
          alt="Датчик звука"
        />
      </div>
    </div>
  );
};

const MovementSensor = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Датчик движения</h2>
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
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/move.png"
          width={200}
          height={200}
          alt="Датчик движения"
        />
      </div>
    </div>
  );
};

const Salt = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Соль</h2>
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
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/salt.png"
          width={200}
          height={200}
          alt="Соль"
        />
      </div>
    </div>
  );
};

const Crucifix = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Распятие</h2>
        <div>
          Освящённый крест из серебра. Распятие способно напугать или разозлить
          призрака. Некоторые призраки не реагируют на крест. Используется в
          некоторых ритуалах по изгнанию призрака.
        </div>
        <div>Наиболее эффективно в руках набожного человека.</div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/crucifix.png"
          width={200}
          height={200}
          alt="Распятие"
        />
      </div>
    </div>
  );
};

const HolyWater = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Святая вода</h2>
        <div>
          Святая вода, освящённая первосвященниками. Способна напугать или
          разозлить призрака. Некоторые призраки не реагируют на святую воду.
          Используется в некоторых ритуалах по изгнанию призрака.
        </div>
        <div>Наиболее эффективна в руках набожного человека.</div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/water.png"
          width={200}
          height={200}
          alt="Святая вода"
        />
      </div>
    </div>
  );
};

const Incense = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Благовония</h2>
        <div>
          Белый шалфей, имеет сладкий горьковатый аромат. Благовония способны
          напугать или разозлить призрака. Некоторые призраки не реагируют на
          соль. Используется в некоторых ритуалах по изгнанию призрака.
        </div>
        <div>
          Также эффективны благовония из вербены, гардении, красной гвоздики,
          жасмина, кедра, кипариса и ладана.
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/incense.png"
          width={200}
          height={200}
          alt="Благовония"
        />
      </div>
    </div>
  );
};

const Candle = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Свеча</h2>
        <div>Обычная свеча: можно заменить любой другой.</div>
        <div>
          В очень редких случаях способна напугать или разозлить призрака.
          Большинство призраков без труда могут задуть одну свечу. Используется
          в некоторых ритуалах по изгнанию призрака.
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/candle.png"
          width={200}
          height={200}
          alt="Свеча"
        />
      </div>
    </div>
  );
};

const Lamp = () => {
  return (
    <div className={styles.block}>
      <div className={styles.content}>
        <h2 className={styles.block_header}>Фонарик</h2>
        <div>Обычный фонарик, ничего больше, ничего меньше.</div>
      </div>
      <div className={styles.image}>
        <Image
          src="/assets/inventory/lamp.png"
          width={200}
          height={200}
          alt="Фонарик"
        />
      </div>
    </div>
  );
};

export default Inventory;
