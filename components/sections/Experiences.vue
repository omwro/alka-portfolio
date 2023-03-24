<template>
    <Section id="experiences">
        <section v-for="experiences in json">
            <div>
                <Heading>{{ content.experiences.heading }}</Heading>
                <SubHeading>{{ experiences.title }}</SubHeading>
            </div>
            <Content>
                <Card v-for="experience in experiences.experiences"
                      :startdate="experience.startdate"
                      :enddate="experience.enddate"
                      :title="experience.title"
                      :locationtext="experience.locationtext"
                      :locationlink="experience.locationlink"
                      :description="experience.description"
                      :bullets="experience.bullets"/>
            </Content>
        </section>
    </Section>
</template>

<script setup>
import json from "../../assets/json/experiences.json"
import content from "../../assets/json/content.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import SubHeading from "../elements/SubHeading";
import Card from "../elements/Card";
import Content from "../elements/Content";
</script>

<script>
export default {
    name: "Experiences",
}
</script>

<style scoped>
#experiences main section:not(:last-child) {
    @apply pb-16
}
</style>
