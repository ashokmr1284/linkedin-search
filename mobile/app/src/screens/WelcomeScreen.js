import React from "react";
import { Text, Image, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.png";
import chat from "../../assets/chat.png";
import mic from "../../assets/mic.png";
import "./styles.css";

const WelcomeScreen = (props) => {
  const [text, onChangeText] = React.useState("");
  const [error, setError] = React.useState("");

  const onPress = () => {
    console.log("sadas", )

  }

  const handleChange = (text) => {
    onChangeText(text)
    if(text) {
      
    }
    console.log("r345", text)
    //props.navigation.navigate("Home")
  }

  return (
    <View style={styles.screenContainer}>
      <Image style={styles.logo} source={{ uri: logo }} />
      <View style={styles.secondHolder}>
        <Text style={styles.commentText}>
          Good Morning, Please enter Enrollment No.
        </Text>

        <TextInput
          style={styles.inputText}
          onChangeText={text => handleChange(text)}
          value={text}
          placeholder="Enter here"
        />

        <View style={styles.buttonHolder}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Type")} style={styles.firstButton}>
            <Image style={styles.chatIcon} source={{ uri: chat }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate("Listen")} style={styles.secondButton}>
            <Image style={styles.micIcon} source={{ uri: mic }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  commentText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    color: "#",
    padding: "15px",
    margin: "20px",
    marginTop: "0px",
    border: "1px solid #cccccc",
    borderRadius: "20px",
  },
  inputText: {
    margin: "20px",
    marginTop: "100px",
    padding: "15px",
    fontSize: 18,
    borderColor: "#000000",
    borderBottomWidth: 2.0,
    outline: 0,
  },
  secondHolder: {
    display: "flex",
    justifyItems: "center",
  },
  buttonHolder: {
    marginTop: "100px",
    alignSelf: "center",
    width: '400px',
    alignItems: "center",
    position: "relative",
  },
  firstButton: {
    width: 75,
    height: 75,
    display: "inline",
    position: "absolute",
    left: '100px',
    backgroundColor: '#c5dbe8',
    borderRadius: "50%"
  },
  secondButton: {
    width: 75,
    height: 75,
    display: "inline",
    position: "absolute",
    right: '100px',
    backgroundColor: '#fcccdc',
    borderRadius: "50%"
  },
  chatIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: '22px',
    left: '22px'
  },
  micIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: '22px',
    left: '22px'
  },
});

export default WelcomeScreen;
