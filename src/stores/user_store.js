import { observable } from 'mobx';

class UserStore {
    
    @observable email = ''
    @observable first_name = ''
    @observable last_name = ''
    @observable admin = ''
    @observable token = ''

}

const userStore = new UserStore();
export default userStore;