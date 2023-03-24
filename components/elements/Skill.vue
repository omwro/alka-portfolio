<template>
    <div class="flex flex-col gap-1 w-full sm:w-[300px]">
        <div class="flex flex-row gap-2 justify-between">
            <span>{{title}}</span>
            <span class="font-bold">{{percentile}}%</span>
        </div>
        <div class="bg-primary-gray rounded-full h-3 overflow-auto">
            <div class="bg-primary h-3" :style="{'width': percentile+'%'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skill",
    props: ["title", "percentile"]
}
</script>