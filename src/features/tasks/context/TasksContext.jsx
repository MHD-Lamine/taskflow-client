import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const TasksContext = createContext();

const initialState = {
  tasks: JSON.parse(
    localStorage.getItem("tasks")
  ) || [],
};

function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task
        ),
      };

    default:
      return state;
  }
}

export function TasksProvider({ children }) {
  const [state, dispatch] = useReducer(
    tasksReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(state.tasks)
    );
  }, [state.tasks]);

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        dispatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}