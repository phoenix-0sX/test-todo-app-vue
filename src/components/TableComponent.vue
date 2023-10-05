<template>
  <!--Main table-->
  <AlertUtilsComponent v-if="successAlert"></AlertUtilsComponent>
  <div class="d-flex flex-column">
    <div class="mb-3 d-flex justify-content-between gap-2">
      <div class="p-2 w-75 h2">TASKS LIST</div>
      <div class="input-group w-auto">
        <button type="button" class="px-3 btn btn-sm btn-outline-light text-dark" @click="resetDatatoDefault">
          <i class="bi bi-arrow-clockwise me-2"></i>Reset_Table
        </button>
      </div>
      <div class="input-group w-auto">
        <div class="input-group-text bg-warning">Not completed count</div>
        <input
          type="text"
          class="form-control text-center"
          id="not-completed"
          v-model="getInProgressCount"
          disabled
        />
      </div>
    </div>
    <table class="table table-bordered table-sm table-hover table-responsive">
      <thead class="table-light">
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in getTasks" :key="task.id">
          <th scope="row" class="align-middle">{{ task.id }}</th>
          <td class="align-middle">{{ task.title }}</td>
          <td class="align-middle">{{ task.desc }}</td>
          <td class="align-middle">
            <span class="px-2 badge" :class="task.isCompleted ? 'bg-success' : 'bg-warning'">
              {{ task.isCompleted ? 'Done' : 'in_progress' }}
            </span>
          </td>
          <td class="gap-2 d-flex align-content-end justify-content-center flex-wrap">
            <button
              type="button"
              class="px-3 btn btn-sm btn-outline-secondary"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              @click="setModalData(task)"
            >
              <i class="bi bi-pencil-square me-2"></i>Edit
            </button>
            <button
              type="button"
              class="px-3 btn btn-sm btn-success"
              v-if="!task.isCompleted"
              @click="setTaskAsComplete(task.id)"
            >
            <i class="bi bi-check-square me-2"></i>Complete
            </button>
            <button type="button" class="px-3 btn btn-sm btn-danger" @click="deleteTask(task)">
              <i class="bi bi-trash3 me-2"></i>Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--Main table-->

  <!--Modals-->

  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    aria-labelledby="editModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editModalLabel">Edit Task</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <InputsUtilsComponent :form-payload="formPayload"></InputsUtilsComponent>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Dismiss</button>
          <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="saveChange">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--Modals-->
</template>

<script setup lang="ts">
// inputs Utils components.
import InputsUtilsComponent from './InputsUtilsComponent.vue'
import AlertUtilsComponent from './AlertUtilsComponent.vue';
// composables for task methods.
import { useTasksMethods } from '@/composables/taskMethods'
const {
  successAlert,
  formPayload,
  getTasks,
  getInProgressCount,
  setTaskAsComplete,
  setModalData,
  saveChange,
  deleteTask,
  resetDatatoDefault
} = useTasksMethods()
</script>
