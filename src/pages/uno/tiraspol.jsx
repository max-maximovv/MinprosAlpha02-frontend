import UnoTemplate from "./template/unoTemplate";

import React, { useRef, useState, useEffect } from "react";

export default function TiraspolUNO() {
  const database =
    "http://192.168.100.12:1337/api/unos?filters[id][$eq]=3&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url";
  const title = "УПРАВЛЕНИЕ НАРОДНОГО  ОБРАЗОВАНИЯ Г. ТИРАСПОЛЯ";
  const site = "http://unotiraspol.org/";
  const telegram = "";
  const Address = () => {
    return (
      <>
        г. Тирасполь,
        <br /> ул. Манойлова, 33
      </>
    );
  };
  const telephone = "0 (533) 777 34";
  const mail = "unotiraspol@yandex.ru";
  return (
    <UnoTemplate
      http={database}
      title={title}
      siteHref={site}
      telegramHref={telegram}
      address={<Address />}
      telephone={telephone}
      mail={mail}
    />
  );
}
