import Header from "@/sections/Header";
import Banner from "@/sections/Banner";
import Separator from "@/sections/Separator";
import Benefits from "@/sections/Benefits";
import AboutUs from "@/sections/AboutUs";

function App() {
  return (
    <div>
      <div className="h-screen">
        <Header />
        <Banner />
        <Separator />
      </div>
      <Benefits />
      <AboutUs />
    </div>
  );
}

export default App;
