import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import { databaseUrl } from "../../../config";
import styles from "./template.module.css";

export default function ManageTemplate(props) {
  const [images, setImages] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `${databaseUrl}/api/managements?filters[id][$eq]=1&populate[sliderImgs][fields][0]=url&populate[activityImg][fields]=url`
    )
      .then((res) => res.json())
      .then((data) => {
        const attributes = data.data[0].attributes;

        const imageData = data.data[0].attributes.sliderImgs.data || [];
        const fullUrls = imageData.map(
          (img) => `${databaseUrl}${img.attributes.url}`
        );
        setData(attributes);
        setImages(fullUrls);
      });
  }, []);
  console.log(data);

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
          <img
            src={
              "http://192.168.100.12:1337" +
              data.activityImg.data[0].attributes.url
            }
          />
        </div>
        <div>
          <Swiper
            direction={"vertical"}
            className="mySwiper"
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
