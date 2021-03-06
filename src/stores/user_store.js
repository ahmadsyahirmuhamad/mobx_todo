import { computed, action, observable } from 'mobx'

class UserStore {
    
    @observable email = ''
    @observable first_name = ''
    @observable last_name = ''
    @observable admin = ''
    @observable token = ''
    @observable isLoggedIn = false

    @action saveUser(user) {
        this.email = user.email
        this.first_name = user.first_name
        this.last_name = user.last_name
        this.admin = user.admin
        this.token = user.auth_token
        this.isLoggedIn = true
    }

    @action clear() {
        this.email = ''
        this.first_name = ''
        this.last_name = ''
        this.admin = ''
        this.token = ''
        this.isLoggedIn = false
    }

    // @computed get loggedIn() {
    //     return this.isLoggedIn;
    // }
}

const userStore = new UserStore();
export default userStore;