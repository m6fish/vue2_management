<template>
  <div class="home">
    <el-container>
        <Aside/>
        <el-container class="content">
            <Header/>
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
  height:calc(100vh);
  flex-direction: column;
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
