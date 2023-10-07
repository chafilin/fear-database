import Link from "next/link";
import React from "react";

const Ghosts = () => {
  return (
    <div>
      <Link href="/">Главная</Link>
      <h1>Призраки</h1>
      <p>
        Призрак — душа умершего человека, которая осталась существовать среди
        живых людей. Причины, по которым призраки существуют обширны.
        Исследования призраков продолжаются до сих пор.
      </p>
      <p>Призраки могут быть агрессивны и/или опасны.</p>
      <p>
        Если призрак опасен и зол, он может начать охоту. Во время охоты техника
        начинает сбоить. Призрак неуязвим к обычному оружию. Рекомендуется
        бежать подальше и прятаться. Чаще всего к охоте приводят следующие
        раздражители:
      </p>
      <ul>
        <li> использование соли/распятий/святой воды/благовоний</li>
        <li> разрушение места обитания, </li>
        <li> ритуалы изгнания, </li>
        <li>
          активное использование иных мистических ритуалов, даров, предметов,
        </li>
        <li> долгое нахождение живого существа на территории призрака.</li>
      </ul>
      <h2>Регламент изгнания:</h2>
      <ol>
        <li>узнать имя</li>
        <li>узнать причину смерти</li>
        <li>
          <Link href="/ghosts/search">узнать тип призрака</Link>{" "}
        </li>
        <li>провести соответствующий ритуал в месте обитания призрака</li>
      </ol>
      <p>
        Призраки могут изменить форму, чтобы эффективнее охотиться или
        прятаться. Но такая метаморфоза энергозатратна. Поэтому к ней прибегают
        только в крайних случаях
      </p>
      <p>
        Рядом с сильным призраком могут находиться слабые привидения, которые не
        могут найти покой, пока сильный призрак не будет изгнан. Чаще всего
        привидения — души умерших, которые при жизни были близки к призраку или
        стали его жертвами. Привидения могут мешать изгнанию, но чаще всего —
        помогают, поскольку сами страдают от связи с призраком или с миром
        живых.
      </p>
      <p>
        Если у вас появились новые сведения о призраках или вы хотите
        скорректировать имеющуюся информацию, пожалуйста, обратитесь к своему
        руководителю или в центральный офис.
      </p>
    </div>
  );
};

export default Ghosts;
