import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
