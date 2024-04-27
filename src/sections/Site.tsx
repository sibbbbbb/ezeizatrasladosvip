import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import { getLanguage } from "@/utils/getLanguage";
import Header from "@/sections/Header";
import Banner from "@/sections/Banner";
import Separator from "@/sections/Separator";
import Benefits from "@/sections/Benefits";
// import Opinions from "@/sections/Opinions";
import AboutUs from "@/sections/AboutUs";
import OurFleet from "@/sections/OurFleet";

interface SiteProps {
  lang: string;
}

const Site = ({ lang }: SiteProps) => {
  const { i18n } = useTranslation();

  // Obtener la ubicación del usuario y cambiar el idioma
  useEffect(() => {
    function getAndChangeLanguage() {
      i18n.changeLanguage(lang);
    }

    getAndChangeLanguage();
  }, [i18n, lang]);

  return (
    <div>
      <div className="h-auto lg:h-screen">
        <Header />
        <Banner />
        <Separator />
      </div>
      <Benefits />
      {/* <Opinions /> */}
      <AboutUs />
      <OurFleet />
    </div>
  );
};

export default Site;
