<template>
    <div id="menu" class="flex flex-row w-full h-auto justify-end md:hidden ease-in-out duration-500 z-10">
        <ul class="flex flex-col gap-4 py-4 text-center fixed bg-primary-background border-primary  sm:rounded-bl-lg ease-in-out duration-500">
            <li v-for="menu in json">
                <a :href="menu.link" @click="closeMenu">{{menu.text}}</a>
            </li>
        </ul>
    </div>

</template>

<script setup>
import json from "../../assets/json/menu.json";

const closeMenu = () => {
    document.getElementById('menu').classList.remove('active')
}
</script>

<script>
export default {
    name: "Menu"
}
</script>

<style scoped>
#menu ul {
    @apply w-0
}

#menu.active ul {
    @apply w-full px-4 sm:w-[200px] border-b sm:border-l
}

a.active {
    @apply text-primary border-b border-primary
}
</style>