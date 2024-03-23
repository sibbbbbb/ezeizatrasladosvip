import Logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full h-[6rem] lg:h-[10%] bg-[#5B408F] text-white py-2">
      <img src={Logo} alt="Logo Ezeiza Traslados Vip" className="h-full" />
    </div>
  );
};

export default Header;
