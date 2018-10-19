<template>
    <div>
        <el-row>
            <el-col :span="12" class="image">
                <h1>Information</h1>
                <img class="image" src="../assets/fun run poster.jpg" alt="">
            </el-col>
            <el-col :span="12" class="">
                <h1>Sign Up</h1>
            <div class="auto-resizable-iframe">
                <div>
                    <p>Sign Up Coming Soon...</p> 
                </div>
            </div>           
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <hr>
                <h1 style="font-size: 2em">Previous Fun Runs</h1>
                <h1 style="font-size: 1.5em">2017</h1>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="" :span="12" style="margin-top: 2em">   
                <img class="image" src="../assets/Fun Run t-shirt backs.png" alt="">      
            </el-col>
            <el-col class="" :span="12" style="margin-top: 2em">   
                <img class="image" src="../assets/shirtDesign.png" alt="">      
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

    .auto-resizable-iframe{
        max-width: 700px;
        margin: 0px auto;
    }

    .auto-resizable-iframe > div {
        position: relative;
        padding-bottom: 75%;
        height: 0px;
    }

    .auto-resizable-iframe iframe {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
</style>