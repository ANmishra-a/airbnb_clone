// external imports
import { useState } from "react";
//importing  my components and files
import Home from "./home.component";
import Header from "./components/header/header.component";
import dataSlider from "./components/Slider/dataSlider";

// import Slider from "./components/Slider/Slider";
import Card from "./components/card/card.component";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Home />
      <main>
        <div className="display">
          <Card
            root="Imgs"
            name="Sindun-myeon,Icheon-si"
            distance="5,638"
            date="3-8 Oct"
            price="5,856"
            rating="4.8"
          />
          <Card
            root="Imgs2"
            name="Drimnin,Uk"
            distance="7,638"
            date="4-9 Nov"
            price="17,856"
            rating="4.95"
          />
          <Card
            root="Imgs3"
            name="Ponta Delgada,Portugal"
            distance="9,451"
            date="15-20 Dec "
            price="5,856"
            rating="4.8"
          />
          <Card
            root="Imgs4"
            name="Lac-Beaupot,Canada"
            distance="11,847"
            date="4-9 jun"
            price="27,237"
            rating="4.99"
          />
          <Card
            root="Imgs5"
            name="Gaular,Norway"
            distance="6,638"
            date="17-22 oct"
            price="30,155"
            rating="5.0"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
