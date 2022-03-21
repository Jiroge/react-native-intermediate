import {Text, View, Button } from 'react-native'
import React from 'react'

const ActionsList = ({navigation}) => {
  return (
    <View style={{ flex: 1, margin: 20, justifyContent: 'center', }}>
      <Text />
      <Button title="Open Modal" onPress={() => {alert('Todo!')}} />
      <Text />
      <Button title="Open Alert" onPress={() => {alert('Todo!')}} />
    </View>
  )
}

export default ActionsList
