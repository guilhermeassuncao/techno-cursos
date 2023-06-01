<template>
    <div>
        <div v-if="loading">
            <Loading />
        </div>
        <transition>
            <div v-if="api">
                <div>
                    <h1>{{ api.titulo }}</h1>
                    <p>{{ api.descricao }}</p>
                </div>
                <ul class="classes-list">
                    <li v-for="curso in api.cursos" :key="curso.id">
                        <h2>
                            <router-link :to="{ name: 'curso', params: { curso: curso.id } }">
                                {{ curso.nome }} - {{ curso.totalAulas }} aulas | {{ curso.horas }} horas
                            </router-link>
                        </h2>
                        <p>{{ curso.descricao }}</p>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import fecthData from '@/mixins/fecthData.js';

export default {
    name: 'Cursos',
    mixins: [fecthData],
    created() {
        this.fetchDada('/cursos');
    },
};
</script>
<style scoped>
.classes-list li {
    margin-bottom: 40px;
}

.classes-list li {
    border-bottom: 1px solid #4b8;
    padding: 0.5rem 0;
}

.classes-list h2 a {
    color: #4b8;
}
</style>
