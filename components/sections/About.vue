<template>
    <Section id="about">
        <Content class="md:flex-nowrap md:gap-16">
            <div class="w-full max-w-[300px] md:max-w-[450px]">
                <img src="~/assets/images/about.png"
                alt="about me image"
                class="w-full object-cover rounded-xl">
            </div>
            <div class="flex flex-col flex-initial w-full gap-2">
                <Heading>{{content.about.heading}}</Heading>
                <SubHeading>{{content.about.subheading}}</SubHeading>
                <p class="text-center md:text-left">{{content.about.paragraph}}</p>
            </div>
        </Content>
    </Section>
</template>

<script setup>
import content from "assets/json/content.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import Content from "../elements/Content";
import SubHeading from "../elements/SubHeading";
</script>

<script>
export default {
    name: "About",
}
</script>

<style scoped>
#about h2,
#about h3 {
    @apply md:mx-0 md:text-left;
}
</style>