<template>
  <div class="home">
    <Header/>
    <el-container>
        <el-container class="content">
            <Aside/>
            <Main/>
        </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>

.header {
  background-color: #0fb0ef;
}
.content {
  height:calc(100vh - 50px);
}

</style>

<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

export default {
    name: 'Home',
    components: {
        Aside,
        Header,
        Main
    }
}
</script>
