import styles from "./unoTemplate.module.css";
import "./bullets.css";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getData } from "../../../hooks/fetchData";
import { databaseUrl } from "../../../config";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BlueBlock from "../../../components/blue-50-50-block/blue-block";

export default function UnoTemplate(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData(props.http).then((res) => {
      let newData = res.data.slice(-6);
      setData(newData);
    });
  }, []);
  const TextPart = () => {
    return (
      <>
        <div className={styles.TextPart}>
          <div>
            <h1>КОНТАКТЫ</h1>
            <div>
              <img src="/imgs/icons/address.png" className={styles.address} />
              <p>{props.address}</p>
            </div>
            <div>
              <img
                src="/imgs/icons/telephone.png"
                className={styles.telephone}
              />
              <p>{props.telephone}</p>
            </div>
            <div>
              <img src="/imgs/icons/email.png" className={styles.email} />
              <p>{props.mail}</p>
            </div>
          </div>
          <div className={styles.media}>
            <div>
              <a href={props.siteHref}>
                <img src="/imgs/icons/Website.png" />
                <p>САЙТ</p>
              </a>
            </div>
            <div>
              <a href={props.telegramHref}>
                <img src="/imgs/icons/Telegram.png" />
                <p>ТЕЛЕГРАМ</p>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  const SliderPart = () => {
    return (
      <div className={styles.UNOAnonsSlider} id="UNOSlider">
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
          id="AnonsSlider"
        >
          {data ? (
            <ul id="AnonsSlides">
              <SwiperSlide>
                <Slide
                  id="1"
                  slideText={data[0].attributes.AnonsSlideText1}
                  SlideUrl={
                    data[0].attributes.AnonsSlideImg1.data[0].attributes.url
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  id="2"
                  slideText={data[0].attributes.AnonsSlideText2}
                  SlideUrl={
                    data[0].attributes.AnonsSlideImg2.data[0].attributes.url
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  id="3"
                  slideText={data[0].attributes.AnonsSlideText3}
                  SlideUrl={
                    data[0].attributes.AnonsSlideImg3.data[0].attributes.url
                  }
                />
              </SwiperSlide>
            </ul>
          ) : (
            "Загрузка..."
          )}
        </Swiper>
      </div>
    );
  };
  const Slide = (props) => {
    return (
      <div className={styles.UNOmainSlide} id={props.id}>
        <div className={styles.UNOMainSliderContainer}>
          <div className={styles.UNOmainSlideTextContainer}>
            <h2>ПОСЛЕДНИЕ НОВОСТИ</h2>
            <div>
              <p>{props.slideText}</p>
            </div>
          </div>
        </div>

        <img src={databaseUrl + props.SlideUrl} alt="slide" />
      </div>
    );
  };
  return (
    <>
      <div className={styles.UNOtitle}>
        <div className={styles.UNOtitleTextContainer}>
          <h1 className={styles.UNOtitleText}>{props.title}</h1>
        </div>
      </div>
      <article className={styles.UNOmainSlider} id="UNOSlider">
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
          className={styles.UNOSwiper}
        >
          {data ? (
            <ul>
              <SwiperSlide>
                <Slide
                  id="1"
                  slideText={data[0].attributes.NewsSlideText1}
                  SlideUrl={
                    data[0].attributes.NewsSlideImg1.data[0].attributes.url
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  id="2"
                  slideText={data[0].attributes.NewsSlideText2}
                  SlideUrl={
                    data[0].attributes.NewsSlideImg2.data[0].attributes.url
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  id="3"
                  slideText={data[0].attributes.NewsSlideText3}
                  SlideUrl={
                    data[0].attributes.NewsSlideImg3.data[0].attributes.url
                  }
                />
              </SwiperSlide>
            </ul>
          ) : (
            "Загрузка..."
          )}
        </Swiper>
      </article>
      <BlueBlock left={<TextPart />} right={<SliderPart />} />
    </>
  );
}
