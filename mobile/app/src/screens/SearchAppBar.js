import React, { useState, useEffect }  from "react";
import { Appbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const SearchAppBar = (props) => {
  const handleSearch = () => {
    displaySearchInput ? props.setSearchInput("") : null;
     
  }
  const handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.headerStyles}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}

      {/* <Avatar.Image style={styles.logoStyles} size={40} source={require('../common/assets/logo.svg')} /> */}
      <Avatar.Text  style={styles.logoStyles} size={40} label="in" color="white" />
     
      {/* <Image style={styles.logoStyles} source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}/> */}
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
    backgroundColor: "#E2F0FE",
    borderRadius: 5,
    height: 42,
    minWidth: 200
  },
  logoStyles : {
    width: 40,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  searchStyles: {
    marginLeft: 10,
    height: 30,   
    backgroundColor: "#E2F0FE",
    borderRadius: 5,
  }
});

export default SearchAppBar;
