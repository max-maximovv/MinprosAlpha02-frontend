import React from "react";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styles from "./Cyclogram.module.css";
import "./cyclogram.css";
import { databaseUrl } from "../../../config";
export default function Cyclogram() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dayInfo, setDayInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const formatDateForStrapi = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (date) => {
    const formattedDate = formatDateForStrapi(date);
    setSelectedDate(formattedDate);
  };
  const getDayName = (dateString) => {
    const months = {
      "01": "Января",
      "02": "Февраля",
      "03": "Марта",
      "04": "Апреля",
      "05": "Мая",
      "06": "Июня",
      "07": "Июля",
      "08": "Августа",
      "09": "Сентября",
      10: "Октября",
      11: "Ноября",
      12: "Декабря",
    };

    let day = "";
    if (dateString.slice(8, 10) < 10) {
      day = dateString.slice(9, 10);
    } else {
      day = dateString.slice(8, 10);
    }
    let monthNumber = months[dateString.slice(5, 7)];
    const result = day + " " + monthNumber;

    return result;
  };
  const getWeekDayName = (dateString) => {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("ru-RU", { weekday: "long" }).format(date);
  };

  useEffect(() => {
    if (selectedDate) {
      setLoading(true);
      fetch(
        `${databaseUrl}/api/cyclograms?filters[date][$eq]=${selectedDate}&populate=records`
      )
        .then((res) => res.json())
        .then((data) => {
          const dayData = data.data[0]?.attributes || null;
          if (dayData) {
            dayData.records =
              dayData.records?.data.map((record) => ({
                text: record.attributes.text,
                time: record.attributes.time,
                place: record.attributes.place,
              })) || [];
          }
          setDayInfo(dayData);
        })
        .catch((err) => console.error("Ошибка загрузки:", err))
        .finally(() => setLoading(false));
    }
  }, [selectedDate]);

  const CalendarBlock = () => {
    return (
      <div className={styles.calendar}>
        <h2>ЦИКЛОГРАММА РАБОТЫ МИНИСТЕРСТВА</h2>
        <div className={styles.calendarContainer}>
          <Calendar
            showNeighboringMonth={false}
            onClickDay={handleDateChange}
          />
        </div>
      </div>
    );
  };

  const InfoBlock = () => {
    return (
      <div className={styles.infoBlock}>
        {selectedDate ? (
          loading ? (
            <p>Загрузка...</p>
          ) : dayInfo ? (
            <div className={styles.margin}>
              <h2 className={styles.day}>
                {getDayName(selectedDate)} -{" "}
                <span>{getWeekDayName(selectedDate)}</span>
              </h2>
              {dayInfo.records.length > 0 ? (
                <ul>
                  {dayInfo.records
                    .sort((a, b) => a.time.localeCompare(b.time))
                    .map((record, index) => (
                      <div className={styles.infoItem} key={index}>
                        <p className={styles.infoItemTime}>{record.time}</p>
                        <div className={styles.wall}></div>
                        <div>
                          <p className={styles.infoItemText}>{record.text}</p>
                          <p className={styles.infoItemPlace}>
                            ({record.place})
                          </p>
                        </div>
                      </div>
                    ))}
                </ul>
              ) : (
                <div>
                  <h2 className={styles.day}>
                    {getDayName(selectedDate)} -{" "}
                    <span>{getWeekDayName(selectedDate)}</span>
                  </h2>
                  <p>Нет записей для этой даты</p>
                </div>
              )}
            </div>
          ) : (
            <div>
              <h2 className={styles.day}>
                {getDayName(selectedDate)} -{" "}
                <span>{getWeekDayName(selectedDate)}</span>
              </h2>
              <p>Нет записей для этой даты</p>
            </div>
          )
        ) : (
          <p>Выберите день</p>
        )}
      </div>
    );
  };

  return (
    <div className={styles.cyclogram}>
      <CalendarBlock />
      <InfoBlock />
    </div>
  );
}
