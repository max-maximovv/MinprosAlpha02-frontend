import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dropdown from "../dropdown/dropdown";
import Button from "@mui/material/Button";

import {
  AboutList,
  Activity,
  Education,
  DocumentationList,
  CivilAppeals,
  CivilService,
  ControlActivity,
  UNO,
} from "../dropdownData";

export const DrawerList = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box sx={{ width: 312 }} role="presentation" className="links-box">
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemText primary={"Главная страница"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Dropdown title="О МИНИСТЕРСТВЕ" links={<AboutList />} />
      <Dropdown title="ДЕЯТЕЛЬНОСТЬ" links={<Activity />} />
      <Dropdown title="СИСТЕМА ОБРАЗОВАНИЯ" links={<Education />} />
      <Dropdown
        title="НОРМАТИВНЫЕ ПРАВОВЫЕ АКТЫ"
        links={<DocumentationList />}
      />
      <Dropdown title="УНО" links={<UNO />} />
      <Dropdown
        title="ГОСУДАРСТВЕННАЯ ГРАЖДАНСКАЯ СЛУЖБА"
        links={<CivilService />}
      />
      <Dropdown title="ОБРАЩЕНИЯ ГРАЖДАН" links={<CivilAppeals />} />
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/10620"
          className="header-link"
        >
          ПРОЕКТЫ ДЛЯ ОБЩЕСТВЕННОГО ОБСУЖДЕНИЯ
        </Link>
      </Button>
      <Dropdown
        title="КОНТРОЛЬНАЯ (НАДЗОРНАЯ) ДЕЯТЕЛЬНОСТЬ"
        links={<ControlActivity />}
      />
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/12023"
          className="header-link"
        >
          ОБЩЕСТВЕННЫЙ СОВЕТ
        </Link>
      </Button>
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
      </Button>
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/12351"
          className="header-link"
        >
          ОБЩЕСТВЕННЫЙ РЕСПУБЛИКАНСКИЙ СТУДЕНЧЕСКИЙ СОВЕТ
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/12765"
          className="header-link"
        >
          ДИАЛОГ НА РАВНЫХ
        </Link>
      </Button>
    </Box>
  );
};
