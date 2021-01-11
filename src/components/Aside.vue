<template>
    <el-aside class="aside">
        <div class="icon-area">LOGO</div>
        <div class="menu">456</div>
    </el-aside>
</template>

<style lang="scss" scoped>
@import '@/css/mainTheme/mixin.scss';
.aside {
    width: 200px;
    .icon-area {
        height: $header-height;
        background-color: $header-bg;
    }
}
</style>

<script>
export default {
    name: 'Aside'
}
</script>
