import { Colors } from '@/utils/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Calculator = () => {
  return (
    <View style={styles.container}>
<View style={styles.display}>
    <Text style={{fontSize:70,fontWeight:'300'}}>8788</Text>
</View>
<View style={styles.keypad}>
    
</View>
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
            backgroundColor:Colors.gray,
            paddingVertical:20,
            paddingHorizontal:40,
            alignItems:'flex-end',
            justifyContent:'flex-end'
        },
        keypad:{
            flex:2,
            backgroundColor:Colors.light,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            gap:30,
            padding:30,
        }

    }
)
