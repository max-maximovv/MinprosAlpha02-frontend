import * as React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Dropdown from "./dropdown/dropdown";

export const AboutList = () => {
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
      <MenuItem onClick={handleClose}>
        <Link to="/about/management">Руководство</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/about/structure">Структура</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/about/plan">Циклограмма работы министерства</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/institutions/main">Подведомственные организации</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9849">План работы</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <a href="/#history">История министерства</a>
      </MenuItem>
      <MenuItem onClick={ReloadPage}>
        <a href="/#form">Обращения граждан</a>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <a href="/#contacts">Контакты</a>
      </MenuItem>
    </>
  );
};

export const ActivityTeenMain = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10444">
          Нормативно-правовая база
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10445">
          Распорядительные документы
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11866">
          Противодействие идеологии экстремизма и терроризма в молодежной среде
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12290">
          Индекс развития молодежи в Приднестровской Молдавской Республике
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12325">
          Молодежные общественные организации
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12435">
          Марафон успешных практик специалистов в сфере организации работы с
          молодежью «Сильные идеи для нового времени»
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12488">
          Доклад о положении молодёжи и реализации государственной молодёжной
          политики
        </Link>
      </MenuItem>
    </>
  );
};

export const ActivityTeenVolunteer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12326">
          Методические рекомендации
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10738">
          Порядок выдачи личной книжки добровольца ПМР
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10738">
          Добровольческие движения
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12327">
          Нормативно-правовая база
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12052">
          Преимущества личной книжки добровольца
        </Link>
      </MenuItem>
    </>
  );
};

export const ActivityTeenSport = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10496">
          Нормативно-правовая база
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10499">
          Распорядительные документы
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12063">Кожаный мяч</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12064">Футбол в школу</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12702">
          Футбол в детский сад
        </Link>
      </MenuItem>
    </>
  );
};

export const ActivityTeen = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Dropdown
          title="Государственная молодежная политика"
          links={ActivityTeenMain}
          className="dropdown-directory"
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Dropdown
          title="Добровольческая деятельность"
          links={ActivityTeenVolunteer}
          className="dropdown-directory"
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9852">
          Воспитательная деятельность
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Dropdown
          title="Физическое воспитание"
          links={ActivityTeenSport}
          className="dropdown-directory"
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/13053">Лагеря / Туризм</Link>
      </MenuItem>
    </>
  );
};

export const ActivityLaws = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11523">Аукцион</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11524">
          Запрос-предложение
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11526">Тендер</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11525">
          Реестр контрактов 2021
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11864">
          Реестр контрактов 2022
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12429">
          Реестр контрактов 2023
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11527">
          План государственных закупок
        </Link>
      </MenuItem>
    </>
  );
};

export const Activity = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9779">
          Аттестация и аккредитация образовательной деятельности
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9781">Нострификация</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9782">
          Документы государственного образца об образовании
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9780">
          Лицензирование образовательной деятельности
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9783">
          Аттестация руководящих и педагогических работников
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12155">
          Гражданская оборона
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Dropdown
          title="Молодежная политика и дополнительное образование"
          links={ActivityTeen}
          className="dropdown-directory"
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/20">
          Государственная итоговая аттестация
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9867">Отчеты о работе</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/23">
          Сопровождение профессионального развития молодого педагога
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/25">Охрана труда</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9786">
          Наука и инновационная деятельность
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Dropdown
          title="Закупки"
          links={ActivityLaws}
          className="dropdown-directory"
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10382">
          Государственные услуги
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10528">
          Результаты контрольных мероприятий
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10521">
          Сведения об использовании МП ПМР и подведомственными организациями
          выделяемых бюджетных средств
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11562">
          Аренда государственного имущества
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12104">
          Порядок обжалования правовых актов и иных решений, принятых
          Министерством просвещения
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12751">
          Документационное обеспечение деятельности организаций образования
        </Link>
      </MenuItem>
    </>
  );
};

export const Education = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9788">Дошкольное</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9776">Общее</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9789">
          Специальное (коррекционное)
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9778">Профессиональное</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9851">
          Дополнительное образование
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9974">
          Психолого-педагогическая служба в образовании
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11463">
          Статистические формы отчетности в образовании
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12123">
          Статистические данные и показатели
        </Link>
      </MenuItem>
    </>
  );
};

export const DocumentationList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11">Законы ПМР</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9837">
          Приказы, распоряжения Министерства просвещения ПМР
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11172">Стандарты</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/9833">
          Указы, распоряжения, постановления, поручения Президента,
          Правительства
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11564">
          Тексты проектов законодательных и иных НПА, внесенных в ВС ПМР
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12999">
          План - график нормативно - правовой работы
        </Link>
      </MenuItem>
    </>
  );
};

export const CivilService = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10513">
          Нормативные правовые акты
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/10512">
          Порядок поступления на службу
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/28">Конкурсы</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12103">Вакансии</Link>
      </MenuItem>
    </>
  );
};

export const CivilAppeals = () => {
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
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/32">
          Порядок и время приема граждан
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/faq">Обзор обращений граждан</Link>
      </MenuItem>
      <MenuItem onClick={ReloadPage}>
        <a href="/#form">Онлайн-обращение</a>
      </MenuItem>
    </>
  );
};

export const ControlActivityOrder = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11820">
          Государственный контроль за деятельностью местных органов управления
          образованием, организаций образования
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11819">
          Государственный контроль за соблюдением лицензионных требований,
          предъявляемых к осуществлению образовательной деятельности
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11821">
          Государственный контроль качества образования
        </Link>
      </MenuItem>
    </>
  );
};

export const ControlActivity = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Dropdown
          title="Сферы контроля и порядок проведения проверок"
          links={ControlActivityOrder}
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11818">
          Порядок проведения проверок
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/11242">
          Информация о нарушениях
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="https://minpros.gospmr.org/about/12135">
          Результаты проверок
        </Link>
      </MenuItem>
    </>
  );
};
export const UNO = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/tiraspol">УНО г. Тирасполя</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/bendery">УНО г. Бендеры</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/ribnitsa">Рыбницкое УНО</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/dubossari">Дубоссарское УНО</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/dnestrovsk">УНО г. Днестровск</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/kamenka">Каменское УНО</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/grigoriopol">Григориопольское УНО</Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/uno/slobodzeya">Слободзейское РУНО</Link>
      </MenuItem>
    </>
  );
};
