<script setup>
const menuItems = [
    {
        title: 'Home', path: "/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35px" height="35px" viewBox="0 0 30 30" id="Layer_1" version="1.1" xml:space="preserve"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"/></svg>`,
        color: 'blue',

    },
    {
        title: 'Frens', path: '/frens',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z"></path><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path></svg>',
        color: 'green'
    },
    {
        title: 'Earn', path: '/earn',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35px" height="35px" viewBox="0 0 30 30" id="Layer_1" version="1.1" xml:space="preserve"><path class="st4" d="M24.9,24.1l-0.4-5c-0.4-4.5-2.8-7.5-6.5-10l1-6h-5l-0.8,1H11l0.6,3.2l4.4,0.6c0.4,0.1,0.6,0.4,0.6,0.7  c0,0.3-0.3,0.6-0.7,0.6l-4-0.1c-3.7,2.5-6.1,5.5-6.4,10l-0.4,5C4.5,24.3,4,24.8,4,25.5C4,26.3,4.7,27,5.5,27h19  c0.8,0,1.5-0.7,1.5-1.5C26,24.8,25.5,24.3,24.9,24.1z M11.4,17.6l2.2-0.3l1-2c0.2-0.3,0.6-0.3,0.8,0l1,2l2.2,0.3  c0.4,0.1,0.5,0.5,0.3,0.8L17.3,20l0.4,2.2c0.1,0.4-0.3,0.7-0.7,0.5l-2-1l-2,1c-0.3,0.2-0.7-0.1-0.7-0.5l0.4-2.2l-1.6-1.6  C10.9,18.1,11,17.7,11.4,17.6z"/></svg>',
        color: 'yellow'
    },
    {
        title: 'Boosts', path: '/boosts',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16zm-1.5-9a2 2 0 0 1 2.83 0 2 2 0 1 1-2.83 0zM3 21a7.81 7.81 0 0 0 5-2l-3-3c-2 1-2 5-2 5z"></path></svg>',
        color: 'red'
    },

]
</script>

<template>
    <footer class="footer">
        <nav class="footer-menu">
            <router-link
                v-for="item in menuItems"
                :to="{path: item.path}"
                class="footer-menu-item neon-card"
                :class="item.color"
            >
                <span class="icon" v-html="item.icon"/>
                <span>
                    {{ item.title }}
                </span>
            </router-link>
        </nav>
    </footer>
</template>

<style scoped>

</style>
