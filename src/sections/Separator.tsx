import ArrowDown from "@/assets/arrowdown.svg";

const Separator = () => {
  return (
    <div className="flex items-center justify-center h-[10%] bg-[#5B408F] text-white">
      <img src={ArrowDown} alt="arrow down" className="cursor-pointer" />
    </div>
  );
};

export default Separator;
