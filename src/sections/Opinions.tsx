import Slider from "react-slick";
import Review from "@/components/Review";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full bg-[#5B408F] px-4 xl:px-40 py-8 xl:py-16">
        <div className="bg-[#0B0823] text-center px-10 py-5">
          <span className="text-3xl xl:text-5xl font-semibold text-[#F9BC49] uppercase">
            Opiniones
          </span>
          <div className="flex flex-col text-white mt-6 gap-y-4 xl:gap-y-10 pb-8 xl:pb-16">
            <Slider {...settings}>
              <div className="px-1 lg:px-5">
                <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
                  <Review
                    name={t("opinion_1_name")}
                    date={t("opinion_1_date")}
                    rating={t("opinion_1_rating")}
                    content={t("opinion_1_review")}
                    className="w-1/3"
                  />
                  <Review
                    name={t("opinion_2_name")}
                    date={t("opinion_2_date")}
                    rating={t("opinion_2_rating")}
                    content={t("opinion_2_review")}
                    className="w-1/3"
                  />
                  <Review
                    name={t("opinion_3_name")}
                    date={t("opinion_3_date")}
                    rating={t("opinion_3_rating")}
                    content={t("opinion_3_review")}
                    className="w-1/3"
                  />
                </div>
              </div>
              <div className="px-1 lg:px-5">
                <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5">
                  <Review
                    name={t("opinion_4_name")}
                    date={t("opinion_4_date")}
                    rating={t("opinion_4_rating")}
                    content={t("opinion_4_review")}
                    className="w-1/3"
                  />
                  <Review
                    name={t("opinion_5_name")}
                    date={t("opinion_5_date")}
                    rating={t("opinion_5_rating")}
                    content={t("opinion_5_review")}
                    className="w-1/3"
                  />
                  <Review
                    name={t("opinion_6_name")}
                    date={t("opinion_6_date")}
                    rating={t("opinion_6_rating")}
                    content={t("opinion_6_review")}
                    className="w-1/3"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="h-10 bg-[#F9BC49]"></div>
    </>
  );
};

export default AboutUs;
