<template>
    <Section id="portfolio" class="bg-primary-section">
        <div>
            <Heading>{{content.portfolio.heading}}</Heading>
            <SubHeading>{{content.portfolio.subheading}}</SubHeading>
        </div>
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
import content from "../../assets/json/content.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import Content from "../elements/Content";
import Card from "../elements/Card";
import SubHeading from "../elements/SubHeading";
</script>

<script>
export default {
    name: "Portfolio",
}
</script>
