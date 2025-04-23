<template>
    <div>
        <!-- 移除了原有的导航和标题，因为它们现在在布局组件中 -->
        <RouterView></RouterView>
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
/* 可以添加全局样式 */
</style>
