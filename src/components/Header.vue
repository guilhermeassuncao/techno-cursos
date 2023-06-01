<template>
    <header>
        <nav>
            <div class="header-brand">
                <router-link to="/">Techno</router-link>
            </div>
            <ul>
                <li><router-link to="/cursos">Cursos</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
header {
    background: #234;
}

.header-brand {
    flex: 1;
}

.header-brand a {
    color: white;
    font-size: 1.25rem;
}

nav {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-content: space-between;
    padding: 20px;
}

nav ul li {
    display: inline-block;
}

nav li a {
    padding: 0 10px;
    margin-left: 10px;
    color: white;
}

nav li a.router-link-exact-active {
    color: #4b8;
}
</style>
