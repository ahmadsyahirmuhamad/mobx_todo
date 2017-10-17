import api from './../services/Api';
import todoStore from './../stores/todo_store';

function fetchTodos() {
    const payload = { query: " { todos() { edges { node { id title description completed created_at updated_at errors } } } } "}
    return api.graphql(payload)
        .then((response) => {
            if (response.status === 200 && response.data) {
                const { edges } = response.data.data.todos
                todoStore.setTodos(edges)
                return edges
            }
            return []
        })
}


export { fetchTodos }
