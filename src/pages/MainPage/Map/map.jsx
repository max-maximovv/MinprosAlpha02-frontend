import styles from "./map.module.css";

export default function MapSection() {
  return (
    <div className={styles.blueBlock}>
      <div
        className={styles.blueBlockLeft}
        style={{
          backgroundImage: 'url("/imgs/backgrounds/bg-blue-сopy.png")',
        }}
      >
        <div className={styles.contactsContainer}>
          <h3>КОНТАКТЫ</h3>
          <p>
            <img src="" />
            Адрес Министерства
            <br /> просвещения ПМР: <br />
            г. Тирасполь, ул. Мира 27
          </p>
          <p>
            <img src="" />
            minpros@minpros.gospmr.org
          </p>
          <p>
            <img src="" />
            0-533-22229
          </p>
          <p>
            Горячая линия по координации и поддержке муниципальных органов
            управления образованием, руководителей организаций общего
            образования, педагогов и родителей по организации дистанционного
            обучения: <b>(533)22189</b>
          </p>
          <p>
            Горячая линия по вопросам дистанционного обучения в организациях
            среднего профессионального образования: <b>(533)22993</b>
          </p>
        </div>
      </div>
      <div className={styles.blueBlockRight}>
        <div className={styles.contactsMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.984927063343!2d29.64193054847139!3d46.835601349668224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9029277e4eb29%3A0x6cbf1cd0718a6a67!2z0JzQuNC90LjRgdGC0LXRgNGB0YLQstC-INCf0YDQvtGB0LLQtdGJ0LXQvdC40Y8g0J_QnNCg!5e0!3m2!1sru!2s!4v1713207613672!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
