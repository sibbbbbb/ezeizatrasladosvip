import Logo from "@/assets/images/logo.png";

const ErrorPage = () => {
  function redirectToIndex() {
    window.location.href = "/en";
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-y-10">
      <img src={Logo} alt="Logo Ezeiza Traslados Vip" className="h-20" />
      <div className="flex flex-col items-center gap-y-2">
        <span className="text-2xl font-semibold">404. Page not found</span>
        <span
          className="cursor-pointer text-blue-500 font-medium"
          onClick={() => redirectToIndex()}
        >
          Return to site
        </span>
      </div>
    </div>
  );
};

export default ErrorPage;
