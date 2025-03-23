import "./contacts.css";

export default function Contacts() {
  return (
    <>
      <article id="contacts">
        <h3 className="contacts-title">МЫ В СОЦ. СЕТЯХ</h3>
        <div className="contacts">
          <a href="https://www.instagram.com/umpminpros_pmr/">
            <div className="contacts-item">
              <img src="/imgs/main-page/10-removebg-preview.png" />
              <p>инстаграм</p>
            </div>
          </a>
          <a href="https://t.me/MinprosPMR">
            <div className="contacts-item">
              <img src="/imgs/main-page/11-removebg-preview (1).png" />
              <p>телеграм</p>
            </div>
          </a>
          <a href="https://invite.viber.com/?g2=AQAyDGqv3O8spk10LfnOjq7r1IG4hgxLlExDD9de7%2Bb5fS4AlSY7zJbNfJMF6qCP&lang=ru">
            <div className="contacts-item">
              <img src="/imgs/main-page/12-removebg-preview.png" />
              <p>вайбер</p>
            </div>
          </a>
        </div>
      </article>
    </>
  );
}
