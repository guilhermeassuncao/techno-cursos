export default {
    data() {
        return {
            loading: true,
            api: null,
        };
    },
    methods: {
        fetchDada(url) {
            url = `/api${url}.json`;

            this.loading = true;
            this.api = null;
            
            fetch(url)
                .then((r) => r.json())
                .then((r) => {
                    setTimeout(() => {
                        this.api = r;
                        this.loading = false;
                    }, 500);
                });
        },
    },
};
