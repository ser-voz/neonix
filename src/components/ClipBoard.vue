<script setup>
import { toasty } from "@/hooks/clipboard";
</script>
<template>
    <transition name="fade" mode="out-in">
        <div v-if="toasty.length" class="toasty">
            <div class="toasty-item">
                {{ toasty }}
            </div>
        </div>
    </transition>
</template>

<style lang="scss">
.toasty {
    position: fixed;
    width: 100%;
    left: 0;
    top: 20px;
    z-index: 999;
    padding: 0 var(--default-padding);
    &-item {
        border-radius: var(--radius);
        background: var(--background);
        border: 2px solid rgba(var(--neon), 1);
        padding: var(--default-padding);
    }
}
</style>
