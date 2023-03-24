<template>
    <Section id="home" class="md:flex-row-reverse items-start pt-8">
        <div class="md:w-1/2">
            <img :src="`/_nuxt/${json.image}`" class="object-center object-contain w-[300px]" alt="Profile Photo"/>
            <svg style="visibility: hidden; position: absolute;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="round">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>
        </div>
        <div class="md:w-1/2">
            <h1>{{ json.header }}</h1>
            <p>{{ json.paragraph }}</p>
        </div>
    </Section>
</template>

<script setup>
import json from "../../assets/json/home.json"
import Section from "../elements/Section";
</script>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>
#home {
    margin-top: 0;
    margin-bottom: 0;
    min-height: calc(100vh - 75px);
}

img {
    width: 500px;
    height: 500px;

    -webkit-mask-image: url(assets/images/masks/mask2.png);
    /*mask-image: url(assets/images/masks/mask1.png);*/
    -webkit-mask-repeat: no-repeat;
    /*mask-repeat: no-repeat;*/
    -webkit-mask-size: 93%;
    /*mask-size: cover;*/
    -webkit-mask-position: center;
    /*mask-position: center;*/
    animation: maskswitch 5s infinite;
}

@keyframes maskswitch {

    0% {
        -webkit-mask-image: url(assets/images/masks/mask1.png);
    }
    50% {
        -webkit-mask-image: url(assets/images/masks/mask2.png);
    }
    100% {
        -webkit-mask-image: url(assets/images/masks/mask1.png);
    }
}
</style>