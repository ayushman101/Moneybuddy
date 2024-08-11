import { View, Text,StyleSheet,useWindowDimensions } from "react-native";
import CustomIconButton from "./CustomIconButton";
import { widthScale,width } from "../constants";

const ExpenseCard=({title, date, price})=>{

    function toUTCDateString(date) {
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        const weekDay = weekdays[date.getUTCDay()];
        const day = date.getUTCDate();
        const month = months[date.getUTCMonth()];
    
        return `${weekDay}, ${day} ${month}`;
    }
    

    return (
        <View style={styles.rootView}>
            <View style={styles.InnerView}>
                <Text style={styles.Textstyle}>{title}</Text>
                <Text style={styles.Textstyle}>{toUTCDateString(date)}</Text>
            </View>
            <View style={styles.InnerView}>
                <Text style={styles.Textstyle}>&#8377;{price}</Text>
                <CustomIconButton name='edit-document' size={30 * widthScale} color='blue' />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    rootView:{
        flexDirection:'row',
        paddingTop: 20 * widthScale,
        borderColor:'black',
        borderWidth:2,
        borderRadius:20 *widthScale,
        // justifyContent:'space-around',
        justifyContent:'space-between',
        paddingBottom:15 *widthScale,
        paddingHorizontal:25 *widthScale,
        margin:10 * widthScale,
    },
    InnerView:{
        // margin:5,
    },
    Textstyle:{
        paddingVertical:10 *widthScale,
    }
})


export default ExpenseCard;