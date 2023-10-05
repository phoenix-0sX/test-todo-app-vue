<template>
    <AlertUtilsComponent v-if="successAlert"></AlertUtilsComponent>
    <div class="mb-3">
        <span class="h2">NEW TASK</span>
    </div>
        <InputsUtilsComponent :form-payload="formPayload"></InputsUtilsComponent>
    <div class="mb-3">
        <button type="button" class="px-4 btn btn-sm btn-primary" @click="AddNewTask">
            <i class="bi bi-plus-square me-2"></i>Add
        </button>
    </div>
</template>


<script setup lang="ts">
// import Utils components.
import InputsUtilsComponent from "./InputsUtilsComponent.vue"
import AlertUtilsComponent from './AlertUtilsComponent.vue';
    // composables for task methods.
    import { useTasksMethods } from "@/composables/taskMethods"
    const { successAlert, formPayload, AddNewTask } = useTasksMethods()
</script>