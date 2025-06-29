import { databaseUrl } from "../../../config";
import React, { useRef, useState, useEffect } from "react";
import { getData } from "../../../hooks/fetchData";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import styles from "./history.module.css";

function History() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(
          `${databaseUrl}/api/edinichnye-straniczies?filters[id][$eq]=1`
        );
        let newData = res.data.slice(-6);
        setData(newData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, [databaseUrl]);

  if (!data) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.section}>
      <p className={styles.title}>{data[0].attributes.title}</p>
      <div className={styles.markdown}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {data[0].attributes.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default History;
