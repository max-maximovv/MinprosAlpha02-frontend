import styles from "./main.module.css";
import React, { useRef, useState, useEffect } from "react";

export default function MainInstsPage() {
  const Item = (props) => {
    return (
      <a href={props.href}>
        <div className={styles.item}>
          <div className={styles.itemCircle}>
            <img src={props.img} />
          </div>
          <div className={styles.itemBlock}>
            <p>{props.text}</p>
          </div>
        </div>
      </a>
    );
  };
  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <div className={styles.decoration}></div>
        <h3>
          Государственные учреждения, подведомственные Министерству просвещения
        </h3>
        <div className={styles.decoration}></div>
      </div>

      <div className={styles.container}>
        <Item
          text="ГОУ «Республиканский молдавский теоретический лицей-комплекс»"
          img="/imgs/logotypes/01-12-119 приложение.png"
          href=""
        />
        <Item
          text="ГОУ «Республиканский украинский теоретический лицей-комплекс»"
          img="/imgs/logotypes/доз рутл-к.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Тираспольский техникум коммерции»"
          img="/imgs/logotypes/02-14-57 логотип.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Приднестровский колледж технологий и управления»"
          img="/imgs/logotypes/01-10-211 приложение.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Промышленно-строительный техникум»"
          img="/imgs/logotypes/01-11-138 приложение.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Бендерский педагогический колледж»"
          img="/imgs/logotypes/бпк.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Тираспольский аграрно-технический колледж им. М.В. Фрунзе»"
          img="/imgs/logotypes/логотип 6.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Рыбницкий политехнический техникум»"
          img="/imgs/logotypes/01-12-176 приложение.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Тираспольский техникум информатики и права»"
          img="/imgs/logotypes/тти.png"
          href=""
        />
        <Item
          text="ГОУ «Днестровский техникум энергетики и компьютерных технологий»"
          img="/imgs/logotypes/днестровск.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Каменский политехнический техникум им. И.С. Солтыса»"
          img="/imgs/logotypes/кпт.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Дубоссарский индустриальный техникум»"
          img="/imgs/logotypes/герб_1 512x512.png"
          href=""
        />
        <Item
          text="ГОУ СПО «Слободзейский политехнический техникум»"
          img="/imgs/logotypes/логотип.png"
          href=""
        />
        <Item
          text="ГОУ ДПО «Институт развития образования и повышения квалификации»"
          img="/imgs/logotypes/минпрос логотип.png"
          href=""
        />
        <Item
          text="ГУ «Центр экспертизы качества образования»"
          img="/imgs/logotypes/минпрос логотип.png"
          href=""
        />
      </div>
    </div>
  );
}
