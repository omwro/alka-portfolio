<template>
    <div id="app" class="text-primary-text bg-primary-background">
        <Header/>
        <Menu/>
        <Home/>
        <About/>
        <Portfolio/>
        <Services/>
        <Skills/>
        <Experiences/>
        <Contact/>
        <Footer/>
    </div>
</template>

<script setup>
import Home from "./components/sections/Home";
import Header from "./components/sections/Header";
import Menu from "./components/sections/Menu";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experiences from "./components/sections/Experiences";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Services from "./components/sections/Services";

import menuJson from "assets/json/menu.json"

if (process.client) {
    const menuItems = menuJson.map(menuItem => {
        const menuItemWithoutAnchor = menuItem.link.replace('#', '');
        const menuItemElement = document.getElementById(menuItemWithoutAnchor)
        menuItem['offsetTop'] = menuItemElement.offsetTop;
        return menuItem;
    })

    const sortedMenuItems = menuItems.sort((a, b) => (a.offsetTop < b.offsetTop) ? 1 : ((b.offsetTop < a.offsetTop) ? -1 : 0))

    window.addEventListener('scroll', () => {
        for (let i = 0; i < sortedMenuItems.length; i++) {
            const item = sortedMenuItems[i];
            if ((window.scrollY + 1) >= item.offsetTop) {
                // Remove all active classes
                document.querySelectorAll('a.active')
                    .forEach(x => x.classList.remove("active"))
                // Get all correct anchors that should be active
                const links = document.querySelectorAll(`a[href='${item.link}']`);
                // Make the anchors active
                for (let j = 0; j < links.length; j++) {
                    links[j].classList.add("active");
                }
                break;
            } else {
                document.querySelectorAll('a.active')
                    .forEach(x => x.classList.remove("active"))
            }
        }
    })
}
</script>

<style>
html {
    min-height: 100%;
    min-width: 100%;
    scroll-behavior: smooth;
}
body, #__nuxt, #app {
    @apply h-full w-full;
}
body::-webkit-scrollbar-track
{
    @apply rounded-full bg-primary-background;
}

body::-webkit-scrollbar
{
    @apply w-2 bg-primary-background;
}

body::-webkit-scrollbar-thumb
{
    @apply rounded-full bg-primary;
}
</style>