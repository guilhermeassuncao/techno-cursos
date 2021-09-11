<template>
    <div id="app">
        <Header />
        <router-view class="container"></router-view>
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
    font-family: "Avenir", Helvetica, Arial, sans-serif;
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

img {
    max-width: 100%;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.content {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 500px);
    grid-gap: 50px;
}

.v-enter {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
    transition: all 0.3s;
}

@media screen and (max-width: 800px) {
    .content {
        display: block;
    }
}
</style>
