<template>
    <el-aside class="aside" :width="getAsideWidth">
        <div class="aside-logo">
            <i>LOGO</i>
            <span v-if="!isFolded">後台管理中心</span>
        </div>

        <el-menu
            :collapse="isFolded"
            :default-active="$route.path"
            router
        >
            <el-menu-item v-for="({name, path, icon, children}) in getMenuList" :key="name">
                <!-- 沒有子選單 -->
                <el-menu-item v-if="!children" :index="path">
                    <i>{{icon}}</i>
                    <template v-slot:title>{{name}}</template>
                </el-menu-item>
                <!-- 有子選單 -->
                <el-submenu v-else>
                    <template v-slot:title>{{name}}</template>
                    <el-menu-item
                        v-for="{name: subMenuName, path: subMenuPath} in children"
                        :index="`${path}/${subMenuPath}`"
                        :key="subMenuName">{{subMenuName}}</el-menu-item>
                </el-submenu>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<style lang="scss" scoped>
@import '@/css/mainTheme/mixin.scss';
.aside {
    transition: all 0.2s;
    .aside-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: $header-height;
        background-color: $header-bg;
        color: white;
    }
}
</style>

<script>
export default {
    name: 'Aside',
    props: {
        isFolded: Boolean // 控制側邊展開縮合
    },
    computed: {
        // 取得側邊menu寬度
        getAsideWidth () {
            return `${this.isFolded ? 64 : 200}px`
        },
        // 取得側邊menu router
        getMenuList () {
            const { routes } = this.$router.options
            const homeRouter = routes.find(({ name }) => name === 'Home') || {}

            return homeRouter.children || []
        }
    }
}
</script>
