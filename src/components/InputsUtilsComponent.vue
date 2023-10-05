<template>
    <div class="mb-3">
        <label for="title" class="form-label h5">Title</label>
        <input type="text" class="form-control" id="title" placeholder="example title" v-model="formData.title">
    </div>
    <div class="mb-3">
        <label for="description" class="form-label h5">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="formData.desc"></textarea>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

    // local props
    const props = defineProps({
        formPayload: {
            type: Object,
            required: true
        }
    })

    // local method
    const formData = computed(() => { return props.formPayload })
</script>