import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/screens/SearchScreen';
import RestrauntDetail from './src/screens/RestrauntDetail';

const stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName='Search Screen'>
        <stack.Screen name='Search Screen' component={SearchScreen} />
        <stack.Screen name='Restraunt' component={RestrauntDetail} />
      </stack.Navigator>
    </NavigationContainer>
  )
}