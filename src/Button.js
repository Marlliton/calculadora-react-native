import React from "react"
import { TouchableHighlight, Text, StyleSheet, Dimensions } from "react-native"

const Button = props => {

    const styleButtons = [style.button]
    if(props.AC) styleButtons.push(style.AC)
    if(props.double) styleButtons.push(style.double)
    if(props.operation) styleButtons.push(style.operation)
    if(props.equals) styleButtons.push(style.equals)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styleButtons}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}


const style = StyleSheet.create({
    button: {
        color: "#fff",
        backgroundColor: "rgb(21, 24, 28)",
        fontSize: 35,
        height: Dimensions.get("window").width / 4.5,
        width: Dimensions.get("window").width / 4.5,
        textAlign: "center",
        paddingTop: 19,
        borderWidth: 1,
        borderColor: "#565656",
        borderRadius: 50,
        margin: 2.5
    },
    AC: {
        width: (Dimensions.get("window").width / 4.5) * 2,
        color: "#ff7b00"
    },
    double: {
        width: (Dimensions.get("window").width / 4.5) * 2,
    },
    operation: {
        color: "#4adb5b"
    },
    equals: {
        backgroundColor: "#3ac149"
    }
})

export default Button