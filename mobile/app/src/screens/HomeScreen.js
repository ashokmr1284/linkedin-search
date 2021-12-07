import React from "react";
import { Text, Image, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import data from "../../../../common/data.json"
import SearchAppBar from './SearchAppBar';
import SearchResults from './SearchResults';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#e5e5e5',
  },
};

const HomeScreen = (props) => {
  const [searchInput, setSearchInput] = React.useState("");
  return (
    <PaperProvider theme={theme}>
    <View style={styles.screenContainer}>
      <SearchAppBar searchInput={searchInput} setSearchInput={setSearchInput} />

      {searchInput &&  <SearchResults data={data} searchInput={searchInput} />}
     
    </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
  },
  
});

export default HomeScreen;
