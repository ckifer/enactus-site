<template>
    <div>
        <section class="main-section">
            <h1 class="centered" style="font-size: 1.7em">{{ text }}</h1>
            <el-row>
                <el-col :span="14">
                    <div class="auto-resizable-iframe">
                        <div>
                            <iframe src="https://www.youtube-nocookie.com/embed/4Z9SMG30WXw?modestbranding=1;controls=0;showinfo=0;rel=0;fs=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>                      
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <img src="../assets/home-logo.png" alt="" class="image">
                </el-col>
                <el-col :span="1" style="opacity: 0">-</el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data: function(){
            return{
                text: 'Students Taking Entrepreneurial Action To Create A Better World For Us All',
                items: [
                    {
                        index: 1,
                        img: 'Enactus Models.jpg'
                    },
                    {
                        index: 2,
                        img: 'steele.jpg'
                    },
                    {
                        index: 3,
                        img: 'Enactus Fall Fun Run Ad.jpg'
                    },
                    {
                        index: 4,
                        img: 'FunRunLogo.jpg'
                    },
                    {
                        index: 5,
                        img: 'enactus.png'
                    }, 
                    {
                        index: 6,
                        img: 'steeleDonation.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .main-section {
        height: 35rem;
        background-size: contain;
        display: block;
        text-align: center;
    }

    .image {
        height: auto;
        max-width: 100%;
        transform: translateY(40%); 
    }

    .auto-resizable-iframe{
        max-width: 650px;
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
        height: 75%;
        transform: translateY(5%); 
    }

</style>