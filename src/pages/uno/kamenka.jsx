import UnoTemplate from "./template/unoTemplate";

import React, { useRef, useState, useEffect } from "react";

export default function KamenkaUNO() {
  const database =
    "http://192.168.100.12:1337/api/unos?filters[id][$eq]=6&populate[NewsSlideImg1][fields]=url&populate[NewsSlideImg2][fields]=url&populate[NewsSlideImg3][fields]=url&populate[AnonsSlideImg1][fields]=url&populate[AnonsSlideImg2][fields]=url&populate[AnonsSlideImg3][fields]=url";
  const title = "Каменское управление народного образования";
  const site = "https://uno.camenca.gospmr.org/";
  const telegram = "";
  const Address = () => {
    return (
      <>
        г. Каменка, <br /> ул. Ленина,6.
      </>
    );
  };
  const telephone = "(216) 2-13-53";
  const mail = "kamenkauno2011@mail.ru";
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
