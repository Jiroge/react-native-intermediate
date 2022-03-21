import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import AppStack from './AppStack'
// import TabStack from './TabStack'
import DrawerStack from './DrawerStack'

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      {/* <TabStack /> */}
      <DrawerStack />
    </NavigationContainer>
  )
}

export default Navigation
