import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getLanguage } from "@/utils/getLanguage";
import Header from "@/sections/Header";
import Banner from "@/sections/Banner";
import Separator from "@/sections/Separator";
import Benefits from "@/sections/Benefits";
import AboutUs from "@/sections/AboutUs";
import OurFleet from "@/sections/OurFleet";

function App() {
  const { i18n } = useTranslation();

  // Obtener la ubicación del usuario y cambiar el idioma
  useEffect(() => {
    async function getAndChangeLanguage() {
      const language = await getLanguage();
      if (language) {
        // Cambiar el idioma según el país detectado
        i18n.changeLanguage(language);
      }
    }

    getAndChangeLanguage();
  }, [i18n]);

  return (
    <div>
      <div className="h-screen">
        <Header />
        <Banner />
        <Separator />
      </div>
      <Benefits />
      <AboutUs />
      <OurFleet />
    </div>
  );
}

export default App;
