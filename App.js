import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import AppContextProvider from './context';
import {  TabScreens } from './NavigationScreens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpenseCard from './components/AddExpenseCard';


const Stack=createNativeStackNavigator();

export default function App() {


  return (
    <>
    <StatusBar style='light'/>
    <AppContextProvider>    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Tab Screens' component={TabScreens} options={{
            headerShown:false
          }}/>
          <Stack.Screen name='Manage Expenses' component={AddExpenseCard} options={{
            headerBackVisible:false,
          }}/>
        </Stack.Navigator>
      </NavigationContainer>  
    </AppContextProvider>
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
