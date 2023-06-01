<template>
    <div>
        <div v-if="loading">
            <Loading />
        </div>
        <transition>
            <div>
                <div v-if="api" class="content">
                    <div>
                        <h1>{{ api.nome }}</h1>
                        <p>{{ api.descricao }}</p>
                        <h2>Aulas</h2>
                        <ul class="classes">
                            <li v-for="aula in api.aulas" :key="aula.id">
                                <router-link :to="{ name: 'aula', params: { aula: aula.id } }">
                                    {{ aula.nome }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <router-view></router-view>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import fecthData from '@/mixins/fecthData.js';

export default {
    name: 'Curso',
    props: ['curso'],
    mixins: [fecthData],
    created() {
        this.fetchDada(`/cursos/${this.curso}`);
    },
};
</script>

<style>
.classes li a {
    display: block;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background: white;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #4b8;
}

.classes li a.router-link-active {
    background: #4b8;
    color: white;
}
</style>
