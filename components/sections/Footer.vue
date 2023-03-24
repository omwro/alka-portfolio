<template>
    <footer class="text-center p-2 bg-primary-text text-primary-background">
        <small>&copy; Copyright {{currentYear}} Rauf Kaya. All Rights Reserved</small>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>

</style>