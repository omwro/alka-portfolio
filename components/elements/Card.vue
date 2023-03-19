<template>
    <div class="flex flex-col rounded-lg"
         :class="[
             image ? 'w-[300px] overflow-auto' : 'w-full sm:w-[400px] gap-2 p-4 border-2 border-primary-border',
             collapsible ? '' : 'bg-primary-block'
         ]"
            @mouseleave="collapsible ? collapse($event, 'out') : null">
        <img v-if="image"
             :src="image"
             class="object-cover w-[300px] h-[200px]"
             @click="collapse($event)"
             @mouseenter="collapsible ? collapse($event, 'in') : null"
             />
        <div class="flex flex-col gap-2"
             :class="[image ? 'flex flex-col gap-2 p-2' : '', collapsible ? 'collapsible-container bg-primary-block' : '']">
            <Icon v-if="icon" :name="icon" class="text-primary" size="48"/>
            <div v-if="startdate" class="bg-primary-border rounded-full py-1 px-3 w-max">
                <span class="text-sm">{{ startdate }}<template v-if="enddate"> - {{ enddate }}</template></span>
            </div>
            <h3 v-if="title" class="text-3xl">{{ title }}</h3>
            <a v-if="locationtext && locationlink" class="text-primary w-max" :href="locationlink" target="_blank"
               rel="referrer">
                {{ locationtext }}
                <Icon name="ri:external-link-fill"/>
            </a>
            <span v-else-if="locationtext" class="text-primary">{{ locationtext }}</span>
            <p v-if="description">{{ description }}</p>
            <ul v-if="bullets" class="list-disc pl-5">
                <li v-for="bullet in bullets">
                    {{ bullet }}
                </li>
            </ul>
            <a v-if="bottomtext && bottomtextlink"
               class="text-primary"
               :href="bottomtextlink"
               target="_blank"
               rel="referrer"
            >
                {{ bottomtext }}
                <Icon name="ic:round-arrow-right-alt"/>
            </a>
        </div>
    </div>
</template>

<script setup>
const COLLAPSED_CLASS_NAME = "collapsed"
const collapse = (event, action = "") => {
    if (action === "in") {
        const classList = event.srcElement.nextSibling.classList
        if (!classList.contains(COLLAPSED_CLASS_NAME)) {
            classList.add(COLLAPSED_CLASS_NAME)
        }
    }
    else if (action === "out") {
        const classList = event.srcElement.getElementsByClassName(COLLAPSED_CLASS_NAME)[0].classList
        if (classList.contains(COLLAPSED_CLASS_NAME)) {
            classList.remove(COLLAPSED_CLASS_NAME)
        }
    }
    else if (action === "") {
        const classList = event.srcElement.nextSibling.classList
        if (classList.contains(COLLAPSED_CLASS_NAME)) classList.remove(COLLAPSED_CLASS_NAME)
        else classList.add(COLLAPSED_CLASS_NAME)
    }
}
</script>

<script>
export default {
    name: "Card",
    props: [
        "image",
        "startdate",
        "enddate",
        "title",
        "locationtext",
        "locationlink",
        "description",
        "bullets",
        "bottomtext",
        "bottomtextlink",
        "collapsible",
        "icon"
    ]
}
</script>

<style scoped>
.collapsible-container:not(.collapsed) {
    @apply hidden
}
</style>