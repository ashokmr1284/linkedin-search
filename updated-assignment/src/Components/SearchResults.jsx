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
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";

// import custom hooks
import useResults from "../common/hooks/useResults";

// import other components
import IndividualCard from "./IndividualCard";
import IndividualCardiOS from "./IndividualCardiOS";

export default function SearchResults(props) {
  const [
    handleClear,
    results,
    setResults,
    cList,
    setCList,
    ecList,
    setECList,
    ffList,
    setFFList,
    gList,
    setGList,
    selectedCompany,
    setSelectedCompany,
    selectedEyecolor,
    setSelectedEyecolor,
    selectedFavFruits,
    setSelectedFavFruits,
    selectedGender,
    setSelectedGender,
  ] = useResults(props.searchInput);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderTop: "1px solid #dfdfdf",
  }));

  const CustomFilledInput = styled(FilledInput)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    borderRadius: 30,
    "&:hover": {
      background: theme.hoverColor.background,
      color: theme.hoverColor.color,
    },
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
                    input={
                      <CustomFilledInput
                        disableUnderline={true}
                        className="outline-input"
                      />
                    }
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
                    input={
                      <CustomFilledInput
                        disableUnderline={true}
                        className="outline-input"
                      />
                    }
                    renderValue={(selected) => <>Education</>}
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
                    input={
                      <CustomFilledInput
                        disableUnderline={true}
                        className="outline-input"
                      />
                    }
                    renderValue={(selected) => <>Hobbies</>}
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
                    input={
                      <CustomFilledInput
                        disableUnderline={true}
                        className="outline-input"
                      />
                    }
                    renderValue={(selected) => <>Native Place</>}
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
            {props.device === "iOS" ? (
              <IndividualCardiOS item={item} />
            ) : (
              <IndividualCard item={item} />
            )}
          </Grid>
        ))}
    </>
  );
}
