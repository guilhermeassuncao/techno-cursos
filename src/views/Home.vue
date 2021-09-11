<template>
    <div>
        <div v-if="loading">
            <Loading />
        </div>
        <transition>
            <div v-if="api" class="content">
                <div>
                    <h1>Sobre a {{ api.titulo }}</h1>
                    <p>{{ api.descricao }}</p>
                    <router-link class="home-btn" tag="button" to="/cursos">Cursos</router-link>
                    <div>
                        <h2>Avaliações</h2>
                        <ul>
                            <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                                <p class="home-name">{{ avaliacao.nome }}</p>
                                <p>{{ avaliacao.descricao }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="home-img">
                    <img src="@/assets/aprender.png" alt="Aprenda Web Design" />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import fecthData from "@/mixins/fecthData.js";

export default {
    name: "Home",
    mixins: [fecthData],
    created() {
        this.fetchDada("/home");
    },
};
</script>

<style scoped>
li {
    border-bottom: 1px solid #4b8;
    padding: 0.5rem 0;
}

.home-name {
    color: #4b8;
    font-weight: bold;
    font-size: 1.1rem;
}

.home-btn {
    border: none;
    background: #4b8;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    padding: 15px 40px;
    font-size: 1rem;
    margin-top: 10px;
    margin-bottom: 40px;
    box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
    font-family: "Avenir", Arial, Helvetica, sans-serif;
}

.home-img {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 720px) {
    .home-img {
        display: block;
        margin: 5rem 0;
        height: 50vh;
    }
}
</style>
