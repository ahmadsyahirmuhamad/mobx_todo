import { create } from 'apisauce';
import userStore from './../stores/user_store'


const config = {
    baseUri: 'http://10.0.2.2:3000', // development 
    timeout: 30000,    
}

class Api {
    constructor() {
        this.api = create({
            baseURL: `${config.baseUri}`,
            timeout: config.timeout,
            headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
    }

    graphql(payload) {
        const header = { headers: { Authorization: `Bearer ${userStore.token}` } }        
        return this.api.post('/graphql', payload, header)
    }

    // check for request status
    isOk() {
        
    }
}

const api = new Api();
export default api;