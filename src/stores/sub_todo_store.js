import { action, observable, computed } from 'mobx'

class SubTodoStore {
    
    @observable subTodos = []

    @action setTodos(items) {
        this.subTodos.replace(items)
    }
    
    @action appendSubTodo(item) {
        this.subTodos.push(item)
    }

    @computed get subTodoCount() {
        return this.subTodos.length
    }

    @computed get SubTodosCollection() {
        return this.subTodos
    }

}

const subTodoStore = new SubTodoStore();
export default subTodoStore;
