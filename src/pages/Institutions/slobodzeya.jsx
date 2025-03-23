import React from "react";
import InstTemplate from "./template/template";
import styles from "./template/template.module.css";
import { databaseUrl } from "../../config";
export default function Slobodzeya() {
  const database = `${databaseUrl}/api/institutions?filters[id][$eq]=2&populate[SliderImg1][fields]=url&populate[SliderImg2][fields]=url&populate[SliderImg3][fields]=url&populate[SupervisorImg][fields]=url&populate[Logotype][fields]=url`;

  const Information = () => {
    return (
      <>
        <div className={styles.statisticItem}>
          <h2>10</h2>
          <p>СПЕЦИАЛЬНОСТЕЙ И ПРОФЕССИЙ</p>
        </div>
        <div className={styles.statisticItem}>
          <h2>72 ГА</h2>
          <p>ЗЕМЛИ УЧЕБНОГО ХОЗЯЙСТВА</p>
        </div>
        <div className={styles.statisticItem}>
          <h2>6</h2>
          <p>СПЕЦИАЛЬНОСТЕЙ</p>
        </div>
        <div className={styles.statisticItem}>
          <h2>6</h2>
          <p>СПЕЦИАЛЬНОСТЕЙ</p>
        </div>
        <div className={styles.statisticItem}>
          <h2>6</h2>
          <p>СПЕЦИАЛЬНОСТЕЙ</p>
        </div>
        <div className={styles.statisticItem}>
          <h2>6</h2>
          <p>СПЕЦИАЛЬНОСТЕЙ</p>
        </div>
      </>
    );
  };
  return <InstTemplate http={database} information={<Information />} />;
}
