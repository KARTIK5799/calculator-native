import React from 'react'
import { StyleSheet, View } from 'react-native'

const Calculator = () => {
  return (
    <View style={styles.container}>
<View style={styles.display}></View>
<View style={styles.keypad}></View>
    </View>
  )
}

export default Calculator

const styles= StyleSheet.create(
    {
        container:{
            flex:1,
           
        },
        display:{
            flex:1,
            backgroundColor:'red'
        },
        keypad:{
            flex:2,
            backgroundColor:'blue'
        }

    }
)
