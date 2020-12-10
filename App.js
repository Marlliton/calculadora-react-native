import React from "react"
import { View, StyleSheet } from "react-native"
import Button from "./src/Button"
import Display from "./src/Display"

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class App extends React.Component {

  state = { ...initialState }

  setDigit = n => {
    const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay

    if (n === "." && this.state.displayValue.includes(".") && !clearDisplay) {
      return
    }

    const currentValue = clearDisplay ? "" : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== ".") {
      const index = this.state.current
      const newValue = parseFloat(displayValue)
      const values = this.state.values
      values[index] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ current: 1, operation: operation, clearDisplay: true })
    } else {
      const values = [...this.state.values]

      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: values[0].toString(),
        operation: operation === "=" ? null : operation,
        clearDisplay: operation !== "=" ? true : false,
        current: operation === "=" ? 0 : 1,
        values: values
      })
    }
  }

  del = () => {

    const current = this.state.current
    const values = [...this.state.values]
    const arrayString = values.map(e => e.toString())
    const del = arrayString[current].substr(0, arrayString[current].length - 1)
    values[current] = del

    this.setState({
      displayValue: values[current].toString(),
      values
    })
  }

  render() {
    // console.warn(this.state.values)
    return (
      <View style={style.container}>

        <Display value={this.state.displayValue} />

        <View style={style.button}>
          <Button label="AC" AC onClick={this.clearMemory} />
          <Button label="Del" operation onClick={() => this.del()} />
          <Button label="÷" operation onClick={() => this.setOperation("/")} />
          <Button label="7" onClick={() => this.setDigit(7)} />
          <Button label="8" onClick={() => this.setDigit(8)} />
          <Button label="9" onClick={() => this.setDigit(9)} />
          <Button label="x" operation onClick={() => this.setOperation("*")} />
          <Button label="4" onClick={() => this.setDigit(4)} />
          <Button label="5" onClick={() => this.setDigit(5)} />
          <Button label="6" onClick={() => this.setDigit(6)} />
          <Button label="-" operation onClick={() => this.setOperation("-")} />
          <Button label="1" onClick={() => this.setDigit(1)} />
          <Button label="2" onClick={() => this.setDigit(2)} />
          <Button label="3" onClick={() => this.setDigit(3)} />
          <Button label="+" operation onClick={() => this.setOperation("+")} />
          <Button label="0" double onClick={() => this.setDigit(0)} />
          <Button label="." onClick={() => this.setDigit(".")} />
          <Button label="=" equals onClick={() => this.setOperation("=")} />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
  },
  button: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
})
