<script setup>
import {RouterView} from 'vue-router'
import {onMounted} from "vue";
import { loaded, loadData } from '@/hooks/loadedData';
import Footer from "@/components/Footer.vue";
import ClipBoard from "@/components/ClipBoard.vue";



onMounted(async () => {
    console.log('start')
    await loadData();
    //tg.isClosingConfirmationEnabled = true; not supported in version
});

</script>

<template>
    <div v-if="!loaded" class="progress">
        <div class="progress-container">
            <span>Loading...</span>
            <div class="progress-wrap">
                <div class="progress-bar"></div>
            </div>
        </div>
    </div>
    <template v-else>
        <main>
            <RouterView/>
            <ClipBoard/>
        </main>
        <footer></footer>
        <Footer />
    </template>
</template>
