<template>
    <div>
        <el-row>
            <el-col :span="12" class="image">
                <h1>Information</h1>
                <img class="image" src="../assets/fun run poster.jpg" alt="">
            </el-col>
            <el-col :span="12" class="">
                <h1>Sign Up</h1>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScmOBy-nkVrTUlK23PZsR0Yn-5jsVyv_RC2iUCT6HLzDV_dDA/viewform?embedded=true" 
                width="640" height="744" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>            
            </el-col>
            <el-col class="" :span="24" style="margin-top: 2em">   
                <img class="image" src="../assets/Fun Run t-shirt backs.png" alt="">      
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: 'Fun-Run'
    }
</script>

<style scoped>
    .image {
        width: 600px;
        height: auto;
    }
</style>