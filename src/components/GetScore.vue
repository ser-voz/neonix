<script setup>
import {ref, watch} from "vue";
import {startBtn, formattedTime} from "@/store/store";

const text = ref({
    start: 'Press G-Button to start farm',
    farm: 'Farming...'
})
</script>

<template>
    <div class="get-score">
        <div class="score">
            32.323.99
        </div>
        <div class="main-button-bg">
            <div class="main-button-wrap" @click="startBtn = !startBtn" :class="{farming: startBtn}">
                <div class="shadow"></div>
                <div class="main-button">
                    <span>G</span>
                </div>
            </div>
        </div>
        <p>{{ startBtn ? text["farm"] : text['start'] }}</p>
        <p class="remaining">Remaining time</p>
        <div class="time" :class="{active: startBtn}">
            88:88:88
            <span>
                {{ formattedTime }}
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.get-score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 50px;
    margin: auto 0;

    p {
        color: var(--text-color);
        font-weight: 500;
        margin-top: clamp(20px, 2vmin, 30px);
    }

    .main-button {
        --line-opacity: .3;
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(45deg, transparent, transparent 40%, rgba(var(--neon), var(--line-opacity))), linear-gradient(#262626, #141414);
        animation: rotate 2s linear infinite;
        animation-play-state: paused;
        aspect-ratio: 1/1;

        > * {
            z-index: 1;
        }

        > span {
            color: rgba(13, 13, 13, .85);
            font-weight: 900;
            text-shadow: -1.5px -1.5px 2px #3a3a3a;
            font-size: var(--g-size);
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:before,
        &:after {
            content: " ";
            position: absolute;
            inset: 8px;
            background: linear-gradient(#161616, #262626);
            border-radius: inherit;
            z-index: 0;
        }

        &:before {
            background: linear-gradient(45deg, transparent, transparent 40%, rgba(var(--neon), var(--line-opacity)));
            filter: blur(32px);
        }

        &-wrap {
            position: relative;
            margin-bottom: 15px;

            .shadow {
                width: calc(100% + 6px);
                height: calc(100% + 6px);
                position: absolute;
                inset: 8px;
                background: linear-gradient(#000000, #000000);
                border-radius: inherit;
                z-index: 0;
                left: -3px;
                top: -3px;
            }

            &.farming {
                pointer-events: none;
                box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.13), 0 2px 4px rgba(0, 0, 0, 0.35), 0 3px 1px 2px rgba(0, 0, 0, 0.2);

                .main-button {
                    --line-opacity: 1;
                    animation-play-state: running;
                }
            }

            border-radius: 50%;
            box-shadow: inset 0 2px 3px rgba(255, 255, 255, 0.13), 0 5px 8px rgba(0, 0, 0, 0.3), 0 10px 10px 4px rgba(0, 0, 0, 0.3);

            &:after {
                content: "";
                position: absolute;
                left: -20px;
                right: -20px;
                top: -20px;
                bottom: -20px;
                z-index: -2;
                border-radius: inherit;
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.3),
                0 0 10px rgba(0, 0, 0, 0.15);
            }

            &:before {
                content: "";
                position: absolute;
                left: -20px;
                right: -20px;
                top: -20px;
                bottom: -20px;
                z-index: -2;
                border-radius: inherit;
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.3),
                0 0 10px rgba(0, 0, 0, 0.15);
            }
        }

        &-bg {
            position: relative;
            width: 280px;
            height: 280px;
            padding: 20px;
            background: rgba(79, 79, 79, .1);
            border-radius: 50%;
            @media screen and (max-width: 393px) {
                width: 240px;
                height: 240px;
            }
        }
    }

    .score {
        margin: 15px 0 30px;
        font-weight: 600;
        font-size: 42px;
        @media screen and (min-width: 385px) {
            font-size: 55px;
        }
        //font-size: var(--score-size);
        //margin-bottom: 40px;
        line-height: 1;
    }

    .time {
        position: relative;
        font-size: 40px;
        color: rgba(128, 128, 128, 0.2);
        font-family: 'Digital-7 Mono', sans-serif;
        line-height: 1.2;
        @media screen and (min-width: 390px) {
            font-size: 50px;
        }

        span {
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
        }

        &:not(.active) {
            opacity: .6;
        }

        &.active {
            span {
                text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff;
            }
        }
    }
}
</style>
