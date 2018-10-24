<template>
    <b-container fluid>
        <b-row>
            <b-col cols="4"></b-col>
            <b-col cols="4">
                <h2 class="mb-3">Sign Up</h2>
                <a href="https://setonhill.campuslabs.com/engage/submitter/form/start/230974" target="_blank"
                    class="btn btn-danger btn-lg btn-block mb-3" role="button">Sign up for the 2018 Fun Run on Shine!</a>
            </b-col>
            <b-col cols="4"></b-col>
        </b-row>
        <b-row class="text-center">
            <b-col cols="12">
                <h2 class="mb-3">Information</h2>
            </b-col>                           
        </b-row>
        <b-row>
            <b-col cols="2"></b-col>
            <b-col cols="8" class="image-fluid" style="overflow: auto; max-height: 400px">
                <img class="image-fluid" src="../assets/fun run poster.jpg" alt="">
            </b-col>
            <b-col cols="2"></b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <hr>
                <h2 style="">Previous Fun Runs</h2>
                <h3 style="">2017</h3>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="" cols="6" style="margin-top: 2em">   
                <img class="image-fluid" src="../assets/Fun Run t-shirt backs.png" alt="">      
            </b-col>
            <b-col class="" cols="6" style="margin-top: 2em">   
                <img class="image-fluid" src="../assets/shirtDesign.png" alt="">      
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
    export default {
        name: 'Fun-Run'
    }
</script>

<style scoped>
    img {
        width: 100%;
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