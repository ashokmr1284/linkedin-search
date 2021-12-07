import React, { useState, useEffect }  from "react";
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import logo from "../../../../common/assets/logo.svg";
import "./styles.css";

const SearchAppBar = (props) => {
  const handleSearch = () => {
    displaySearchInput ? props.setSearchInput("") : null;
     
  }
  const handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.headerStyles}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      {/* <Avatar.Icon size={32} icon={require('../../../../common/assets/logo.svg')} /> */}
      <Image style={styles.logoStyles} source={require('../../../../common/assets/logo.svg')}/>
      <Searchbar
        placeholder="Search"
        onChangeText={text => props.setSearchInput(text)}
        value={props.searchInput}
        style={styles.searchBarStyles}
        />
      <Appbar.Content title="" />
      {/* <Appbar.Action icon="magnify" onPress={handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} /> */}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#fff',   
  },
  searchBarStyles: {
    borderBottom: "0 none",
    boxShadow: "none",
    backgroundColor: "#E2F0FE",
    borderRadius: "5px",
    "&:hover": {
        backgroundColor: "#edf6ff",
    },
    height: 42,
  },
  logoStyles : {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  searchStyles: {
    marginLeft: 10,
    height: '30px',   
    backgroundColor: "#E2F0FE",
    borderBottom: "0 none",
    borderRadius: "5px",
    "&:hover": {
        backgroundColor: "#edf6ff",
    },
  }
});

export default SearchAppBar;
