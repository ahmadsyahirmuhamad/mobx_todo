import { action, observable, computed } from 'mobx'

class TodoStore {
    
    @observable todos = []

    @action setTodos(items) {
        this.todos.replace(items)
    }

    @action appendTodo(item) {
        this.todos.push(item)
    }

    @computed get todoCount() {
        return this.todos.length
    }

    @computed get todosCollection() {
        return this.todos
    }
    

}

const todoStore = new TodoStore();
export default todoStore;