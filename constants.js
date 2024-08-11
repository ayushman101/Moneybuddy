import { Dimensions } from "react-native";

export const {width, height}=Dimensions.get('window')

export const widthScale=(Math.sqrt((width*width + height*height)/864436))



