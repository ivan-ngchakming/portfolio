import cn from "classnames";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={cn("text-white", "font-mono", "relative", "w-full")}>
      <Navbar />
      <div className={cn("sm:px-36", "px-8")}>
        <Intro />
        <About />
        <Experiences />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
