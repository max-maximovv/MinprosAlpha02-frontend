import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getData } from "../../../hooks/fetchData";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import styles from "./template.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import BlueBlock from "../../../components/blue-50-50-block/blue-block";

export default function InstTemplate(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(props.http);
        let newData = res.data.slice(-6);
        setData(newData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, [props.http]);

  if (!data) {
    return <div>Загрузка...</div>;
  }
  const Slider = () => {
    return (
      <div className={styles.Slider} id="InstSlider">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className={styles.ResultsSwiper}
          id="InstSlider"
        >
          {data ? (
            <ul id="AnonsSlides">
              <SwiperSlide>
                <img
                  src={
                    "http://192.168.100.12:1337" +
                    data[0].attributes.SliderImg1.data[0].attributes.url
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    "http://192.168.100.12:1337" +
                    data[0].attributes.SliderImg2.data[0].attributes.url
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={
                    "http://192.168.100.12:1337" +
                    data[0].attributes.SliderImg3.data[0].attributes.url
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
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.titleTextContainer}>
          <h1 className={styles.titleText}>{data[0].attributes.name}</h1>
        </div>
      </div>
      <Slider />
      <div className={styles.info}>
        <div className={styles.statistic}>{props.information}</div>
        <div className={styles.contacts}>
          <a href={data[0].attributes.site} className={styles.siteHref}>
            <div className={styles.itemBackground}></div>
            <div className={styles.shadow}></div>
            <div className={styles.contactsItemText}>
              <h5>Перейти на сайт</h5>
              <p>Получите больше информации</p>
              <img
                className={styles.itemLogotype}
                src={
                  "http://192.168.100.12:1337" +
                  data[0].attributes.Logotype.data[0].attributes.url
                }
              />
            </div>
          </a>
          <div className={styles.contactsItem}>
            <hr />
            <div className={styles.contactsBlock}>
              <p>Социальные сети</p>
              <div>
                <a href={data[0].attributes.youtube}>
                  <img
                    src="/imgs/icons/yt-logo.png"
                    className={styles.youtube}
                  />
                </a>
                <a href={data[0].attributes.instagram}>
                  <img
                    src="/imgs/icons/blue-instagram.png"
                    className={styles.instagram}
                  />
                </a>
                <a href={data[0].attributes.ok}>
                  <img src="/imgs/icons/blue-ok.png" className={styles.ok} />
                </a>
              </div>
            </div>
            <hr />
            <div className={styles.contactsInformation}>
              <p>Приёмная</p>
              <div>
                <img
                  src="/imgs/icons/location-gray.png"
                  className={styles.address}
                />
                <p>{data[0].attributes.address}</p>
              </div>
              <div>
                <img
                  src="/imgs/icons/telephone-gray.png"
                  className={styles.telephone}
                />
                <p>{data[0].attributes.supervisorTelephone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.aboutInst}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {data[0].attributes.About}
          </ReactMarkdown>
        </div>
        <div className={styles.supervision}>
          <div className={styles.supervisionBlock}>
            <h3>РУКОВОДСТВО</h3>
            <h2>
              {data[0].attributes.supervisor}
              <br />
              Директор
            </h2>
            <div className={styles.contactsInformation}>
              <div>
                <img
                  src="/imgs/icons/location-gray.png"
                  className={styles.address}
                />
                <p>{data[0].attributes.address}</p>
              </div>
              <div>
                <img
                  src="/imgs/icons/telephone-gray.png"
                  className={styles.telephone}
                />
                <p>{data[0].attributes.supervisorTelephone}</p>
              </div>
            </div>
          </div>
          <div className={styles.supervisionImg}>
            <img
              src={
                "http://192.168.100.12:1337" +
                data[0].attributes.SupervisorImg.data[0].attributes.url
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
