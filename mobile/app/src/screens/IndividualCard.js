import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Picker, Image } from 'react-native'
import { Chip, Menu, Button, Checkbox, Avatar, Card, IconButton, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';



const IndividualCard = (props) => {
    const [visible, setVisible] = React.useState(false);
  
    const openMenu = () => setVisible(true);
  
    const closeMenu = () => setVisible(false);

    const imsgsrc = props.item.picture;
    return (
        <View style={styles.cardContainerStyles} >
            <Card style={styles.cardStyles}>
                <Card.Title 
                    title={props.item.name} 
                    subtitle={`Works at ${props.item.company} & Location: ${props.item.address}`}                
                    left={(props) =><Avatar.Image size={50}  style={styles.imageStyles} source={imsgsrc} /> }
                    right={(props) => <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Icon name="ellipsis-v" style={styles.menuStyles} size={20} onPress={openMenu}  />}>
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
/*  */
{/* <Button onPress={openMenu}>Show menu</Button> */}

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
        boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    },
    menuStyles: {        
        marginRight: 15
    }
})


export default IndividualCard;