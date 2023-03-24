<template>
    <Section id="skills" class="bg-primary-section">
        <div>
            <Heading>{{content.skills.heading}}</Heading>
            <SubHeading>{{content.skills.subheading}}</SubHeading>
        </div>
        <Content>
            <Skill v-for="skill in json"
                    :title="skill.title"
                    :percentile="skill.percentile"/>
        </Content>
    </Section>
</template>

<script setup>
import json from "../../assets/json/skills.json"
import content from "../../assets/json/content.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import SubHeading from "../elements/SubHeading";
import Content from "../elements/Content";
import Skill from "../elements/Skill";
</script>

<script>
export default {
    name: "Skills",
}
</script>
