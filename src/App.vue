<template>
    <div>
        <h1>Hello vue-router</h1>

        <section>
            section
        </section>

        <button @click="openPath('/')">open home</button>
        <button @click="openPath('/user/2')">open user</button>

        <nav>
            <RouterLink to="/">Go to Home</RouterLink>
            <RouterLink to="/about">Go to About</RouterLink>
            <RouterLink to="/user">Go to User</RouterLink>

            <RouterLink to="/user">
                <div style="width:100px;height:100px; background-color: deepskyblue;display: inline-flex;justify-content: center; align-items: center; border-radius: 8px;">
                    Go to User
                </div>
            </RouterLink>
        </nav>
        <main>
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
function openPath(path:string){
    router.push({
        path,
        query:{
            a:1,
            b:2
        }
    })
}
</script>

<style scoped>

</style>
