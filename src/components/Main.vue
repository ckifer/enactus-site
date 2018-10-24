<template>
    <b-container fluid>
        <h2 class="text-center mt-1 mb-5" style="font-size: 1.7em">{{ text }}</h2>
        <b-row class="align-items-center">
            <b-col md="6" class="mx-auto" style="margin-bottom: 5em">
                    <img src="../assets/home-logo.png" alt="Image" class="image-fluid">
                
            </b-col>
            <b-col md="6" class="mt-4">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/4Z9SMG30WXw?modestbranding=1;controls=0;showinfo=0;rel=0;fs=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>                      
                </div>
            </b-col>
        </b-row>
    </b-container>
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
    .image-fluid {
        max-width: 100%;
        height: auto;
    }
    

</style>