import Navbar from "./components/navigation/Navbar";
import Hero from "../src/pages/homepage/Hero";

function App() {
  return (
    <div className="bg-dark min-h-screen">
      <div className="max-w-[1240px] m-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
