<template>
    <div class="overflow-hidden position-relative">
        <nav class="navbar fixed-top bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand text-danger" href="#">#Tasks-Manager (Todo app)</a>
            </div>                        
        </nav>
        <div style="height:75px"></div>
        <div class="mt-3 h-100 position-relative">
            <div class="row align-items-start justify-content-center">
                <div class="card col-7 me-3 border p-4">
                    <TableComponent></TableComponent>
                </div>
                <div class="card col-4 border p-4">
                    <FormComponent></FormComponent>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TableComponent from "@/components/TableComponent.vue"
import FormComponent from "@/components/FormComponent.vue";
</script>