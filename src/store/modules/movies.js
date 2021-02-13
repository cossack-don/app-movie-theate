import IDs from "@/store/mock-static-videos/list-videos";
import axios from "@/plagins/axios";

function serializeResponse(movies) {
    return movies.reduce((acc, movie) => {
      acc[movie.imdbID] = movie;
      return acc;
    }, {});
  }

const moviesStore = {

    namespaced: true,
// START state
    state: {
        
        // все 250 фильмов IDs
        top250IDs: IDs,
        // на странице 12 видео
        moviesPerPage: 12,
        // 1-я страница по умолчанию
        correntPage: 1
    },
// END state

// START GETTERS
    getters: {
        // от и до
        slicedIDs:({ top250IDs }) => ( from, to ) => top250IDs.slice( from, to ),

        correntPage:({ correntPage }) => correntPage,

        moviesPerPage:({ moviesPerPage }) => moviesPerPage
    },
// END GETTERS


    mutations: {},

// START actions    
    actions: {
        async fetchMovies({ getters }) {
           
            const { correntPage, moviesPerPage, slicedIDs } = getters;
            // from это индекс стр 
            // получаем 12 видео итемов
            const from = correntPage * moviesPerPage - moviesPerPage;
            const to = correntPage * moviesPerPage;
            const moviesToFetch = slicedIDs( from, to );
            // console.log(moviesToFetch);

            // получаем массив промисов request
            const requests = moviesToFetch.map( id => axios.get(`/?i${id}`));
            const response = await Promise.all(requests);

            const movies = serializeResponse(response);
            console.log(movies);

        }
    }
// END actions
};

export default moviesStore