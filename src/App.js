import "./css/App.css";
import Slider from "./Slider";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Slider header={"Top Picks"} />
      <Slider header={"For You"} />
    </div>
  );
}

export default App;
