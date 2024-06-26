import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () =>{
    //seach saved passwords
    
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log('Erro no get')
            return [];
        }
    }
    //save passwords
    const saveItem = async (key, value) => {
      
        try {
            let passwords = await getItem(key)
            passwords.push(value)
            await AsyncStorage.setItem(key,JSON.stringify(passwords))
        } catch (error) {
            console.log('Erro no save',error)
            return [];
        }
        
    }
    //delete passwords
    const deleteItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let selectedPass = passwords.filter( (i) =>{
                return ( i!==item )
            })
            
            await AsyncStorage.setItem(key, JSON.stringify(selectedPass))
            return selectedPass;

        } catch (error) {
            console.log('Erro no delete', error)
            return [];
        }
    }

    return {

        getItem,
        saveItem,
        deleteItem,

    }
}
export default useStorage;