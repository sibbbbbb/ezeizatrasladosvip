import { useTranslation } from "react-i18next";
import Gallery from "@/components/Gallery";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#F9BC49] px-4 xl:px-40 py-8 xl:py-16">
      <div className="bg-[#0B0823] text-center px-4 xl:px-32 pt-5 pb-20 xl:pb-32">
        <span className="text-4xl xl:text-5xl font-semibold text-white uppercase">
          {t("our_fleet")}
        </span>
        <Gallery />
      </div>
    </div>
  );
};

export default AboutUs;
