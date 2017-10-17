import api from './../services/Api';
import subTodoStore from './../stores/sub_todo_store';

function fetchSubTodos(todo_id) {
    const payload = { query: ` { sub_todos(todo_id: "${todo_id}" ) { edges { node { id title completed created_at updated_at errors } } } } `}
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


export { fetchSubTodos }
