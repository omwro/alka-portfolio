<template>
    <Section id="services">
        <Heading>Services</Heading>
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

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import Content from "../elements/Content";
import Card from "../elements/Card";
</script>

<script>
export default {
    name: "Services",
}
</script>