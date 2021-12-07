import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";

import IndividualCard from "./IndividualCard";

export default function SearchResults(props) {
  const [results, setResults] = useState(props.data);

  const [cList, setCList] = useState([]);
  const [ecList, setECList] = useState([]);
  const [ffList, setFFList] = useState([]);
  const [gList, setGList] = useState([]);

  const [selectedCompany, setSelectedCompany] = React.useState([]);
  const [selectedEyecolor, setSelectedEyecolor] = React.useState([]);
  const [selectedFavFruits, setSelectedFavFruits] = React.useState([]);
  const [selectedGender, setSelectedGender] = React.useState([]);

  useEffect(() => {
    let checkSearchInput = props.searchInput.toUpperCase();
    let filteredResults;
    filteredResults = props.data.filter((item) => {
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
    companyList = props.data.reduce((acc, item) => {
      let tempArr = [...acc];
      if (!tempArr.includes(item.company)) {
        tempArr.push(item.company);
      }
      return tempArr;
    }, []);

    eyeColorList = props.data.reduce((acc, item) => {
      let tempArr = [...acc];
      if (!tempArr.includes(item.eyeColor)) {
        tempArr.push(item.eyeColor);
      }
      return tempArr;
    }, []);

    favoriteFruitList = props.data.reduce((acc, item) => {
      let tempArr = [...acc];
      if (!tempArr.includes(item.favoriteFruit)) {
        tempArr.push(item.favoriteFruit);
      }
      return tempArr;
    }, []);

    genderList = props.data.reduce((acc, item) => {
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
    props.searchInput,
    selectedCompany,
    selectedEyecolor,
    selectedFavFruits,
    selectedGender,
  ]);

  const handleClear = () => {
    let checkSearchInput = props.searchInput.toUpperCase();
    let filteredResults;
    filteredResults = props.data.filter((item) => {
      let updateName = item.name.toUpperCase();
      return updateName.indexOf(checkSearchInput) !== -1;
    });
    setSelectedCompany([]);
    setSelectedEyecolor([]);
    setSelectedFavFruits([]);
    setSelectedGender([]);
    setResults(filteredResults);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderTop: "1px solid #dfdfdf",
  }));

  const handleChange = (event, ele) => {
    const {
      target: { value },
    } = event;
    if (ele === "Company") {
      setSelectedCompany(
        // On autofill we get a the stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (ele === "Eye Color") {
      setSelectedEyecolor(
        // On autofill we get a the stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (ele === "Favourite Fruits") {
      setSelectedFavFruits(
        // On autofill we get a the stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    } else if (ele === "Gender") {
      setSelectedGender(
        // On autofill we get a the stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    }
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  let combinedFilters = [
    ...selectedCompany,
    ...selectedEyecolor,
    ...selectedFavFruits,
    ...selectedGender,
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} className="select-holder">
          <Item>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              {cList && cList.length > 0 && (
                <FormControl>
                  <Select
                    multiple
                    displayEmpty
                    value={selectedCompany}
                    onChange={(e) => handleChange(e, "Company")}
                    input={<OutlinedInput className="outline-input" />}
                    renderValue={(selected) => <>Company</>}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {cList.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={selectedCompany.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {ecList && ecList.length > 0 && (
                <FormControl>
                  <Select
                    multiple
                    displayEmpty
                    value={selectedEyecolor}
                    onChange={(e) => handleChange(e, "Eye Color")}
                    input={<OutlinedInput className="outline-input" />}
                    renderValue={(selected) => <>Eye Color</>}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {ecList.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={selectedEyecolor.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {ffList && ffList.length > 0 && (
                <FormControl>
                  <Select
                    multiple
                    displayEmpty
                    value={selectedFavFruits}
                    onChange={(e) => handleChange(e, "Favourite Fruits")}
                    input={<OutlinedInput className="outline-input" />}
                    renderValue={(selected) => <>Favourite Fruits</>}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {ffList.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={selectedFavFruits.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {gList && gList.length > 0 && (
                <FormControl>
                  <Select
                    multiple
                    displayEmpty
                    value={selectedGender}
                    onChange={(e) => handleChange(e, "Gender")}
                    input={<OutlinedInput className="outline-input" />}
                    renderValue={(selected) => <>Gender</>}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {gList.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={selectedGender.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {combinedFilters && combinedFilters.length > 0 && (
                <Chip
                  label="Clear Filters"
                  onClick={handleClear}
                  onDelete={handleClear}
                />
              )}
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12}>
          SearchResults for <b>{props.searchInput}</b>
        </Grid>
      </Grid>
      {results &&
        results.length > 0 &&
        results.map((item) => (
          <Grid item xs={12}>
            <IndividualCard item={item} />
          </Grid>
        ))}
    </>
  );
}
