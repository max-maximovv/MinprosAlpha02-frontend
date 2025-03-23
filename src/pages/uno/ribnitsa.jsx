import UnoTemplate from "./template/unoTemplate";
import { databaseUrl } from "../../config";
import React, { useRef, useState, useEffect } from "react";

export default function RibnitsaUNO() {
  const database = `${databaseUrl}/api/unos?filters[id][$eq]=4&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url`;
  const title = "Рыбницкое управление народного образования";
  const site = "https://ryno.idknet.com/";
  const telegram = "";
  const Address = () => {
    return (
      <>
        г. Рыбница <br /> ул. Кирова, 136
      </>
    );
  };
  const telephone = "(555) 3-38-29";
  const mail = "ribnitsauno@mail.ru";
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
