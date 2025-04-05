import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";

import { Grid, Navigation } from "swiper/modules";
import { databaseUrl } from "../../../config";
import styles from "./template.module.css";
import "./slide.css";

export default function ManageTemplate(props) {
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [activityImg, setActivityImg] = useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(
      `${databaseUrl}/api/managements?filters[id][$eq]=1
      &populate[sliderImgs][fields]=url
      &populate[activityImg][fields]=url
      &populate[slides][populate]=image,text`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.data || data.data.length === 0) return;
        const attributes = data.data[0].attributes;
        const activityImgUrl =
          attributes.activityImg?.data?.[0]?.attributes?.url || null;
        const slidesData = attributes.slides || [];
        const slides = slidesData.map((slide) => ({
          image: `${databaseUrl}${slide.image?.data?.attributes?.url || ""}`,
          text: slide.text || "",
          link: slide.link || "",
        }));
        const imageData = attributes.sliderImgs?.data || [];
        const fullUrls = imageData.map(
          (img) => `${databaseUrl}${img.attributes.url}`
        );
        setData(attributes);
        setImages(fullUrls);
        setActivityImg(activityImgUrl);
        setSlides(slides);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);
  const SlideText = (data) => {
    return (
      <div className={styles.container}>
        <div>
          <p>{data.email}</p>
          <p>{data.telephone}</p>
        </div>

        <p>{data.name}</p>
      </div>
    );
  };
  const SlideVerticalSlider = (props) => {
    return (
      <a href={props.href}>
        <div className={styles.SlideVerticalSlider}>
          <p>{props.text}</p>
          <img src={props.src} alt="" />
        </div>
      </a>
    );
  };
  return (
    <div>
      <div className={styles.slider}>
        <Swiper spaceBetween={10} slidesPerView={1} id="managementSlider">
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slide}>
                <SlideText />
                <img src={url} alt={`slide-${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.verticalSlider}>
        <div className={styles.imgBlock}>
          <h3>Деятельность управления</h3>
          <img src={databaseUrl + activityImg} />
        </div>
        <Swiper
          direction={"vertical"}
          className={styles.verticalSwiper}
          id="verticalSwiperManagements"
          navigation={true}
          modules={[Grid, Navigation]}
          slidesPerView={2}
          grid={{
            rows: 2,
          }}
        >
          <div className={styles.slidesContainer}>
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <SlideVerticalSlider
                  src={slide.image}
                  text={slide.text}
                  href={slide.link}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
