import api from './../services/Api';
import userStore from './../stores/user_store';
import storage from './../services/Storage';

function userLogin(email, password) {
    const payload = { query: `mutation { userLogin(input: {email: "${email}", password: "${password}"}) { user { email first_name last_name full_name auth_token errors } } }` }
    return api.graphql(payload)
        .then((response) => {
            if (response.status === 200 && response.data) {
                const { user } = response.data.data.userLogin
                storage.setItem('token', user.auth_token)
                userStore.saveUser(user)
                return user
            }
        }).catch(error => error)
}

async function userLogout() {
    await storage.removeItem('token')
    await userStore.clear()
    return true
}

function getUser() {
    const payload = { query: `{ user { email first_name last_name full_name auth_token errors } }` }
    return api.graphql(payload)
        .then((response) => {
            if (response.status === 200 && response.data) {
                const { user } = response.data.data
                storage.setItem('token', user.auth_token)
                userStore.saveUser(user)
                return user
            }
        }).catch(error => error)
}

export { userLogin, getUser, userLogout }
