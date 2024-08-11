import { Pressable, StyleSheet } from "react-native"
import {MaterialIcons} from '@expo/vector-icons'
const CustomIconButton =({name, size, color, onPress,style})=>{
    return (
        <Pressable onPress={onPress} style={[style,styles.pressed]}>
            <MaterialIcons name={name} size={size} color={color} />
        </Pressable>
    )
}


const styles= StyleSheet.create({
    pressed: {
        opacity:0.7
    },

})

export default CustomIconButton;