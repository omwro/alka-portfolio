<template>
    <Section id="contact" class="bg-primary-section">
        <div>
            <Heading>{{ content.contact.heading }}</Heading>
            <SubHeading>{{ content.contact.subheading }}</SubHeading>
        </div>
        <Content>
            <a v-for="contact in contactJson"
               :href="contact.url"
               target="_blank"
               class="flex bg-primary border border-primary rounded-2xl overflow-hidden ">
                <div class="p-2 bg-primary-background relative right-arrow">
                    <Icon :name="contact.icon"
                          class="text-primary cursor-pointer"
                          size="36"/>
                </div>
                <div class="py-2 px-6 self-center text-primary-background">
                    {{contact.name}}
                </div>
            </a>
        </Content>
    </Section>
</template>

<script setup>
import contactJson from "../../assets/json/contact.json"
import content from "../../assets/json/content.json"

import Section from "../elements/Section";
import Heading from "../elements/Heading";
import SubHeading from "../elements/SubHeading";
import Content from "../elements/Content";
</script>

<script>
export default {
    name: "Contact",
}
</script>

<style scoped>
.right-arrow::before {
    content: "";
    position: absolute;
    border: 10px solid transparent;
    border-left-color: #FFFFFF;
    z-index: 1;
    top: 50%;
    left: 100%;
    margin-top: -10px;
    right: -30px;
}
</style>