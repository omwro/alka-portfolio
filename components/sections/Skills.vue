<template>
    <Section id="skills">
        <Heading>Skills</Heading>
        <Content>
            <Skill v-for="skill in json"
                    :title="skill.title"
                    :percentile="skill.percentile"/>
        </Content>
    </Section>
</template>

<script setup>
import json from "../../assets/json/skills.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import Content from "../elements/Content";
import Skill from "../elements/Skill";
</script>

<script>
export default {
    name: "Skills",
}
</script>
