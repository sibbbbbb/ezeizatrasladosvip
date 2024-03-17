import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#5B408F] px-40 py-16">
      <div className="bg-[#0B0823] text-center px-10 py-5">
        <span className="text-5xl font-semibold text-[#F9BC49] uppercase">
          {t("who_we_are")}
        </span>
        <div className="flex flex-col text-start text-white text-3xl mt-6 gap-y-10 pb-16">
          <p>{t("who_we_are_1")}</p>
          <p>{t("who_we_are_2")}</p>
          <p>{t("who_we_are_3")}</p>
          <p>{t("who_we_are_4")}</p>
          <p>{t("who_we_are_5")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
