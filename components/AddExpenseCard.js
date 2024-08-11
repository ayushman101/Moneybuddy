import { useContext, useState } from "react";
import { View,StyleSheet,TextInput,Text,ScrollView, KeyboardAvoidingView,Alert } from "react-native";
import { AppContext } from "../context";
import { useNavigation } from "@react-navigation/native";
import { widthScale } from "../constants";
import CustomIconButton from "./CustomIconButton";
import { Expense } from "../models/expense";
const AddExpenseCard=()=>{
    
    const navigation = useNavigation();
    const [title, setTitle]=useState('');
    const [price, setPrice]=useState(0);

    const {setExpenseList}=useContext(AppContext)

    function onSubmit(){
        const value=parseInt(price)
        if(isNaN(value) || value<0){
            Alert.alert('Invalid Price','Either the price entered is negative or no price given',[{text:'OK',style:'destructive'}])
            return;
        }
        
        if(title===''){
            Alert.alert('Invalid Title','Title of the purchase cannot be emptyy',[{text:'OK',style:'destructive'}])
            return;
        }

        const NewExpense=new Expense(title,new Date(),price)

        console.log(NewExpense)

        setExpenseList((prevList)=>[NewExpense,...prevList])

        navigation.goBack()


    }

    return(
        <ScrollView contentContainerStyle={styles.rootStyle}>
            <KeyboardAvoidingView behavior='position'>
                <View>
                    <Text style={styles.TextStyle}>Title</Text>
                    <TextInput 
                        style={styles.TextInputStyle} 
                        autoCorrect={false} 
                        placeholder="eg: Burger, vegetables, fruits ..." 
                        maxLength={50} 
                        value={title}
                        onChangeText={(enteredtext)=>setTitle(enteredtext)}
                    />
                    
                    <Text style={styles.TextStyle}>Cost</Text>
                    
                    <TextInput 
                        style={styles.TextInputStyle} 
                        autoCorrect={false} 
                        placeholder="eg: 10, 100, 345" 
                        maxLength={9} 
                        keyboardType="number-pad" 
                        value={price}
                        onChangeText={(enteredtext)=> setPrice(enteredtext)}
                    />

                </View>
                <View style={styles.buttonsContainer}>
                    <CustomIconButton style={styles.buttonStyle} name="cancel" size={40*widthScale} color='red' onPress={()=> navigation.goBack()}/>
                    <CustomIconButton style={styles.buttonStyle} name="add-task" size={40*widthScale} color='green' onPress={onSubmit} />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    rootStyle:{
        flex:1,
        // paddingTop:100,
        justifyContent:'center',
        alignItems:'center',
    },

    TextInputStyle:{
        borderWidth:1,
        borderRadius:20,
        borderColor:'grey',
        padding:15,
        minWidth:300*widthScale,
        marginBottom:10,
    },
    buttonsContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center'
    },

    buttonStyle:{
        marginHorizontal:20,
    },
    TextStyle:{
        paddingLeft:10,
        fontWeight:'bold',
        fontSize:20,
        color:'blue'
    }
})

export default AddExpenseCard