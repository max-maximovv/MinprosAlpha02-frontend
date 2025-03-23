import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Contacts from "./Contacts/contacts";
import MainPageForm from "./Form/form";
import "./mainPage.css";
import MainSlider from "./MainSlider/mainSlider";
import MapSection from "./Map/map";
import Results from "./Results/results";

export default function MainPage() {
  return (
    <>
      <Header />
      <MainSlider />
      <Results />
      <MainPageForm />
      <MapSection />
      <Contacts />
      <Footer />
    </>
  );
}
