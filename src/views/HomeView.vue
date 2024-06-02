<script setup>
import {onMounted} from "vue";
import {useTelegram} from "@/hooks/telegramHooks";
import UserHead from "@/components/UserHead.vue";
import GetScore from "@/components/GetScore.vue";

const { disabledClosingOnSwipe, user } = useTelegram();

onMounted(() => {
    disabledClosingOnSwipe();
})
</script>

<template>
    <div class="home blue">
        <UserHead/>
        <!--GetScore/-->
        <div class="main-action">
            <div class="score">312321312321</div>
            <div class="info-progress">
                <div class="outer"></div>
                <svg class="svg-progress" width="200" height="200" viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg)">
                    <circle r="90" cx="100" cy="100" fill="transparent" stroke="transparent" stroke-width="16px" stroke-dasharray="565.48px" stroke-dashoffset="0"></circle>
                    <circle r="90" cx="100" cy="100" stroke="rgba(var(--neon), .8)" stroke-width="9px" stroke-linecap="butt" stroke-dashoffset="305px" fill="transparent" stroke-dasharray="565.48px"></circle>
                    <text x="52px" y="117px" fill="rgba(var(--neon), 1)" font-size="52px" font-weight="bold" style="transform:rotate(90deg) translate(0px, -196px)">45%</text>
                </svg>
            </div>
            <button type="button" class="button neon-card">
                <span>Start</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss">
.home {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main-action {
    flex: 1;
    display: flex;
    flex-direction: column;
    .score {
        font-size: 55px;
        text-align: center;
    }
    .button {
        margin: auto 0 20px;
        font-size: 30px;
        padding: 20px 40px;
        color: rgba(var(--neon), 0.6);
    }
    .info-progress {
        --hue: 45;
        --hue1: 217;
        --hue2: 254;
        position: relative;
        width: 240px;
        height: 240px;
        margin: 0 auto;
        svg {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            &.check {
                display: none;
            }
        }
        &.finish {
            --neon: 0, 254, 155;
            --neon-glow: #02c435;
            .svg-progress {
                display: none;
            }
            .check {
                display: block;
            }
        }
        .outer {
            height: 80%;
            width: 80%;
            transform: translate(-50%, -50%);
            position: absolute;
            left: 50%;
            top: 50%;
            &:before, &:after {
                content: '';
                display: block;
                border-radius: 50%;
                box-shadow: 0 0 0 0.25em var(--neon-glow) inset, 0 0 1.5em 0.5em hsl(0deg 0% 0% / 76%) inset, 0 0 1.5em 0.25em rgba(var(--neon), .2), 0 0 7.5em hsl(0deg 0% 29.28% / 50%) inset, 0 0 7.5em rgba(var(--neon), .25);
                position: absolute;
            }
            &:after {
                inset: 8%;
            }
            &:before {
                width: 100%;
                height: 100%;
            }
        }
    }
}


</style>
