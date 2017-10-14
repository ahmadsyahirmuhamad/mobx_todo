import { AsyncStorage } from 'react-native';

class Storage {

    async setItem(key, payload){
        try {
            await AsyncStorage.setItem(key, payload);
        } catch (error) {
            // Error saving data
        }
    }

    async getItem(key){
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null){
                // We have data!!
                // console.log(value);
                return value
            }
            } catch (error) {
                // Error retrieving data
        }
    }

    async removeItem(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            // Error saving data
        }
    }
}

const storage = new Storage();
export default storage;