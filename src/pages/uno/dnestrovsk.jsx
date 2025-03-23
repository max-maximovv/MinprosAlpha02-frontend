import UnoTemplate from "./template/unoTemplate";

import React, { useRef, useState, useEffect } from "react";

export default function DnestrovskUNO() {
  const database =
    "http://192.168.100.12:1337/api/unos?filters[id][$eq]=1&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url";
  const title = "Управление народного образования г. Днестровск";
  const site = "https://uno.dnestrovsk.gospmr.org/";
  const telegram = "";
  const Address = () => {
    return (
      <>
        г. Днестровск, <br /> ул.Терпиловского, 3
      </>
    );
  };
  const telephone = "(219) 3-00-41";
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
