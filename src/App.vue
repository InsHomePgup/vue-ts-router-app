<template>
    <div>
        <h1>Hello vue-router</h1>

        <section>
            section
        </section>

        <nav>
            <RouterLink to="/">Go to Home</RouterLink>
            <RouterLink to="/about">Go to About</RouterLink>
            <RouterLink to="/user">Go to User</RouterLink>
        </nav>
        <main>
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
