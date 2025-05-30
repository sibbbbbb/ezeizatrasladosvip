import VideoBackground from "@/components/VideoBackground";
import Card from "@/components/Card";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import { useTranslation } from "react-i18next";
import Background from "@/assets/images/background-banner.jpg";

const Banner = () => {
  const { t } = useTranslation();

  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };

  function clickOnContact() {
    return window.open("https://wa.me/+5491135744889", "_blank");
  }

  return (
    <div className="relative h-[57rem] lg:h-[80%]" style={style}>
      <div className=" bg-black opacity-30 w-full h-full"></div>
      <div className="flex justify-center items-center absolute inset-0 h-full w-full">
        <VideoBackground />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto w-[90%] lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 py-10">
          <div className="flex flex-col gap-y-2 justify-center uppercase text-[#F9BC49] text-5xl md:text-6xl font-semibold w-full">
            <h1>{t("banner_1")}</h1>
            <h2>{t("banner_2")}</h2>
            <h1>{t("banner_3")}</h1>
            <h1 className="text-white font-bold text-2xl">
              Ezeiza traslados vip
            </h1>
          </div>
          <div className="flex flex-col items-end gap-y-5 mt-5 lg:mt-0">
            <Card
              title={t("first_card")}
              principalPrice={t("first_card_1")}
              secondaryPrice={t("first_card_2")}
            />
            <Card
              title={t("second_card")}
              principalPrice={t("second_card_1")}
              secondaryPrice={t("second_card_2")}
            />
            <div
              id="contact-button"
              className="relative flex items-center bg-[#19C853] w-full lg:w-11/12 px-2 py-4 cursor-pointer"
              onClick={() => clickOnContact()}
            >
              <div className="absolute left-4">
                <img src={WhatsAppIcon} alt="whatsapp" />
              </div>
              <div className="flex-grow text-center">
                <span className="uppercase font-semibold text-2xl text-black ">
                  {t("contact_us")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
