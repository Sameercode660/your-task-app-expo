import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Greet from '../components/Greet'
import Name from '../components/Name'
import Age from '../components/Age'

const index = () => {
  return (
    <View style={styles.container}>
      <Name name={"Mohd Sameer"}></Name>
      <Age age={12}></Age>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default index