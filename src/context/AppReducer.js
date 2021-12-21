export default function appReducer(state, action) {
    console.log(state, action);
    
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [...state.tasks, action.payload]
            };
        case 'DELETE_TASK':
            return {
                tasks: [...state.tasks.filter(task => task.id !== action.payload)]
            }
        case 'UPDATE_TASK':
            const updatedTask = action.payload;
            const updatedTasks = state.tasks.map(task => {
                if(task.id === updatedTask.id) {
                    task.title = updatedTask.title;
                    task.description = updatedTask.description;
                    task.done = updatedTask.done;
                }
                return task
            })
            return {
                tasks: updatedTasks
            }
        case 'TOGGLE_TASK':
            const toggledTasks = (id) => {
                state.tasks.find(task => task.id === action.payload);
            }
            return {
                tasks: toggledTasks
            }
        default:
            break;
    }

     
}