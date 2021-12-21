import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from '@mui/material/colors';
import './App.css';
import SearchAppBar from './Components/SearchAppBar';
import SearchResults from './Components/SearchResults';
import data from './common/data.json';

const webTheme = createTheme({
  palette: {
    primary: {
      contrastText: "#FFFFFF",
      dark: "#0059B2",
      light: "#66B2FF",
      main: "#007FFF",
    },
  },
  hoverColor:{
    color: "#FFFFFF !important",
    background: "#2979ff",
  }
});

const androidTheme = createTheme({
  palette: {
    primary: {
      contrastText: "#FFFFFF",
      dark: "#0059B2",
      light: "#66B2FF",
      main: purple[800],
    },
  },
  hoverColor:{
    color: "#FFFFFF !important",
    background: purple[700],
  }
});

const iOSTheme = createTheme({
  palette: {
    primary: {
      contrastText: "#FFFFFF",
      dark: "#0059B2",
      light: "#66B2FF",
      main: blue[400],
    },
  },
  hoverColor:{
    color: "#FFFFFF !important",
    background: blue[300],
  }
});


function App() {
  const [searchInput, setSearchInput] = useState("");
  const [device, setDevice] = useState("");

  useEffect(() => {
    setDevice(getMobileOperatingSystem())
  }, [])


  const getMobileOperatingSystem = () => {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
  
    if (/android/i.test(userAgent)) {
        return "Android";
    }
  
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
  
    return "unknown";
    //return "iOS";
  }
  
  const selectedTheme = device === "Android" ? androidTheme : device === "iOS" ? iOSTheme : webTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <SearchAppBar searchInput={searchInput} setSearchInput={setSearchInput} />
        {searchInput &&  <SearchResults data ={data} searchInput={searchInput} device={device} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
