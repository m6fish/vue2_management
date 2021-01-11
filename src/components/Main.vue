<template>
    <el-main class="main">
        <div>Breadcrumb</div>
        <transition name="fade-transform" mode="out-in">
            <router-view />
        </transition>
    </el-main>
</template>

<style lang="scss" scoped>
@import '@/css/mainTheme/mixin.scss';
.main {
    background-color: $main-bg;
}
</style>

<script>
export default {
    name: 'Main'
}
</script>
