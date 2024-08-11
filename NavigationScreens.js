import {Ionicons} from '@expo/vector-icons'
import AllScreen from './screens/AllScreen';
import RecentScreen from './screens/RecentScreen';
import CustomIconButton from './components/CustomIconButton';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { widthScale } from './constants';
import { useContext } from 'react';
import { AppContext } from './context';

export const TabScreens=()=>{
    
    const BottomTab=createBottomTabNavigator();

    const navigation=useNavigation();
    
    function PressHandler(){
        navigation.navigate('Manage Expenses')
    }
  

    return(
        <BottomTab.Navigator  screenOptions={{
          headerRight: (props)=> <CustomIconButton name='library-add' size={30*widthScale} color='black' onPress={PressHandler}/>,
          headerRightContainerStyle:{
            paddingRight: 5,
          },
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
    )
}