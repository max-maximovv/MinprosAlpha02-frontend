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
      <Dropdown title="О Министерстве" links={<AboutList />} />
      <Dropdown title="Деятельность" links={<Activity />} />
      <Dropdown title="Система образования" links={<Education />} />
      <Dropdown
        title="Нормативные правовые акты"
        links={<DocumentationList />}
      />
      <Dropdown title="Управление народного образования" links={<UNO />} />
      <Dropdown
        title="Государственная гражданская служба"
        links={<CivilService />}
      />
      <Dropdown title="Обращения граждан" links={<CivilAppeals />} />
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/10620"
          className="header-link"
        >
          Проекты для общественного обсуждения
        </Link>
      </Button>
      <Dropdown
        title="Контрольная (надзорная) деятельность"
        links={<ControlActivity />}
      />
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/12023"
          className="header-link"
        >
          Общественный совет
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/11655"
          className="header-link"
        >
          Противодействие коррупции
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="https://umpminpros.wixsite.com/mery-podderjki"
          className="header-link"
        >
          Меры поддержки для молодёжи
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/12351"
          className="header-link"
        >
          Общественный республиканский студенческий совет
        </Link>
      </Button>
      <Button variant="text">
        <Link
          to="https://minpros.gospmr.org/about/12765"
          className="header-link"
        >
          Диалог на равных
        </Link>
      </Button>
    </Box>
  );
};
