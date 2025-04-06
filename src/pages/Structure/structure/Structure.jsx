import styles from "./Structure.module.css";
import StructureCard from "../../../components/structure-card/structure-card";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import useWindowDimensions from "../../../components/useWindowDimensions/WindowDimensions";

export default function Structure() {
  const dimensions = useWindowDimensions();
  console.log(dimensions.width);
  let slides = 3;
  if (dimensions.width > 1024) {
    slides = 4;
  } else {
    if (dimensions.width < 780) {
      slides = 1;
    } else {
      slides = 3;
    }
  }
  return (
    <>
      <article className={styles.structure}>
        <h1 className={styles.structureTitle}>
          Структура Министерства просвещения
        </h1>
        <h2>РУКОВОДСТВО</h2>
        <div>
          <StructureCard
            img="/imgs/structure/svetlana-nikolaevna-ivanishina.png"
            name="Светлана Николаевна Иванишина"
            career="Министр"
            link="biography"
          />
        </div>
        <h2>УПРАВЛЕНИЯ МИНИСТЕРСТВА ПРОСВЕЩЕНИЯ</h2>
        <div className={styles.slider}>
          <Swiper
            slidesPerView={slides}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <StructureCard
                img="/imgs/structure/education.webp"
                name="Управление общего образования"
                link=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <StructureCard
                img="/imgs/structure/youth-policy.webp"
                name="Управление молодежной политики и дополнительного образования"
                link=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <StructureCard
                img="/imgs/structure/1.webp"
                name="Управление профессионального образования и науки"
                link=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <StructureCard
                img="/imgs/structure/laws.webp"
                name="Управление государственного контроля и мониторинга системы образования"
                link=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <StructureCard
                img="/imgs/structure/education-work.webp"
                name="Управление правового обеспечения и кадровой политики"
                link=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <StructureCard
                img="/imgs/structure/2.webp"
                name=" Управление планирования, финансирования, исполнения бюджета и государственных закупок"
                link=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <StructureCard
                img="/imgs/structure/3.webp"
                name="Управление информационно-документационного и архивного обеспечения"
                link=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </article>
    </>
  );
}
