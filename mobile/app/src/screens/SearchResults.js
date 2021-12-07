import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Picker } from 'react-native'
import { Chip, Menu, Button, Divider, IconButton } from 'react-native-paper';
import IndividualCard from "../screens/IndividualCard"

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

    let combinedFilters = [
        ...selectedCompany,
        ...selectedEyecolor,
        ...selectedFavFruits,
        ...selectedGender,
      ];

      const [companyMenu, setCompanyMenu] = React.useState(false);
      const [eyeColorMenu, setEyeColorMenu] = React.useState(false);
      const [favFruitsMenu, setFavFruitsMenu] = React.useState(false);
      const [genderMenu, setGenderMenu] = React.useState(false);

      const openCompanyMenu = () => setCompanyMenu(true);    
      const closeCompanyMenu = () => setCompanyMenu(false);
      const openEyeColorMenu = () => setEyeColorMenu(true);    
      const closeEyeColorMenu = () => setEyeColorMenu(false);
      const openFavFruitsMenu = () => setFavFruitsMenu(true);    
      const closeFavFruitsMenu = () => setFavFruitsMenu(false);
      const openGenderMenu = () => setGenderMenu(true);    
      const closeGenderMenu = () => setGenderMenu(false);

    const handleChange= (value, ele) => {
        if (ele === "Company") {        
            let selectedIndex = selectedCompany.indexOf(value.name);
            let updateSelection = [...selectedCompany];
            if (selectedIndex !== -1) {
                updateSelection.splice(selectedIndex, 1);
            } else {            
                updateSelection.push(value.name)
            }        
            setSelectedCompany(updateSelection);
        } else if (ele === "Eye Color") {
            let selectedIndex = selectedEyecolor.indexOf(value.name);
            let updateSelection = [...selectedEyecolor];
            if (selectedIndex !== -1) {
                updateSelection.splice(selectedIndex, 1);
            } else {            
                updateSelection.push(value.name)
            }        
            setSelectedEyecolor(updateSelection);
        } else if (ele === "Favourite Fruits") {
            let selectedIndex = selectedFavFruits.indexOf(value.name);
            let updateSelection = [...selectedFavFruits];
            if (selectedIndex !== -1) {
                updateSelection.splice(selectedIndex, 1);
            } else {            
                updateSelection.push(value.name)
            }        
            setSelectedFavFruits(updateSelection);
        } else if (ele === "Gender") {
            let selectedIndex = selectedGender.indexOf(value.name);
            let updateSelection = [...selectedGender];
            if (selectedIndex !== -1) {
                updateSelection.splice(selectedIndex, 1);
            } else {            
                updateSelection.push(value.name)
            }        
            setSelectedGender(updateSelection);
        }

    }  
  
    return (
        <View style={styles.searchResultsContainer}>
            <View style={styles.filtersContainer}>

                {cList && cList.length > 0 && (
                    <>
                    <Menu
                        visible={companyMenu}
                        onDismiss={closeCompanyMenu}
                        anchor={<Button onPress={openCompanyMenu}>Company</Button>}>
                        {cList.map((name) => (
                            //checkbox-blank-circle-outline
                            <Menu.Item icon={selectedCompany.includes(name) ? "check-circle" : "checkbox-blank-circle-outline"} onPress={(e) => {handleChange({name}, "Company")}} title={name} />
                        ))}
                    </Menu>
                     <Divider />
                     </>
                )}

                {ecList && ecList.length > 0 && (
                    <>
                    <Menu
                        visible={eyeColorMenu}
                        onDismiss={closeEyeColorMenu}
                        anchor={<Button onPress={openEyeColorMenu}>Eye Color</Button>}>
                        {ecList.map((name) => (
                            //checkbox-blank-circle-outline
                            <Menu.Item icon={selectedEyecolor.includes(name) ? "check-circle" : "checkbox-blank-circle-outline"} onPress={(e) => {handleChange({name}, "Eye Color")}} title={name} />
                        ))}
                    </Menu>
                     <Divider />
                     </>
                )}

                {ffList && ffList.length > 0 && (
                    <>
                    <Menu
                        visible={favFruitsMenu}
                        onDismiss={closeFavFruitsMenu}
                        anchor={<Button onPress={openFavFruitsMenu}>Favourite Fruits</Button>}>
                        {ffList.map((name) => (
                            //checkbox-blank-circle-outline
                            <Menu.Item icon={selectedFavFruits.includes(name) ? "check-circle" : "checkbox-blank-circle-outline"} onPress={(e) => {handleChange({name}, "Favourite Fruits")}} title={name} />
                        ))}
                    </Menu>
                     <Divider />
                     </>
                )}

                {gList && gList.length > 0 && (
                    <Menu
                        visible={genderMenu}
                        onDismiss={closeGenderMenu}
                        anchor={<Button onPress={openGenderMenu}>Gender</Button>}>
                        {gList.map((name) => (
                            //checkbox-blank-circle-outline
                            <Menu.Item icon={selectedGender.includes(name) ? "check-circle" : "checkbox-blank-circle-outline"} onPress={(e) => {handleChange({name}, "Gender")}} title={name} />
                        ))}
                    </Menu>
                )}



            {combinedFilters && combinedFilters.length > 0 && (
                <Chip icon="close" onPress={handleClear}>Clear Filters</Chip>
            )}
            </View>

            <View style={styles.lineContainer}>
                <Text style={styles.searchResultsSnippet}>Search Results for <Text style={styles.searchResultsBoldSnippet}>{props.searchInput}</Text></Text>
            </View>

            <View style={styles.cardsContainer}>
                {results &&
                    results.length > 0 &&
                    results.map((item) => (
                        <IndividualCard item={item} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchResultsContainer: {
       
    },
    filtersContainer: {
        backgroundColor: "#fff",
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        borderTop: "1px solid #dfdfdf",
        marginTop: "1px",
        padding: '10px'
    },
    cardsContainer: {
        paddingLeft: '15px',
        paddingRight: '15px',
        paddingBottom: '15px'
    },
    lineContainer: {
        padding: '15px'
    },
    searchResultsSnippet: {
        textAlign: 'center'
    },
    searchResultsBoldSnippet: {
        fontWeight: 'bold'
    },
    inlineElement: {
        display: 'inline'
    },
    eleContainer: {
        flex: 1
    },
})
