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
</script>

<style>
html {
    min-height: 100%;
    min-width: 100%;
    scroll-behavior: smooth;
}
body, #__nuxt, #app {
    height: 100%;
    width: 100%;
}
section {
    scroll-margin-top: 100px;
}
</style>