import api from './../services/Api';
import subTodoStore from './../stores/sub_todo_store';

function fetchSubTodos(todo_id) {
    const payload = { query: ` { sub_todos(todo_id: "${todo_id}" ) { edges { node { id todo_id title completed created_at updated_at errors } } } } `}
    return api.graphql(payload)
        .then((response) => {
            if (response.status === 200 && response.data) {
                const { edges } = response.data.data.sub_todos
                subTodoStore.setTodos(edges)
                return edges
            }
            return []
        })
}

function createSubTodo(todo_id, title) {
    const payload = { query: `mutation { createSubTodo(input: {todo_id: ${todo_id}, title: "${title}"}) { sub_todo { id todo_id title completed created_at updated_at errors } } }` }
    return api.graphql(payload)
        .then((response) => {
            if (response.status === 200 && response.data) {
                const { sub_todo } = response.data.data.createSubTodo
                subTodoStore.appendSubTodo(sub_todo)
                return sub_todo
            }
            return []
        })
}

function updateSubTodo(id, title) {
    const payload = { query: `mutation { updateSubTodo(input: {id: ${id}, title: "${title}"}) { sub_todo { id todo_id title completed created_at updated_at errors } } }` }
    return api.graphql(payload)
        .then((response) => {
            if (response.status === 200 && response.data) {
                const { sub_todo } = response.data.data.updateSubTodo
                subTodoStore.appendSubTodo(sub_todo)
                return sub_todo
            }
            return []
        })
}

function deleteSubTodo(id) {
    const payload = { query: `mutation { deleteSubTodo(input: {id: "${id}"}) { sub_todo { id todo_id title  completed created_at updated_at errors } } }` }
    return api.graphql(payload)
        .then(async (response) => {
            if (response.status === 200 && response.data) {
                const { sub_todo } = response.data.data.deleteSubTodo
                return true
            }
            return false
        })
}


export { fetchSubTodos, createSubTodo, updateSubTodo, deleteSubTodo }
