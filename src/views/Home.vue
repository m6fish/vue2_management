<template>
  <div class="home">
    <el-container>
        <Aside :isFolded="isFolded"/>
        <el-container class="content">
            <Header :isFolded.sync="isFolded"/>
            <Main/>
        </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>

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
    },
    data () {
        return {
            isFolded: false
        }
    },
    methods: {
    }
}
</script>
