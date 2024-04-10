import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import * as Clip from 'expo-clipboard';
import useStorage from '../../hooks/useStorage'

export function ModalPassword({ passWord, handleClose }){
    const { saveItem } = useStorage();

     async function handlePress(){
        await Clip.setStringAsync(passWord);
        await saveItem("@pass", passWord );
        
        alert("Senha salva!");
        handleClose();
     }
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handlePress}>
                    <Text style={styles.text}>{passWord}</Text>
                </Pressable>
                <View style={styles.buttonArea} >
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,styles.buttonCopy]} onPress={handlePress}>
                        <Text style={styles.buttonCopyText}>Copiar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(24,24,24,0.6)',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        backgroundColor: '#fff',
        width:"85%",
        paddingTop:24,
        paddingBottom:24,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:'#000',
        marginBottom:24
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        color:'#fff',
        marginVertical:12,
        textAlign:'center'

    },
    innerPassword:{
        backgroundColor:'#0e0e0e',
        width:"90%",
        padding:5,
        borderRadius:8
    },
    buttonArea:{
        flexDirection:'row',
        width:'90%',
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        flex:1,
        alignItems:'center',
        marginVertical:14,
        padding:8
    },
    buttonCopy:{
        backgroundColor: '#385A64',
        marginVertical:14,
        borderRadius:8
    },
    buttonCopyText:{
        color:'#fff',
        fontWeight:'bold'
    }
}) 