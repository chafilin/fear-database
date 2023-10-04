import Link from "next/link";
import React from "react";

export default function Connections(){
    return (
        <div>
            <Link href="/">
                Главная
            </Link>
            <h1>Связь с командами</h1>
            <div>
                <h2>Команда Сибил Беннет: <button disabled>Связь потеряна</button></h2>
                <ul>
                    <li>К-н Сибил Беннет: <button disabled>Связь потеряна</button></li>
                    <li>Д-р Сал Ангер: <button disabled>Связь потеряна</button></li>
                    <li>Гарри Форрестер: <button disabled>Связь потеряна</button></li>
                </ul>
            </div>
            <div>
                <h2>Команда Бетта: <button disabled>Связь потеряна</button></h2>
                <ul>
                    <li>К-н Саша Клейн: <button disabled>Связь потеряна</button></li>
                    <li>Д-р Виктор Риверс: <button disabled>Связь потеряна</button></li>
                    <li>Буйвол: <button disabled>Связь потеряна</button></li>
                </ul>
            </div>
            <div>
                <h2>Команда Гамма: <button disabled>Связь потеряна</button></h2>
                <ul>
                    <li>К-н Стэн Филдз: <button disabled>Связь потеряна</button></li>
                    <li>Джоуи Картер: <button disabled>Связь потеряна</button></li>
                    <li>Аника Рам: <button disabled>Связь потеряна</button></li>
                </ul>
            </div>
            <div>
                <h2>Орегон: <button disabled>Связь потеряна</button></h2>
            </div>
        </div>
    )
}
