import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import { useIsFocused } from '@react-navigation/native'
import useStorage from "../../hooks/useStorage";
import { PassItem } from "./components/passItem";
import * as Clip from 'expo-clipboard';

export function MyPasswords() {
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, deleteItem } = useStorage();
    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            setListPasswords(passwords);

        }
        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item) {
        console.log(item)
        const passwords = await deleteItem("@pass", item)
        setListPasswords(passwords);

    }
    async function handlePress(item) {
        console.log(item)
        await Clip.setStringAsync(item);
        alert("Senha copiada!");
    }

    return (
        <SafeAreaView style={{ flex: 1, }} >
            <View style={styles.header}>
                <Text style={styles.text}>Saved Passswords</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => <PassItem data={String(item)}
                        copyPass={() => handlePress(item)}
                        removePass={() => handleDeletePassword(item)}
                    />}
                />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#385A64',
        justifyContent: 'flex-end',
        paddingLeft: 20,
        paddingBottom: 20,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    content: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 14,
    },

});