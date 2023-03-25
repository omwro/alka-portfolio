<template>
    <div class="flex flex-col gap-1 w-full sm:w-[300px]">
        <div class="flex flex-row gap-2 justify-between">
            <span>{{title}}</span>
            <span class="font-bold">{{percentile}}%</span>
        </div>
        <div class="bg-primary-gray rounded-full h-3 overflow-auto">
            <div class="bg-primary h-3" :style="{'width': percentile+'%'}"></div>
        </div>
        <div class="flex flex-row gap-2">
            <div v-for="tag in tags"
                 class="bg-primary rounded text-primary-background text-sm px-2 py-1">
                {{tag}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skill",
    props: ["title", "percentile", "tags"]
}
</script>