import { useTranslation } from "react-i18next";
import Gallery from "@/components/Gallery";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#F9BC49] px-4 lg:px-40 py-8 lg:py-16">
      <div className="bg-[#0B0823] text-center px-4 lg:px-32 pt-5 pb-20 lg:pb-32">
        <span className="text-4xl lg:text-5xl font-semibold text-white uppercase">
          {t("our_fleet")}
        </span>
        <Gallery />
      </div>
    </div>
  );
};

export default AboutUs;
