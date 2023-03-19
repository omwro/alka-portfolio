<template>
    <div id="menu" class="flex flex-row w-full h-auto sm:justify-end md:hidden">
        <ul class="flex flex-col gap-4 p-4 text-center fixed w-full bg-primary-background border-b-2 border-primary-border sm:w-[200px] sm:border-l-2 sm:rounded-bl-lg">
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

</style>