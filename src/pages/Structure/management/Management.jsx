import React from "react";
import styles from "./Management.module.css";
export default function Management() {
  return (
    <>
      <div className={styles.management}>
        <h1 className={styles.title}>РУКОВОДСТВО МИНИСТЕРСТВА ПРОСВЕЩЕНИЯ</h1>
        <a href="biography">
          <div className={styles.card}>
            <div className={styles.textContainer}>
              <h2>Светлана Николаевна Иванишина</h2>
              <p>министр</p>
            </div>
          </div>
        </a>
        <a href="" download>
          Постановление Правительства Приднестровской Молдавской Республики
          <u>
            "Об утверждении Положения, структуры и предельной штатной
            численности Министерства просвещения Приднестровской Молдавской
            Республики"
          </u>
        </a>
      </div>
    </>
  );
}
