<template>
    <div id="menu" class="flex flex-row w-full h-auto justify-end md:hidden ease-in-out duration-500">
        <ul class="flex flex-col gap-4 py-4 text-center fixed  bg-primary-background border-b-2 border-primary-border sm:border-l-2 sm:rounded-bl-lg ease-in-out duration-500">
            <li v-for="menu in json">
                <a :href="menu.link">{{menu.text}}</a>
            </li>
        </ul>
    </div>

</template>

<script setup>
import json from "../../assets/json/menu.json"
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
    @apply w-full px-4 sm:w-[200px]
}
</style>