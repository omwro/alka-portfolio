<template>
    <div class="card flex flex-col rounded-lg w-full"
         :class="[
             image ? 'overflow-auto shadow self-start' : 'p-4 border border-primary',
             collapsible ? '' : 'bg-primary-block'
         ]"
         @mouseleave="collapsible ? collapse($event, 'out') : null">
        <nuxt-img v-if="image"
                  :src="image"
                  :alt="title + 'portfolio image'"
                  class="object-cover cursor-pointer relative"
                  @click="collapsible ? collapse($event, 'click') : null"
                  @mouseenter="collapsible ? collapse($event, 'in') : null"/>
        <div class="flex flex-col gap-2"
             :class="[
                 image ? 'flex flex-col gap-2 px-2' : '',
                 collapsible ? 'collapsible-container' : ''
                 ]">
            <Icon v-if="icon" :name="icon" class="text-primary" size="48"/>
            <div v-if="startdate" class="text-primary-background bg-primary rounded-full py-1 px-3 w-max">
                <span class="text-sm">{{ startdate }}<template v-if="enddate"> - {{ enddate }}</template></span>
            </div>
            <h3 v-if="title" class="text-3xl font-semibold">{{ title }}</h3>
            <a v-if="locationtext && locationlink" class="text-primary w-max hover:text-primary-light" :href="locationlink" target="_blank"
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
               class="text-primary w-max hover:text-primary-light"
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
const COLLAPSED_CLASS_NAME = "collapsed";
let mouseCollapse = false;
let clickCollapse = false;

const collapse = (event, action) => {
    // The collapse condition states
    if (action === "click") clickCollapse = !clickCollapse;
    else if (action === "in") mouseCollapse = true;
    else if (action === "out") mouseCollapse = false;

    // The target class list
    const el = event.srcElement;
    let classList = el.nextSibling.classList;
    if (action === "out" && el.getElementsByClassName(COLLAPSED_CLASS_NAME)[0]) {
        classList = el.getElementsByClassName(COLLAPSED_CLASS_NAME)[0].classList
    }

    // The collapse condition actions
    if (action === "click") {
        if (clickCollapse) openCollapse(classList)
        else closeCollapse(classList)
    }
    else if (mouseCollapse) openCollapse(classList)
    else if (!mouseCollapse && !clickCollapse) closeCollapse(classList)
}

const openCollapse = (classList) => {
    if (!classList.contains(COLLAPSED_CLASS_NAME)) {
        classList.add(COLLAPSED_CLASS_NAME)
    }
}
const closeCollapse = (classList) => {
    if (classList.contains(COLLAPSED_CLASS_NAME)) {
        classList.remove(COLLAPSED_CLASS_NAME)
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
.card {
    @screen md {
       width: calc(50% - 1rem);
    }
}
img {
    aspect-ratio: 16/9;
}
.collapsible-container {
    @apply ease-in-out duration-500 overflow-hidden bg-primary-background
}
.collapsible-container:not(.collapsed) {
    @apply h-0
}
.collapsible-container.collapsed {
    @apply h-full py-2
}
</style>