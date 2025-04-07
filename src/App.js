import "./App.css";
import { Route, Routes } from "react-router-dom";
import Structure from "./pages/Structure/structure/Structure";
import MainPage from "./pages/MainPage/mainPage";
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
import Molodezh from "./pages/Managements/molodezh";
import Uoo from "./pages/Managements/obshee-obrazovanie";
import UPOiN from "./pages/Managements/prof-obrazovanie";
import UIDiAO from "./pages/Managements/information";
import UGKiMSO from "./pages/Managements/obrazovanie-control";
import UPOiKP from "./pages/Managements/pravovoe-obespechenie";
import UPFIBiGZ from "./pages/Managements/planirovanie";

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
              <Route path="UMPiDO" element={<Molodezh />} />
              <Route path="UOO" element={<Uoo />} />
              <Route path="UPOiN" element={<UPOiN />} />
              <Route path="UIDiAO" element={<UIDiAO />} />
              <Route path="UGKiMSO" element={<UGKiMSO />} />
              <Route path="UPOiKP" element={<UPOiKP />} />
              <Route path="UPFIBiGZ" element={<UPFIBiGZ />} />
            </Route>
          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;
