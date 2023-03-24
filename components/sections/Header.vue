<template>
    <header class="flex flex-row gap-4 bg-primary-background border-b-2 border-primary-border p-4 justify-between fixed w-full h-[75px]">
        <span class="text-4xl">Rauf Kaya</span>
        <div class="flex flex-row">
            <ul class="header-desktop flex-row gap-4 self-center">
                <li v-for="menu in json">
                    <a :href="menu.link">{{menu.text}}</a>
                </li>
            </ul>
            <Icon name="ci:menu-alt-05"
                  size="32px"
                  @click="openMobileMenu()"
                  class="header-mobile self-center cursor-pointer"/>
        </div>
    </header>
    <div class="h-[75px]"></div>
</template>

<script setup>
import json from "../../assets/json/menu.json"

const ACTIVE_CLASS_NAME = "active"
const openMobileMenu = () => {
    const classList = document.getElementById("menu").classList;
    if (!classList.contains(ACTIVE_CLASS_NAME)) {
        classList.add(ACTIVE_CLASS_NAME)
    } else {
        classList.remove(ACTIVE_CLASS_NAME)
    }
}
</script>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.header-desktop {
    @apply hidden md:flex
}

.header-mobile {
    @apply block md:hidden
}
</style>