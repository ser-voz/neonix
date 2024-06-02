import { ref } from "vue";

export const toasty = ref('');

export const showToasty = () => {
  if(toasty.value) { return false }
  toasty.value = 'Your referral link copied!';
  setTimeout(() => {
    toasty.value = '';
  }, 1500); // Adjust the time as needed

};
