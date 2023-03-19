<template>
    <Section id="portfolio">
        <Heading>Portfolio</Heading>
        <Content>
            <Card v-for="portfolio in json"
                  :image="portfolio.image"
                  :title="portfolio.title"
                  :description="portfolio.description"
                  :bottomtext="portfolio.bottomtext"
                  :bottomtextlink="portfolio.bottomtextlink"
                  :collapsible="true"
            />
        </Content>
    </Section>
</template>

<script setup>
import json from "../../assets/json/portfolio.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import Content from "../elements/Content";
import Card from "../elements/Card";
</script>

<script>
export default {
    name: "Portfolio",
}
</script>
