import React from 'react'
import { StyleSheet,Text,TouchableOpacity } from 'react-native'

const Button = () => {
  return (
    <TouchableOpacity style = {styles.button} onPress={()=>{}}>
        <Text>0</Text>
    </TouchableOpacity>
  )
}

export default Button