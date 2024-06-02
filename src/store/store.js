import {ref, watch} from "vue";

export const startBtn = ref (false);

watch(startBtn, (el) => {
  if(el) {
    setTimeout(() => {
      startBtn.value = false;
    }, 123000)
  }
})

import { onMounted, onUnmounted, computed } from 'vue';

const targetTime = 6 * 60 * 60; // 6 hours in seconds
const timeLeft = ref(targetTime);

export const formattedTime = computed(() => {
  const hours = Math.floor(timeLeft.value / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeLeft.value % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeLeft.value % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
});

let interval;

watch(startBtn, (el) => {
  interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
})

// onUnmounted(() => {
//   clearInterval(interval);
// });

// let time = document.querySelector('.time');
//
// let intervalId = setInterval(() => {
//   let date = new Date(),
//     hours = Number(date.getHours()),
//     mins = Number(date.getMinutes()),
//     secs = Number(date.getSeconds());
//
//   time.textContent = `${hours > 9 ? hours : '0'+hours}:${mins > 9 ? mins : '0'+mins}:${secs > 9 ? secs : '0'+secs}`;
// }, -1000);
