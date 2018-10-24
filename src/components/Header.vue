<template>
<div>
    <b-navbar toggleable="md" type="light" variant="">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/" class="brand">
        <img src="../assets/home-logo.png" class="nav-logo "/>
    </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav class="">
                <h4 class="p-3">
                    <b-nav-item class="" href="#/">Seton Hill Enactus Club</b-nav-item>
                </h4>
                
                <b-nav-item class="p-3 mt-1" href="#/about">About Us</b-nav-item>
                <b-nav-item class="p-3 mt-1" href="#/funrun">Enactus Fun Run</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Header'
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
    .brand {
        transform: translateY(-15px);
    }
</style>