<template>
    <b-container fluid class="text-center">
        <b-row class="text-center">
            <h2>About Us</h2>
            <b-col cols="12" class="mt-3">
                 <div role="tablist">
                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.mission variant="light">
                            {{ menuInfo[0].title }}
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="mission" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <p class="card-text">
                            {{  menuInfo[0].text }}
                        </p>
                        </b-card-body>
                    </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.team variant="light">
                            {{ menuInfo[1].title }}
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="team" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <img src="../assets/team.jpg" class="image team" alt="">
                        <p class="card-text">
                            {{  menuInfo[1].text }}
                        </p>
                        </b-card-body>
                    </b-collapse>
                    </b-card>
                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.contact variant="light">
                            {{ menuInfo[2].title }}
                        </b-btn>
                    </b-card-header>
                    <b-collapse id="contact" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            {{  menuInfo[2].text }}
                            <h4>Phone</h4>
                            <p>412-303-8012</p>
                            <h4>Email</h4> 
                            <p><a href="mailto:enactus@setonhill.edu">enactus@setonhill.edu</a></p>
                            <p><a href="mailto:s.eckenrode@setonhill.edu">s.eckenrode@setonhill.edu</a></p>
                        </b-card-body>
                    </b-collapse>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'About',
        data: function(){
            return {
                menuInfo: [
                    {
                        title: "Our Mission",
                        text: "The Seton Hill University Enactus club aims to leverage entrepreneurial leadership and"
                                + " action to create a better, more sustainable world for us all."
                    },
                    {
                        title: "Our Team",
                        text: "Our team features some of the brightest college students at Seton Hill!"
                    },
                    {
                        title: "Contact Us",
                        text: ""
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .image {
        margin-bottom: 1em;
        max-width: 100%;
    }
    .team{
        height:400px;
        width: auto;
    }
    h2 {
        margin: 0 auto;
    }

    @media only screen and (max-width: 650px) {
        .team{
            height: auto;
        }
    }
</style>