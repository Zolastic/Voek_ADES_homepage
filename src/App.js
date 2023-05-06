import "./css/App.css";
import Slider from "./Slider";
import Banner from "./Banner";
import Category from "./Category";

function App() {
  return (
    <div className="App">
      <Banner />
      <Category />
      <Slider header={"Top Picks"} className="slider" />
      <Slider header={"For You"} />
    </div>
  );
}

export default App;
