import { action, observable } from 'mobx'

class TodoStore {
    
    @observable todos = []

    @action setTodos(items) {
        this.todos.replace(items)
    }

}

const todoStore = new TodoStore();
export default todoStore;