import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

const TasksContext = createContext();

function getInitialTasks() {
  try {
    const storedTasks =
      localStorage.getItem("tasks");

    return storedTasks
      ? JSON.parse(storedTasks)
      : [];
  } catch (error) {
    console.error(
      "Erreur lecture localStorage:",
      error
    );

    return [];
  }
}

const initialState = {
  tasks: getInitialTasks(),
  filter: "all",
  search: "",
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

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
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
        filter: state.filter,
        search: state.search,
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