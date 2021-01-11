<template>
    <el-header class="header">
        <!-- 側邊展開 -->
        <div class="header-title" @click="foldAside">
            <span v-if="isFolded">UnFold</span>
            <span v-else>Fold</span>
        </div>
        <div class="header-menu">
            <el-menu mode="horizontal" class="header-menu-list">
                <el-menu-item index="1">Setting</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">User</template>
                    <el-menu-item index="2-1">change password</el-menu-item>
                    <el-menu-item index="2-2">Logout</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>

    </el-header>
</template>

<style lang="scss" scoped>
@import '@/css/mainTheme/mixin.scss';
.header {
    display: flex;
    align-items: center;

    .header-title {
        width: 50px;
    }

    .header-menu {
        width: 100%;
        .header-menu-list {
            float: right;
        }
    }
}
</style>

<script>
export default {
    name: 'Header',
    props: {
        isFolded: Boolean
    },
    data () {
        return {}
    },
    methods: {
        foldAside () {
            this.$emit('update:isFolded', !this.isFolded)
        }
    }
}
</script>
