import "./App.css";
import Details from "./Components/Details";
import Head from "./Components/Head";
import MiddleSection from "./Components/MiddleSection";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Details />
      <MiddleSection />
    </div>
  );
}

export default App;
