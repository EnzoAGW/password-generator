import React from "react"
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export function PassItem({ data, copyPass, removePass }) {
    return (
        <View style={styles.container} >
            <Pressable onLongPress={removePass} >

                <Text style={styles.text}>{data}</Text>
            </Pressable>
            <View>
                <TouchableOpacity onPress={copyPass}>
                    <Ionicons size={20} color={'#fff'} name='copy-outline' />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: "#fff"
    }

})