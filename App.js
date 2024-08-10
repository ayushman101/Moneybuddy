import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import AllScreen from './screens/AllScreen';
import RecentScreen from './screens/RecentScreen';
import CustomIconButton from './components/CustomIconButton';

const BottomTab=createBottomTabNavigator();

export default function App() {
  const {width, height} =  useWindowDimensions();

  let headerRightSize= 0.08*width // put in dynamicSize.js file

  function PressHandler(){
    console.log(width)
    console.log(headerRightSize)
  }


  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <BottomTab.Navigator  screenOptions={{
        headerRight: (props)=> <CustomIconButton name='add' size={headerRightSize} color='black' onPress={PressHandler}/>
      }}>
        <BottomTab.Screen 
        name='Recent Expenses' 
        component={RecentScreen} 
        options={{
          tabBarIcon:({color,size})=><Ionicons size={size} color={color} name='watch-sharp'/>
        }}
        />
        <BottomTab.Screen 
        name='All Expenses' 
        component={AllScreen}
        options={{
          tabBarIcon:({color,size})=><Ionicons size={size} color={color} name='wallet'/>
        }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
