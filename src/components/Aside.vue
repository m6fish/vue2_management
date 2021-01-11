<template>
    <el-aside class="aside">
        <div class="icon-area">LOGO</div>
        <div class="menu">
            {{isFolded}}
        </div>
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
    name: 'Aside',
    props: {
        isFolded: Boolean // 控制側邊展開縮合
    },
    data () {
        return {
        }
    }
}
</script>
