<template>
    <section class="w-full">
        <main class="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
            <slot></slot>
        </main>
    </section>
</template>

<script>
export default {
    name: "Section"
}
</script>
