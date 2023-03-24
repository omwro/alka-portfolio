<template>
    <Section id="services">
        <div>
            <Heading>{{content.services.heading}}</Heading>
            <SubHeading>{{content.services.subheading}}</SubHeading>
        </div>
        <Content>
            <Card v-for="service in json"
                  :icon="service.icon"
                  :title="service.title"
                  :description="service.description"/>
        </Content>
    </Section>
</template>


<script setup>
import json from "../../assets/json/services.json"
import content from "../../assets/json/content.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import Content from "../elements/Content";
import Card from "../elements/Card";
import SubHeading from "../elements/SubHeading";
</script>

<script>
export default {
    name: "Services",
}
</script>