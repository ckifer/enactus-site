<template>
    <div>
        <section class="main-section">
            <h1 class="centered">{{ text }}</h1>
            <el-col :span="24" class="">
                <el-carousel :interval="5000" type="" height="600px">
                <el-carousel-item v-for="item in items" :key="item.index">
                    <img class="image" :src="require(`@/assets/${item.img}`)" alt="">
                </el-carousel-item>
                </el-carousel>
            </el-col>
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
        max-height: 100%;
    }

</style>