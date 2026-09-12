import Footer from "./components/Footer";
import HeroSection from "./components/heroSection";
import Nav from "./components/Nav";
import TechnologyPart from "./components/TechnologyPart";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="max-w-11/12 mx-auto">
        <HeroSection />
        <TechnologyPart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
