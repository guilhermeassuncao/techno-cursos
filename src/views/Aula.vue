<template>
    <div>
        <div v-if="loading">
            <Loading />
        </div>
        <transition>
            <div>
                <div v-if="api">
                    <h2>{{ api.nome }}</h2>
                    <div class="class-video">
                        <iframe
                            :src="`https://www.youtube.com/embed/${api.youtube}`"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import fecthData from "@/mixins/fecthData.js";

export default {
    name: "Aula",
    props: ["aula"],
    mixins: [fecthData],
    created() {
        this.fetchDada(`/aulas/${this.aula}`);
    },
    beforeRouteUpdate(to, from, next) {
        this.fetchDada(`/aulas/${to.params.aula}`);
        next();
    },
};
</script>

<style scoped>
.class-video {
    position: relative;
    padding-bottom: 56.25%;
}

.class-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 720px) {
    h2 {
        margin-top: 3rem;
    }
}
</style>
