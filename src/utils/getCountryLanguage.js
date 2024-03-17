export default function getContryLanguage(country) {
  const countries = [
    { country: "AR", language: "es" }, // Argentina
    { country: "AU", language: "en" }, // Australia
    { country: "BR", language: "pt_br" }, // Brasil, Portugués
    { country: "CA", language: "en" }, // Canadá, Inglés
    { country: "CO", language: "es" }, // Colombia
    { country: "MX", language: "es" }, // México
    { country: "US", language: "en" }, // Estados Unidos
    { country: "FR", language: "fr" }, // Francia
    { country: "DE", language: "de" }, // Alemania
    { country: "IT", language: "it" }, // Italia
    { country: "ES", language: "es" }, // España
    { country: "GB", language: "en" }, // Reino Unido
    { country: "RU", language: "ru" }, // Rusia, Ruso
    { country: "BE", language: "nl" }, // Bélgica, Neerlandés
    { country: "NL", language: "nl" }, // Países Bajos, Neerlandés
    { country: "SE", language: "sv" }, // Suecia, Sueco
    { country: "FI", language: "fi" }, // Finlandia, Finés
    { country: "DK", language: "da" }, // Dinamarca, Danés
    { country: "NO", language: "no" }, // Noruega, Noruego
    { country: "AT", language: "de" }, // Austria, Alemán
    { country: "CH", language: "de" }, // Suiza, Alemán
    { country: "IE", language: "en" }, // Irlanda, Inglés
    { country: "PT", language: "pt_pt" }, // Portugal, Portugués
    { country: "GR", language: "el" }, // Grecia, Griego
    { country: "PL", language: "pl" }, // Polonia, Polaco
    { country: "HU", language: "hu" }, // Hungría, Húngaro
    { country: "CZ", language: "cs" }, // República Checa, Checo
    { country: "SK", language: "sk" }, // Eslovaquia, Eslovaco
    { country: "SI", language: "sl" }, // Eslovenia, Esloveno
    { country: "HR", language: "hr" }, // Croacia, Croata
    { country: "BA", language: "bs" }, // Bosnia y Herzegovina, Bosnio
    { country: "RS", language: "sr" }, // Serbia, Serbio
    { country: "ME", language: "sr" }, // Montenegro, Serbio
    { country: "XK", language: "sq" }, // Kosovo, Albanés
    { country: "AL", language: "sq" }, // Albania, Albanés
    { country: "MK", language: "mk" }, // Macedonia del Norte, Macedonio
    { country: "BG", language: "bg" }, // Bulgaria, Búlgaro
    { country: "RO", language: "ro" }, // Rumanía, Rumano
    { country: "MD", language: "ro" }, // Moldavia, Rumano
    { country: "LT", language: "lt" }, // Lituania, Lituano
    { country: "LV", language: "lv" }, // Letonia, Letón
    { country: "EE", language: "et" }, // Estonia, Estonio
    { country: "BY", language: "be" }, // Bielorrusia, Bielorruso
    { country: "UA", language: "uk" }, // Ucrania, Ucraniano
    { country: "FI", language: "fi" }, // Finlandia, Finés
    { country: "IS", language: "is" }, // Islandia, Islandés
    { country: "NO", language: "no" }, // Noruega, Noruego
    { country: "SE", language: "sv" }, // Suecia, Sueco
    { country: "DK", language: "da" }, // Dinamarca, Danés
  ];

  const countryData = countries.find((c) => c.country === country);
  const availableLanguages = ["es", "en", "it", "fr", "de", "pt"];

  if (!countryData) return "en";
  if (!availableLanguages.includes(countryData.language)) return "en";
  return countryData.language;
}
