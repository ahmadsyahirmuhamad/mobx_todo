import { action, observable } from 'mobx'

class SubTodoStore {
    
    @observable todos = []

    @action setTodos(items) {
        this.todos.replace(items)
    }

}

const subTodoStore = new SubTodoStore();
export default subTodoStore;