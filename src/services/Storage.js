class Storage {

    setItem(key, payload){
        try {
            await AsyncStorage.setItem(key, payload);
        } catch (error) {
            // Error saving data
        }
    }

    getItem(key){
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null){
                // We have data!!
                console.log(value);
            }
            } catch (error) {
                // Error retrieving data
        }
    }

    removeItem(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            // Error saving data
        }
    }
}

const storage = new Storage();
export default storage;