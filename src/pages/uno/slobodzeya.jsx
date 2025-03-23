import UnoTemplate from "./template/unoTemplate";

import React, { useRef, useState, useEffect } from "react";

export default function SlobodzeyaUNO() {
  const database =
    "http://192.168.100.12:1337/api/unos?filters[id][$eq]=5&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url";
  const title = "Слободзейское районное управление народного образования";
  const site = "";
  const telegram = "";
  const Address = () => {
    return (
      <>
        г. Слободзея, <br /> ул. Ленина, д. 80 Д.
      </>
    );
  };
  const telephone = "(219) 2-23-35";
  const mail = "unoksisp@mail.ru";
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
