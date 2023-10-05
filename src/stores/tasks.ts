// store used for the tasks data.
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks',  {
    state: () => ({ tasks: [
        {
            id: 1,
            title: "Initiate login page",
            desc: "Design a responsive page with a form having two inputs for credentials and a button call to action LOGIN",
            isCompleted: true,
        },
        {
            id: 2,
            title: "Design Home page navigation bar",
            desc: "Make a simple navigation bar on the left panel of the home page.",
            isCompleted: false,
        }
    ] }),
    persist: true,
    getters: {
      getTasks: (state) => state.tasks,
      getInProgressCount: (state) => {
        const incomplete = state.tasks.filter((task) => task.isCompleted === false )
        return incomplete.length
      },
    },
    actions: {
      setTasks(newTasksList:any) {
        this.tasks = newTasksList
      },
    },
  })
