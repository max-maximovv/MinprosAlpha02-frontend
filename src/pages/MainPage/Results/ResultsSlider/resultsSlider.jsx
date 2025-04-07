import styles from "./resultsSlider.module.css";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { databaseUrl } from "../../../../config";

export default function ResultsSlider() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `${databaseUrl}/api/glavnaya-straniczas?fields[0]=SecondSliderTitle&fields[1]=SecondSliderText&populate[SecondSliderImg][fields][0]=name&populate[SecondSliderImg][fields][1]=url`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.data || data.data.length === 0) return;
        let newData = data.data.slice(-6);
        setData(newData);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);
  return (
    <div className={styles.resultsSlider}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.ResultsSwiper}
        id="secondSlider"
      >
        {data ? (
          <ul>
            {data.map((resItm, resIndex) => {
              return (
                <SwiperSlide key={resIndex}>
                  <div className={styles.resultsSlide}>
                    <div className={styles.resultsSlideTextContainer}>
                      <h2>{resItm.attributes.SecondSliderTitle}</h2>
                      <p>{resItm.attributes.SecondSliderText}</p>
                    </div>
                    <img
                      src={
                        databaseUrl +
                        resItm.attributes.SecondSliderImg.data[0].attributes.url
                      }
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </ul>
        ) : (
          "Загрузка..."
        )}
      </Swiper>
    </div>
  );
}
