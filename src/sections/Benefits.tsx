import Benefit from "@/components/Benefit";
import Background from "@/assets/images/background.jpg";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };

  return (
    <div
      className="relative h-[35rem] md:h-[30rem] 2xl:h-[40rem]"
      style={style}
    >
      <div className="bg-black opacity-90 h-full w-full" />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-1 px-4 lg:grid-cols-3 items-center justify-center gap-y-5">
          <Benefit title={t("benefits_1")} />
          <Benefit title={t("benefits_2")} />
          <Benefit title={t("benefits_3")} />
          <Benefit title={t("benefits_4")} />
          <Benefit title={t("benefits_5")} />
          <Benefit title={t("benefits_6")} />
          <div className="hidden lg:block" />
          <Benefit title={t("benefits_7")} />
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
