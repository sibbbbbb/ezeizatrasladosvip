import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@/locales/en.json";
import translationES from "@/locales/es.json";
import translationPT from "@/locales/pt_pt.json";
import translationBR from "@/locales/pt_br.json";
import translationIT from "@/locales/it.json";
import translationFR from "@/locales/fr.json";
import translationDE from "@/locales/de.json";

const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
  pt_pt: {
    translation: translationPT,
  },
  pt_br: {
    translation: translationBR,
  },
  it: {
    translation: translationIT,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // idioma predeterminado
  keySeparator: false, // deshabilita el separador de claves
  interpolation: {
    escapeValue: false, // no escapa las cadenas de traducción HTML
  },
});

export default i18n;
