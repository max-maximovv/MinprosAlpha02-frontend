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
            <img
              src="/imgs/логотип_минпрос-removebg-preview 1.svg"
              alt="logotype"
            />
            <div className={styles.logoText}>
              <p className={styles.logoH}>МИНИСТЕРСТВО ПРОСВЕЩЕНИЯ </p>
              <p className={styles.logoHM}>
                ПРИДНЕСТРОВСКОЙ МОЛДАВСКОЙ РЕСПУБЛИКИ
              </p>
            </div>
          </a>
          <div className={styles.headerItems}>
            {/**<a>
                <img src="/imgs/search.svg" alt="search" />
              </a>**/}
            <div>
              <MenuIcon
                sx={{ height: "50px", width: "auto", color: "#fff" }}
                onClick={() => {
                  setOpen(true);
                }}
              />
              <Drawer
                open={open}
                onClose={() => {
                  setOpen(false);
                }}
                anchor={"right"}
                className={styles.drawer}
              >
                <DrawerList />
              </Drawer>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
