<template>
    <el-main class="main">
        <div>Breadcrumb</div>
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </el-main>
</template>

<style lang="scss" scoped>
.main {
    background-color: #e8e5e5;
}
</style>

<script>
export default {
    name: 'Main'
}
</script>
