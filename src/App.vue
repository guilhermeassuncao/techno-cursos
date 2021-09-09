<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    components: {
        Header,
    },
};
</script>

<style>
body {
    margin: 0;
    font-family: "jet";
    color: #234;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    font-weight: bold;
    text-decoration: none;
    color: #234;
}


</style>
