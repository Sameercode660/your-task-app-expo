import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Name = ({name}: any) => {
  return (
    <View>
      <Text>My name is : {name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default Name