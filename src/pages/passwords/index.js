import { View,Text, StyleSheet } from "react-native";

export function MyPasswords(){
    return(
        <View>
            <Text style={style.text}>Cu de porco</Text>
        </View>
    );
}
const style = StyleSheet.create({
    text:{
        color:'#000'
    }
});