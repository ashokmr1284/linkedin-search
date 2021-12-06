import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './Components/SearchAppBar';
import SearchResults from './Components/SearchResults';
import data from './common/data.json';

function App() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="App">
      <SearchAppBar searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput &&  <SearchResults data ={data} searchInput={searchInput} />}
    </div>
  );
}

export default App;
