import styles from "./resultsSlider.module.css";

import { getData } from "../../../../hooks/fetchData";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { databaseUrl } from "../../../../config";

export default function ResultsSlider() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData(
      `${databaseUrl}/api/glavnaya-straniczas?fields[0]=SecondSliderTitle&fields[1]=SecondSliderText&populate[SecondSliderImg][fields][0]=name&populate[SecondSliderImg][fields][1]=url`
    ).then((res) => {
      let newData = res.data.slice(-6);
      setData(newData);
    });
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
          delay: 3500000,
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
                <SwiperSlide>
                  <div className={styles.resultsSlide} id={resIndex}>
                    <div className={styles.resultsSlideTextContainer}>
                      <h3>{resItm.attributes.SecondSliderTitle}</h3>
                      <p>{resItm.attributes.SecondSliderText}</p>
                    </div>
                    <img
                      src={
                        databaseUrl +
                        resItm.attributes.SecondSliderImg.data[0].attributes.url
                      }
                      alt="resSlide"
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
