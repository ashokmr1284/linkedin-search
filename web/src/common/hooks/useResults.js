
import React, { useState, useEffect } from "react";
import data from "../data.json";

export default (searchInput) => {
const [results, setResults] = useState(data);

const [cList, setCList] = useState([]);
const [ecList, setECList] = useState([]);
const [ffList, setFFList] = useState([]);
const [gList, setGList] = useState([]);

const [selectedCompany, setSelectedCompany] = React.useState([]);
const [selectedEyecolor, setSelectedEyecolor] = React.useState([]);
const [selectedFavFruits, setSelectedFavFruits] = React.useState([]);
const [selectedGender, setSelectedGender] = React.useState([]);

useEffect(() => {
  let checkSearchInput = searchInput.toUpperCase();
  let filteredResults;
  filteredResults = data.filter((item) => {
    let updateName = item.name.toUpperCase();
    return updateName.indexOf(checkSearchInput) !== -1;
  });

  if (selectedCompany && selectedCompany.length > 0) {
    filteredResults = filteredResults.filter((item) =>
      selectedCompany.includes(item.company)
    );
  }

  if (selectedEyecolor && selectedEyecolor.length > 0) {
    filteredResults = filteredResults.filter((item) =>
      selectedEyecolor.includes(item.eyeColor)
    );
  }

  if (selectedFavFruits && selectedFavFruits.length > 0) {
    filteredResults = filteredResults.filter((item) =>
      selectedFavFruits.includes(item.favoriteFruit)
    );
  }

  if (selectedGender && selectedGender.length > 0) {
    filteredResults = filteredResults.filter((item) =>
      selectedGender.includes(item.gender)
    );
  }

  setResults(filteredResults);

  let companyList, eyeColorList, favoriteFruitList, genderList;
  companyList = data.reduce((acc, item) => {
    let tempArr = [...acc];
    if (!tempArr.includes(item.company)) {
      tempArr.push(item.company);
    }
    return tempArr;
  }, []);

  eyeColorList = data.reduce((acc, item) => {
    let tempArr = [...acc];
    if (!tempArr.includes(item.eyeColor)) {
      tempArr.push(item.eyeColor);
    }
    return tempArr;
  }, []);

  favoriteFruitList = data.reduce((acc, item) => {
    let tempArr = [...acc];
    if (!tempArr.includes(item.favoriteFruit)) {
      tempArr.push(item.favoriteFruit);
    }
    return tempArr;
  }, []);

  genderList = data.reduce((acc, item) => {
    let tempArr = [...acc];
    if (!tempArr.includes(item.gender)) {
      tempArr.push(item.gender);
    }
    return tempArr;
  }, []);

  setCList(companyList);
  setECList(eyeColorList);
  setFFList(favoriteFruitList);
  setGList(genderList);
}, [
  searchInput,
  selectedCompany,
  selectedEyecolor,
  selectedFavFruits,
  selectedGender,
]);

const handleClear = () => {
  let checkSearchInput = searchInput.toUpperCase();
  let filteredResults;
  filteredResults = data.filter((item) => {
    let updateName = item.name.toUpperCase();
    return updateName.indexOf(checkSearchInput) !== -1;
  });
  setSelectedCompany([]);
  setSelectedEyecolor([]);
  setSelectedFavFruits([]);
  setSelectedGender([]);
  setResults(filteredResults);
}

return [handleClear, results, setResults, cList, setCList, ecList, setECList, ffList, setFFList, gList, setGList, selectedCompany, setSelectedCompany, selectedEyecolor, setSelectedEyecolor, selectedFavFruits, setSelectedFavFruits, selectedGender, setSelectedGender]
}