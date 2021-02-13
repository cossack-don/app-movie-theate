import axios from "@/plagins/axios";

const moviesStore = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async fetchMovies(context) {
            console.log(context);
            const response = await axios.get('/?i=tt0111161');
            console.log(response);
            // http://www.omdbapi.com/?apikey=[yourkey]&
            // tt0111161 ключ
        }
    }
};

export default moviesStore