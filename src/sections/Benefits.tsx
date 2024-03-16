import Benefit from "@/components/Benefit";
import Background from "@/assets/background.jpg";

const Benefits = () => {
  const style = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
  };

  return (
    <div className="relative h-[40rem]" style={style}>
      <div className="bg-black opacity-90 h-full w-full" />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
        <div className="grid grid-cols-3 items-center justify-center gap-y-5">
          <Benefit title="Precios finales." />
          <Benefit title="Desde y hacia cualquier punto de Buenos Aires." />
          <Benefit title="Peajes incluidos." />
          <Benefit title="Monitoreos de los vuelos." />
          <Benefit title="Paseos / City tour y viajes a cualquier punto del pais." />
          <Benefit title="En aeropuerto 1hs bonificada." />
          <div />
          <Benefit title="Los esperamos con cartel y/o Whatsapp." />
          <div />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
