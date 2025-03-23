import UnoTemplate from "./template/unoTemplate";
import { databaseUrl } from "../../config";
import React, { useRef, useState, useEffect } from "react";

export default function DubossariUNO() {
  const database = `${databaseUrl}/api/unos?filters[id][$eq]=8&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url`;
  const title = "Дубоссарское управление народного образования";
  const site = "https://dubossary-uno.ru/";
  const telegram = "";
  const Address = () => {
    return (
      <>
        Дубоссары,
        <br /> ул. Свердлова, 9б
      </>
    );
  };
  const telephone = "(215) 2-39-74";
  const mail = "dubossari@mail.ru";
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
