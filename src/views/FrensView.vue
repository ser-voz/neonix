<script setup>
import {ref} from "vue";
import { useTelegram} from "@/hooks/telegramHooks";
import { showToasty } from "@/hooks/clipboard";
import axios from "axios";

const { user, copyClick } = useTelegram();

const refLink = ref(`https://t.me/share/url?url=https://t.me/webspeak_test1_bot?start=${user?.id}`)

const referralsCount = ref(null);
const getReferralsCount = async () => {
    try {
        const response = await axios.get('https://webspeak.info/telegramBot/server/server.php', {
            params: {
                //telegram_id: user?.id,
                telegram_id: 514407465,
                type: 'multiple',
                fields: JSON.stringify( ['username', 'referrals_count'])
            }
        });
        referralsCount.value = response.data.referrals_count;
        console.log(response.data);
    } catch (err) {
        console.error(err);
    }
};
getReferralsCount();
</script>

<template>
    <div class="frens green">
        <h1>Frens</h1>
        <div class="neon-card">
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut ducimus eius ex exercitationem incidunt libero odio placeat quas reiciendis.
            </p>
        </div>
        <div class="frens-invite">
            <a class="share neon-card button" :href="refLink">
                <span>Invite Friends</span>
            </a>
            <button class="button copy neon-card" type="button" @click="showToasty()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"></path><path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path></svg>
            </button>
        </div>
       <div class="frens-table">
           <p>
               Your referrals: {{ referralsCount }}
           </p>
           <div class="table-wrap neon-card">
               <table class="table">
                    <tbody>
                    <tr v-for="i in 25">
                        <td>username</td>
                        <td>+10 000</td>
                    </tr>
                    </tbody>
               </table>
           </div>
       </div>
    </div>
</template>

<style scoped>

</style>
