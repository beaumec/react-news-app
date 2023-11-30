import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Category from "./components/Category";

function App() {
  const [search, setSearch] = useState("general");
  return (
    <div className="App">
      <Hero setSearch={setSearch} />
      <Category setSearch={setSearch} />
      <Main search={search} />
    </div>
  );
}

export default App;
