import { useContext } from "react"
import { FlatList, StyleSheet,View } from "react-native"
import { AppContext } from "../context"
import ExpenseCard from "../components/ExpenseCard"
const AllScreen=()=>{

    const {expenseList}=useContext(AppContext)

    return(
        
            <View style={styles.rootStyle}>
                <View>
    
                </View>
                <View>
                    <FlatList data={expenseList} renderItem={(itemData)=>{
                        return <ExpenseCard key={itemData.index} title={itemData.item.title} price={itemData.item.price} date={itemData.item.date}/>
                    }}/>
                </View>
            </View>
    )
}


const styles=StyleSheet.create({
    rootStyle:{
        // alignItems:'center'
    }
})

export default AllScreen