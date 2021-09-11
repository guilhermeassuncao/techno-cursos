<template>
    <div>
        <div v-if="loading">
            <Loading />
        </div>
        <transition>
            <div v-if="api">
                <h1>{{ api.titulo }}</h1>
                <p>{{ api.descricao }}</p>
                <ul>
                    <li>
                        <b>Email:</b>
                        {{ api.contato.email }}
                    </li>
                    <li>
                        <b>Telefone:</b>
                        {{ api.contato.telefone }}
                    </li>
                    <li>
                        <b>Endereço:</b>
                        {{ api.contato.endereco }}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import fecthData from "@/mixins/fecthData.js";

export default {
    name: "Contato",
    mixins: [fecthData],
    created() {
        this.fetchDada("/contato");
    },
};
</script>
<style scoped>
b {
    color: #4b8;
}

li {
    padding: 1rem 0;
}
</style>
