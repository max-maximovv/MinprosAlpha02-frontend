import styles from "./projects.module.css";
import { databaseUrl } from "../../../config";

import { getData } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";

function Card(props) {
  return (
    <li className={styles.projectsCard}>
      <a href={props.url}>
        <div>
          <img src={props.img} />
          <p>{props.name}</p>
        </div>
      </a>
    </li>
  );
}

export default function ProjectsBlock(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const myData = getData(`${databaseUrl}/api/management-projects`).then(
      (res) => {
        setData(res.data);
      }
    );
  }, []);
  return (
    <div className={styles.manageProjects}>
      <h3>{props.title}</h3>
      {data ? (
        <ul>
          {data.map((itm, index) => {
            return (
              <Card
                key={index}
                name={itm.attributes.title}
                url={itm.attributes.Link}
                img={itm.attributes.Img}
              />
            );
          })}
        </ul>
      ) : (
        "Загрузка..."
      )}
    </div>
  );
}
