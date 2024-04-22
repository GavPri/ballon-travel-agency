import Navbar from "./components/navigation/Navbar";
import Hero from "../src/pages/homepage/Hero";
import Missionstatement from "./pages/homepage/Missionstatement";
import ContinentsCarousel from "./pages/homepage/ContinentsCarousel";

function App() {
  return (
    <div className="max-w-[1240px] m-auto">
      <Navbar />
      <Hero />
      <Missionstatement />
      <ContinentsCarousel />
    </div>
  );
}

export default App;
