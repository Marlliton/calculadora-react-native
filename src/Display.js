import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Display = props => {
    return (
        <View style={style.container}>
            <Text style={style.displayValue}
                numberOfLines={1}>
            {props.value}
        </Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    displayValue: {
        color: "white",
        fontSize: 60
    }
})
export default Display