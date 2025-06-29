import styles from "./plan.module.css";

import { databaseUrl } from "../../../config";

import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkPlan() {
  const [plans, setPlans] = useState([]);
  const [filter, setFilter] = useState("все");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    const params = {
      populate: "file",
      pagination: { page, pageSize },
      sort: ["publishedDate:desc"],
    };

    const currentYear = new Date().getFullYear();

    if (filter === "архив") {
      params.filters = {
        publishedDate: {
          $lt: `${currentYear}-01-01`,
        },
      };
    }

    if (filter === "год") {
      params.filters = {
        publishedDate: {
          $gte: `${currentYear}-01-01`,
          $lte: `${currentYear}-12-31`,
        },
      };
    }

    axios
      .get(`${databaseUrl}/api/plans`, { params })
      .then((res) => {
        setPlans(res.data.data);
        setPageCount(res.data.meta.pagination.pageCount);
      })
      .catch((err) => console.error(err));
  }, [page, filter]);

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

  const filteredPlans = plans;

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
                  <img src="\imgs\icons\icons8-скачать-50.png" alt="download" />
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
