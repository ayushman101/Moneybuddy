import { View,StyleSheet } from "react-native";
import ExpenseCard from "../components/ExpenseCard";
import AddExpenseCard from "../components/AddExpenseCard";

const RecentScreen=()=>{
    return(
        <View style={styles.rootStyle}>
            <View>

            </View>
            <View>
                <ExpenseCard title='Whopper' price={100} date={new Date()}/>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    rootStyle:{
        // alignItems:'center'
    }
})

export default RecentScreen