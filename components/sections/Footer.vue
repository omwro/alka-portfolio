<template>
    <Section id="footer" class="bg-primary-text text-primary-background">
        <div class="flex flex-col gap-4">
            <div class="text-4xl font-extrabold">
                <Icon name="Logo"
                      class="text-primary mr-1"
                      size="48"/>
                <span>Raif Kaya</span>
            </div>
            <div>
                <a v-for="contact in contactJson"
                   :href="contact.url"
                   target="_blank"
                    :aria-label="contact.name">
                    <Icon :name="contact.icon"
                          class="text-primary-gray cursor-pointer hover:text-primary"
                          size="32"/>
                </a>
            </div>
        </div>
        <div class="flex gap-8">
            <div>
                <div class="uppercase font-bold mb-2">Experiences</div>
                <ul class="flex flex-col gap-2">
                    <li>
                        <a href="https://drive.google.com/drive/folders/1FdScvIpsRtNLf7PvSzguZQhkRMetm3wJ?usp=share_link"
                           class="text-primary-gray"
                           target="_blank">
                            Certificates
                        </a>
                    </li>
                    <li>
                        <a href="https://ecodation.com/"
                           class="text-primary-gray"
                           target="_blank">
                            Ecodation
                        </a>
                    </li>
                    <li>
                        <a href="https://www.btkakademi.gov.tr"
                           class="text-primary-gray"
                           target="_blank">
                            BTK Academi
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div class="uppercase font-bold mb-2">Menu</div>
                <ul class="flex flex-col gap-2">
                    <li v-for="menu in menuJson">
                        <a :href="menu.link" class="text-primary-gray">{{ menu.text }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </Section>
    <footer class="text-center p-2 bg-primary-text text-primary-background">
        <small>&copy; Copyright {{ currentYear }} Rauf Kaya. All Rights Reserved</small>
    </footer>
</template>

<script setup>
import contactJson from "../../assets/json/contact.json"
import menuJson from "../../assets/json/menu.json"

import Section from "../elements/Section";

const currentYear = new Date().getFullYear();
</script>

<script>
export default {
    name: "Footer",
}
</script>

<style>
#footer > main {
    @apply py-8 flex-row flex-wrap justify-between
}
</style>