// Composable used for task actions. ( methods )

import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/tasks'
import { ref, type Ref } from 'vue'

export function useTasksMethods() {
  // instanciate tasks store
  const tasksList = useTasksStore()
  const { getTasks, getInProgressCount } = storeToRefs(tasksList)

  // local data
  const successAlert: Ref<boolean> = ref(false)
  const formPayload: Ref<any> = ref({})

  // method to shoz success alert
  const showSuccess = () => {
    successAlert.value = true
    setTimeout(() => {
    successAlert.value = false
    }, 3000);
  }

  // method to set task as conplete
  const setTaskAsComplete = (taskId: number) => {
    getTasks.value.map((task) => {
      if (task.id == taskId) {
        task.isCompleted = true
      }
    })
    showSuccess()
  }

  // method to add new task
  const AddNewTask = () => {
    if (Object.keys(formPayload.value).length > 0) {
      const lastSaved = getTasks.value.slice(-1)[0]
      formPayload.value.id = lastSaved.id + 1
      formPayload.value.isCompleted = false
      getTasks.value.push(formPayload.value)
      formPayload.value = {}
      showSuccess()
    } else {
      alert('Form is empty!')
    }
  }

  // method to fill modal form with tabledata.
  const setModalData = (tableData: any) => {
    formPayload.value = tableData
  }

  // method to validate change in the modal
  const saveChange = () => {
    if (Object.keys(formPayload.value).length > 0) {
      getTasks.value.map((task) => {
        if (task.id == formPayload.value.id) {
          task = formPayload.value
        }
      })
      showSuccess()
    } else {
      alert('Modal is empty!')
    }
  }

  // method to delete tasks
  const deleteTask = (task: any) => {
    const index = getTasks.value.indexOf(task)
    if (index > -1) {
      getTasks.value.splice(index, 1)
      showSuccess()
    } else {
      alert('Task not found...')
    }
  }

  // method to reinitialize table data
  const resetDatatoDefault = () => {
    tasksList.$reset()
    showSuccess()
  }

  // expose managed state as return value
  return {
    successAlert,
    formPayload,
    getTasks,
    getInProgressCount,
    setTaskAsComplete,
    AddNewTask,
    setModalData,
    saveChange,
    deleteTask,
    resetDatatoDefault
  }
}
