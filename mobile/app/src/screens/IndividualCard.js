import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Picker, Image } from 'react-native'
import { Chip, Menu, Button, Checkbox, Avatar, Card, IconButton, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';



const IndividualCard = (props) => {
    const [visible, setVisible] = React.useState(false);
  
    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const imsgsrc = props.item.picture;
    const firstTowChars = props.item.name.substring(0,2).toUpperCase();
    return (
        <View style={styles.cardContainerStyles} >
            

            <Card style={styles.cardStyles}>
                <Card.Title 
                    title={props.item.name} 
                    subtitle={`Works at ${props.item.company} & Location: ${props.item.address}`}                
                        visible={visible}
                    left={(props) => 
                        <Avatar.Text size={50} label={firstTowChars} color="white" style={styles.imageStyles}  />  }
                    right={(props) => <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button icon="segment" onPress={openMenu}></Button>}>
                        <Menu.Item onPress={() => {}} title="Add to Favourites" />
                        <Menu.Item onPress={() => {}} title="Share" />
                        <Menu.Item onPress={() => {}} title="Connect" />
                        <Menu.Item onPress={() => {}} title="Message" />
                    </Menu>                    
                    } 
                />
            </Card>
            
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 50,
        height: 50,
        marginLeft: 0,
        marginRight: 30,
    },
    cardContainerStyles: {
        paddingBottom: 10
    },
    cardStyles: {
    },
    menuStyles: {        
        marginRight: 15
    }
})


export default IndividualCard;