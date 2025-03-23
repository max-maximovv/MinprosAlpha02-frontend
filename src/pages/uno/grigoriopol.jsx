import UnoTemplate from "./template/unoTemplate";

import React, { useRef, useState, useEffect } from "react";

export default function GrigoriopolUNO() {
  const database =
    "http://192.168.100.12:1337/api/unos?filters[id][$eq]=7&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url";
  const title = "Григориопольское управление народного образования";
  const site = "";
  const telegram = "";
  const Address = () => {
    return (
      <>
        г. Григориополь, <br /> ул. К. Маркса, 144
      </>
    );
  };
  const telephone = "(210) 3-27-48";
  const mail = "grigoriopol@mail.ru";
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
