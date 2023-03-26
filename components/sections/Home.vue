<template>
    <Section id="home" class="bg-primary-section">
        <div class="flex flex-col gap-8 md:flex-row-reverse">
            <div class="flex self-center md:justify-center md:w-1/2">
                <div id="selfie"></div>
            </div>
            <div class="flex flex-col gap-4 text-center md:text-left md:self-center md:w-1/2">
                <h1 class="text-4xl md:text-5xl font-extrabold">
                    <client-only>
                        {{ scribbledHeading }}
                    </client-only>
                </h1>
                <p class="text-lg md:text-xl">{{ content.home.paragraph }}</p>
                <div>
                    <a v-for="contact in contactJson"
                       :href="contact.url"
                       target="_blank" :aria-label="contact.name">
                        <Icon :name="contact.icon"
                              class="text-primary-text cursor-pointer hover:text-primary"
                              size="36"/>
                    </a>

                </div>
            </div>
        </div>
    </Section>
</template>

<script setup>
import content from "../../assets/json/content.json"
import contactJson from "../../assets/json/contact.json"
import Section from "../elements/Section";

const scribble = () => {
    const heading = [...content.home.heading];
    const headingLength = heading.length;
    const random = Math.floor(Math.random() * headingLength)
    console.log("random", random)
    // if (heading[random] === " ") return scribble()
    heading[random] = Math.random() < 0.5 ? 0 : 1;
    return heading.join('');
}

const scribbledHeading = scribble();
</script>

<script>
export default {
    name: "Home"
}
</script>

<style>
#home main {
    padding-top: 32px;
}

#home #selfie {
    -webkit-animation: morph 8s ease-in-out infinite;
    animation: morph 8s ease-in-out infinite;
    background-image: url(/images/selfie.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    transition: all 1s ease-in-out;
    height: 400px;
    width: 300px;
    @apply border border-primary
}

@keyframes morph {
    0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
}
</style>