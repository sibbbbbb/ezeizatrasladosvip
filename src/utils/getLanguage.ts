import getCountry from "@/utils/getCountry";
import getCountryLanguage from "@/utils/getCountryLanguage";

export async function getLanguage() {
  const country = await getCountry();
  return getCountryLanguage(country);
}
