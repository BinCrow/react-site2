import React from "react";
import './App.css';
import Header from "./components/Header";
import Contents from "./components/Contents";
import Slider from "./components/Slider";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header skill={["header", "gmarket"]}/>
    <Contents>
        <Slider />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
    </Contents>
    <Footer />
    </>
  );
}
export default App;
