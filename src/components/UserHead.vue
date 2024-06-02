<script setup>
import {useTelegram} from "@/hooks/telegramHooks";
const { user } = useTelegram();
</script>

<template>
    <div class="user-head neon-card">
        <div class="img">
            <!-- Image content here -->
        </div>
        <div class="info">
            <div class="name">
                {{ user?.first_name }}
            </div>
            <div class="status green">
                Member
            </div>
        </div>
        <div class="level">
            Level: 5
        </div>
    </div>
</template>

<style scoped>

</style>
