import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Structure from "./pages/Structure/structure/Structure";
import MainPage from "./pages/MainPage/mainPage";
import MobileHeader from "./components/header/mobileHeader/MobileHeader";
import DefaultLayout from "./components/layouts/DefaultLayout";

import DnestrovskUNO from "./pages/uno/dnestrovsk";
import BenderyUNO from "./pages/uno/bendery";
import TiraspolUNO from "./pages/uno/tiraspol";
import RibnitsaUNO from "./pages/uno/ribnitsa";
import SlobodzeyaUNO from "./pages/uno/slobodzeya";
import KamenkaUNO from "./pages/uno/kamenka";
import GrigoriopolUNO from "./pages/uno/grigoriopol";
import DubossariUNO from "./pages/uno/dubossari";

import Management from "./pages/Structure/management/Management";
import Biography from "./pages/Structure/biography/Biography";
import Cyclogram from "./pages/Structure/cyclogram/Cyclogram";

import Dnestrovsk from "./pages/Institutions/dnestrovsk";
import Slobodzeya from "./pages/Institutions/slobodzeya";
import MainInstsPage from "./pages/Institutions/mainPage/main";
import ManageTemplate from "./pages/Managements/template/template";

function App() {
  return (
    <>
      <section className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="about">
              <Route path="structure" element={<Structure />} />
              <Route path="management" element={<Management />} />
              <Route path="biography" element={<Biography />} />
              <Route path="plan" element={<Cyclogram />} />
            </Route>

            <Route path="uno">
              <Route path="dnestrovsk" element={<DnestrovskUNO />} />
              <Route path="bendery" element={<BenderyUNO />} />
              <Route path="tiraspol" element={<TiraspolUNO />} />
              <Route path="ribnitsa" element={<RibnitsaUNO />} />
              <Route path="slobodzeya" element={<SlobodzeyaUNO />} />
              <Route path="kamenka" element={<KamenkaUNO />} />
              <Route path="grigoriopol" element={<GrigoriopolUNO />} />
              <Route path="dubossari" element={<DubossariUNO />} />
            </Route>

            <Route path="institutions">
              <Route path="main" element={<MainInstsPage />} />
              <Route path="spt" element={<Slobodzeya />} />
              <Route path="dcpect" element={<Dnestrovsk />} />
            </Route>

            <Route path="managements">
              <Route path="template" element={<ManageTemplate />} />
            </Route>
          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
