<template>
    <div>
        <el-row>
            <h2>About Us</h2>
              <el-col :span="24" class="">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="Mission" name="1">
                <h4>
                The SHU Enactus club creates community activites and funraisers for the Greensburg, PA areas. placeholder text! Insert images and all sorts of other cool stuff.
                </h4>
                    </el-collapse-item>
                    <el-collapse-item title="The Team" name="2">
                <img src="../assets/team.jpg" alt="" class="team">
                <h4>Melissa, Steele, Bailey, Coltin, Zak, Sebastian, Kaitlyn, Jordan, and many more!</h4>
                    </el-collapse-item>
                    <el-collapse-item title="Contact Us" name="3">
                        <h4>Email</h4> 
                        <p><a href="mailto:enactus@setonhill.edu">enactus@setonhill.edu</a></p>
                        <p><a href="mailto:s.eckenrode@setonhill.edu">s.eckenrode@setonhill.edu</a></p>
                        <h4>Phone</h4>
                        <p>412-303-8012</p>
                    </el-collapse-item>
                </el-collapse>
                <h4>Learn more at the <a href="https://enactus.org" target="_blank">official Enactus website!</a></h4>
            </el-col>

        </el-row>

    </div>
</template>

<script>
    export default {
        name: 'About',
        data: function(){
            return {
                activeNames: ['1'],
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>
    .image {
        max-width: 100%;
    }
    .team{
        height: 350px;
        width:auto;
    }
</style>