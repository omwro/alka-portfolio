<template>
    <Section id="experiences" v-for="experiences in json">
            <Heading>{{experiences.title}}</Heading>
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
    </Section>
</template>

<script setup>
import json from "../../assets/json/experiences.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import Card from "../elements/Card";
import Content from "../elements/Content";
</script>

<script>
export default {
    name: "Experiences",
}
</script>
