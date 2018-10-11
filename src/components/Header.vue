<template>
<div>
    <el-menu title="SHU Enactus Club" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <li class="el-menu-item mb-2" role="menuitem"> <a href="/"><img src="../assets/home-logo.png" class="nav-logo"/></a></li>
        <el-menu-item index="1" class="title" active="true">Seton Hill University Enactus Club</el-menu-item>
        <el-menu-item index="2">About Us</el-menu-item>
        <el-menu-item index="3">Enactus Fun Run</el-menu-item>
        <!-- <el-menu-item index="4">Hat Project</el-menu-item>
        <el-menu-item index="5">Women's Wear Drive</el-menu-item> -->
    </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                activeIndex: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                this.activeIndex = key
                switch(this.activeIndex){
                    case '1':
                        this.$router.push('/')
                        break
                    case '2':
                        this.$router.push('/about')
                        break
                    case '3':
                        this.$router.push('/funrun')
                        break
                    case '4':
                        this.$router.push('/hatproject')
                        break
                    case '5':
                        this.$router.push('/wwd')
                        break
                    default:
                        this.$router.keyPath('Home')
                }
            }
        }
    }
</script>

<style scoped>
    .title {
        font-size: 1.5em;
        color: #2c3e50 !important;
    }
    .nav-logo {
        vertical-align: top;
        width: 96px;
        height:40px;
    }
</style>