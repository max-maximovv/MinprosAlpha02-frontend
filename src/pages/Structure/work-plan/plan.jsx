import styles from "./plan.module.css";

import { databaseUrl } from "../../../config";

import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkPlan() {
  const [plans, setPlans] = useState([]);
  const [filter, setFilter] = useState("все");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const pageSize = 10; // Сколько записей на страницу

  useEffect(() => {
    axios
      .get(`${databaseUrl}/api/plans`, {
        params: {
          populate: "file",
          pagination: { page, pageSize },
        },
      })
      .then((res) => {
        setPlans(res.data.data);
        setPageCount(res.data.meta.pagination.pageCount);
      })
      .catch((err) => console.error(err));
  }, [page]);

  const now = new Date();

  const getCategory = (dateString) => {
    const date = new Date(dateString);
    if (date.getFullYear() > now.getFullYear()) return "год";
    if (
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() >= now.getMonth()
    )
      return "год";
    return "архив";
  };

  const filteredPlans = plans.filter((plan) => {
    const category = getCategory(plan.attributes.publishedDate);
    return filter === "все" || category === filter;
  });

  return (
    <div className={styles.container}>
      <div className={styles.filterButtons}>
        {["все", "год", "архив"].map((name) => (
          <button
            key={name}
            className={filter === name ? styles.active : ""}
            onClick={() => {
              setFilter(name);
              setPage(1);
            }}
          >
            {name === "все"
              ? "Все"
              : name === "год"
              ? "План работы на год"
              : "Архив"}
          </button>
        ))}
      </div>

      <div className={styles.plansList}>
        {filteredPlans.map((plan) => {
          const { title, publishedDate, file } = plan.attributes;
          const fileUrl = file?.data?.attributes?.url || "#";
          const dateText = new Date(publishedDate).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });

          return (
            <div key={plan.id} className={styles.planCard}>
              <a
                href={`${databaseUrl}${fileUrl}`}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
              <div className={styles.date}>
                <p>{dateText}</p>
                <a href={`${databaseUrl}${fileUrl}`} download>
                  <img src="\imgs\icons\icons8-скачать-50.png" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            className={page === i + 1 ? styles.active : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WorkPlan;
