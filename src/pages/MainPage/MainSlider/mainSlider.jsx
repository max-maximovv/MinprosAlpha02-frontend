import styles from "./mainSlider.module.css";
import { getData } from "../../../hooks/fetchData";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MainSlider() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData(
      "http://192.168.100.12:1337/api/glavnaya-straniczas?fields[0]=MainSliderTitle&fields[1]=MainSliderText&populate[MainSliderImg][fields][0]=name&populate[MainSliderImg][fields][1]=url"
    ).then((res) => {
      let newData = res.data.slice(-6);
      setData(newData);
    });
  }, []);
  return (
    <>
      <article className={styles.mainSlider} id="firstSlider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
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
                  <SwiperSlide>
                    <div className={styles.mainSlide} id={index}>
                      <div className={styles.MainSliderContainer}>
                        <div className={styles.mainSlideTextContainer}>
                          <h2>ГЛАВНЫЕ НОВОСТИ</h2>
                          <div>
                            <h3>{itm.attributes.MainSliderTitle}</h3>
                            <p>{itm.attributes.MainSliderText}</p>
                          </div>
                        </div>
                      </div>

                      <img
                        src={
                          "http://192.168.100.12:1337" +
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
