"use client";
import styles from "./header.module.css";

import * as React from "react";

import Dropdown from "./dropdown/dropdown";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import useWindowDimensions from "../useWindowDimensions/WindowDimensions";
import MobileHeader from "./mobileHeader/MobileHeader";
import ProjectsBlock from "./projects-block/projects";

import {
  AboutList,
  Activity,
  Education,
  DocumentationList,
  CivilAppeals,
  CivilService,
  ControlActivity,
  UNO,
} from "./dropdownData";

export default function Header() {
  const dimensions = useWindowDimensions();

  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function ReloadPage() {
    window.location.reload();
  }
  return (
    <>
      {dimensions.width > 1240 ? (
        <header className={styles.topColor}>
          <div className={styles.navbar}>
            <div className={styles.navbarHead}>
              <a href="/" className={styles.logotype}>
                <img src="/imgs/logotypes/width_200.webp" alt="logotype" />
                <div className={styles.logoText}>
                  <p className={styles.logoH}>Министерство просвещения </p>
                  <p className={styles.logoHM}>
                    Приднестровской Молдавской Республики
                  </p>
                </div>
              </a>
              <div className={styles.headerItems}>
                <a>
                  <Dropdown
                    title={<img src="/imgs/other.svg" alt="other" />}
                    links={<ProjectsBlock title="Проекты министерства" />}
                  />
                </a>
                {/**<a>
                  <img src="/imgs/search.svg" alt="search" />
                </a>**/}
              </div>
            </div>

            <div className={styles.bar}>
              <Dropdown title="О министерстве" links={<AboutList />} />
              <Dropdown title="Деятельность" links={<Activity />} />
              <Dropdown title="Система образования" links={<Education />} />
              <Dropdown
                title="Нормативные правовые акты"
                links={<DocumentationList />}
              />
              <Dropdown title="УНО" links={<UNO />} />
              <Button variant="text">
                <Link to="/news" className="header-link">
                  Новости
                </Link>
              </Button>

              {/**
              <Dropdown
                title="ГОСУДАРСТВЕННАЯ ГРАЖДАНСКАЯ СЛУЖБА"
                links={<CivilService />}
              />
              <Dropdown title="ОБРАЩЕНИЯ ГРАЖДАН" links={<CivilAppeals />} />
              <Dropdown
                title="КОНТРОЛЬНАЯ (НАДЗОРНАЯ) ДЕЯТЕЛЬНОСТЬ"
                links={<ControlActivity />}
              />
              <Button variant="text">
                <Link
                  to="https://minpros.gospmr.org/about/11655"
                  className="header-link"
                >
                  ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ
                </Link>
              </Button>
              <Button variant="text">
                <Link
                  to="https://umpminpros.wixsite.com/mery-podderjki"
                  className="header-link"
                >
                  МЕРЫ ПОДДЕРЖКИ ДЛЯ МОЛОДЕЖИ
                </Link>
              </Button>**/}
            </div>
          </div>
        </header>
      ) : (
        <MobileHeader />
      )}
    </>
  );
}
