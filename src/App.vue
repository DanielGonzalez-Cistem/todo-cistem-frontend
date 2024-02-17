<script setup>
//*Importación nativas
import {ref, onMounted} from "vue";

const show = ref(false);

onMounted(() => {
    setTimeout(() => (show.value = true), 250);
});
</script>

<template>
    <transition name="fade">
        <div class="main-container" v-if="show">
            <!-- Renderización de Contenido -->
            <router-view></router-view>
        </div>
    </transition>
</template>

<style scoped>
    .main-container {
        min-width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>