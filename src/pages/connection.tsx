import Link from "next/link";
import React from "react";

export default function Connections() {
  return (
    <div>
      <Link href="/">Главная</Link>
      <h1>Связь с командами</h1>
      <div>
        <h2>
          Команда Сибил Беннет: Связь потеряна{" "}
          <button disabled> Связаться</button>
        </h2>
        <ul>
          <li>
            К-н Сибил Беннет: Связь потеряна{" "}
            <button disabled> Связаться</button>
          </li>
          <li>
            Д-р Сал Ангер: Связь потеряна <button disabled> Связаться</button>
          </li>
          <li>
            Гарри Форрестер: Связь потеряна <button disabled> Связаться</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>
          Команда Бетта: Связь потеряна<button disabled> Связаться</button>
        </h2>
        <ul>
          <li>
            К-н Саша Клейн: Связь потеряна<button disabled> Связаться</button>
          </li>
          <li>
            Д-р Виктор Риверс: Связь потеряна
            <button disabled> Связаться</button>
          </li>
          <li>
            Буйвол: Связь потеряна<button disabled> Связаться</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>
          Команда Гамма: Связь потеряна<button disabled> Связаться</button>
        </h2>
        <ul>
          <li>
            К-н Стэн Филдз: Связь потеряна<button disabled> Связаться</button>
          </li>
          <li>
            Джоуи Картер: Связь потеряна<button disabled> Связаться</button>
          </li>
          <li>
            Аника Рам: Связь потеряна<button disabled> Связаться</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>
          Орегон: Связь потеряна<button disabled> Связаться</button>
        </h2>
        <h2>
          Центральный офис: Связь потеряна<button disabled> Связаться</button>
        </h2>
      </div>
    </div>
  );
}
