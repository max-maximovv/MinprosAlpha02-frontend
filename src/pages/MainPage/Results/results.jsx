import styles from "./results.module.css";
import ResultsSlider from "./ResultsSlider/resultsSlider";
import useWindowDimensions from "../../../components/useWindowDimensions/WindowDimensions";

function ResultsInfo() {
  return (
    <div
      className={styles.info}
      id="history"
      style={{
        backgroundImage: 'url("/imgs/backgrounds/bg-blue-сopy.png")',
      }}
    >
      <img src="/imgs/логотип_минпрос-removebg-preview 1.svg" alt="logotype" />
      <h2>
        МИНИСТЕРСТВО ПРОСВЕЩЕНИЯ
        <br /> ПРИДНЕСТРОВСКОЙ
        <br /> МОЛДАВСКОЙ РЕСПУБЛИКИ
      </h2>
      <div className={styles.infoTextContainer}>
        <p>
          25 июля 2000 года принимается решение о слиянии всех органов и
          учреждений науки, образования, культуры, спорта и молодежной политики
          в единый государственный исполнительный орган – Министерство
          просвещения Приднестровской Молдавской Республики.
        </p>
      </div>
      <button className={styles.aboutBtn}>
        <a href="#">ПОДРОБНОСТИ</a>
      </button>
    </div>
  );
}

export default function Results() {
  const dimensions = useWindowDimensions();

  return (
    <div className={styles.results}>
      {dimensions.width > 900 ? (
        <>
          <ResultsSlider />
          <ResultsInfo />
        </>
      ) : (
        <>
          <ResultsInfo />
          <ResultsSlider />
        </>
      )}
    </div>
  );
}
