import { create } from 'apisauce';
import userStore from './../stores/user_store'


const config = {
    baseUri: 'http://localhost:3000', // development 
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
        const header = { headers: { Authorization: `${userStore.token}` } }        
        return this.api.post('/api/users/graphql', payload, header)
    }

    // check for request status
    isOk() {
        
    }
}

const api = new Api();
export default api;