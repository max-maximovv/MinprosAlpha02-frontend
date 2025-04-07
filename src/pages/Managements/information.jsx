import React from "react";
import ManageTemplate from "./template/template";

export default function UIDiAO() {
  const database = `/api/managements?filters[id][$eq]=4
      &populate[sliderImgs][fields]=url
      &populate[activityImg][fields]=url
      &populate[slides][populate]=image,text`;
  return <ManageTemplate database={database} />;
}
