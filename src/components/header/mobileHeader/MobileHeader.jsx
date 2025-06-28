import styles from "./MobileHeader.module.css";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import "./DrawerStyle.css";

import { DrawerList } from "./dropdownDataMobile";

export default function MobileHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className={styles.MobileHeader}>
        <div className={styles.navbar}>
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
            {/**<a>
                <img src="/imgs/search.svg" alt="search" />
              </a>**/}
            <div className={styles.hamburgerMenu}>
              <input id={styles.menu__toggle} type="checkbox" />
              <label className={styles.menu__btn} for={styles.menu__toggle}>
                <span></span>
              </label>

              <ul className={styles.menu__box}>
                <div className={styles.menu__scroll}>
                  <DrawerList />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
