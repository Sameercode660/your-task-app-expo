import { View, Text } from 'react-native'
import React from 'react'

const Greet = ({name}: any) => {
  return (
    <View>
      <Text>Good Morning {name}</Text>
    </View>
  )
}

export default Greet