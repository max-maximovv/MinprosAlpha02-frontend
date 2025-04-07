import styles from "./mainSlider.module.css";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { databaseUrl } from "../../../config";
export default function MainSlider() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `${databaseUrl}/api/glavnaya-straniczas?fields[0]=MainSliderTitle&fields[1]=MainSliderText&populate[MainSliderImg][fields][0]=name&populate[MainSliderImg][fields][1]=url`
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
    <>
      <article className={styles.mainSlider} id="firstSlider">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySwiper}
        >
          {data ? (
            <ul>
              {data.map((itm, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.mainSlide}>
                      <div className={styles.MainSliderContainer}>
                        <div className={styles.mainSlideTextContainer}>
                          <h2>ГЛАВНЫЕ НОВОСТИ</h2>
                          <div>
                            <p className={styles.mainSlideTextContainerTitle}>
                              {itm.attributes.MainSliderTitle}
                            </p>
                            <p className={styles.mainSlideTextContainerText}>
                              {itm.attributes.MainSliderText}
                            </p>
                          </div>
                        </div>
                      </div>

                      <img
                        src={
                          databaseUrl +
                          itm.attributes.MainSliderImg.data[0].attributes.url
                        }
                        alt="slide"
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
      </article>
    </>
  );
}
