import VideoBackground from "@/components/VideoBackground";
import Card from "@/components/Card";
import WhatsAppIcon from "@/assets/whatsapp.svg";

const Banner = () => {
  return (
    <div className="h-[80%]">
      <VideoBackground />
      <div className="grid grid-cols-2 items-center mx-auto w-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="uppercase text-[#F9BC49] text-6xl font-semibold w-full">
          <h1>Taxis y Remises.</h1>
          <h2>Confianza, seguridad y puntualidad.</h2>
          <h1>Reservas las 24hs.</h1>
          <h1 className="text-[#5B408F] font-bold text-2xl">
            Ezeiza traslados vip
          </h1>
        </div>
        <div className="flex flex-col items-end gap-y-5">
          <Card
            title="Desde capital"
            principalPrice="U$D 25"
            secondaryPrice="BRL 120 // EUR 25"
          />
          <Card
            title="Desde ezeiza"
            principalPrice="U$D 25"
            secondaryPrice="BRL 120 // EUR 25"
          />
          <div className="relative flex items-center bg-[#19C853] w-11/12 px-2 py-4 cursor-pointer">
            <div className="absolute left-4">
              <img src={WhatsAppIcon} alt="whatsapp" />
            </div>
            <div className="flex-grow text-center">
              <span className="uppercase font-semibold text-2xl text-white ">
                Contactanos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
