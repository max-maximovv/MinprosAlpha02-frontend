import UnoTemplate from "./template/unoTemplate";
import databaseUrl from "../../config";

import React, { useRef, useState, useEffect } from "react";

export default function BenderyUNO() {
  const database = `${databaseUrl}/api/unos?filters[id][$eq]=2&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url`;
  const title = "УПРАВЛЕНИЕ НАРОДНОГО  ОБРАЗОВАНИЯ Г. БЕНДЕРЫ";
  const site = "http://www.unobendery.org/";
  const telegram = "";
  const Address = () => {
    return (
      <>
        г. Бендеры, <br /> ул. Суворова,57
      </>
    );
  };
  const telephone = "0 (552) 2-00-68";
  const mail = "unobendery@yandex.ru";
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
