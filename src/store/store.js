import { createStore } from "vuex";
import CryptoJS from "crypto-js";

const BASE_URL = "http://gateway.marvel.com/v1/public/comics";
const timestamp = Date.now().toString();
const privateKey = "e44e8d1e577b6bb7ea8a470f8163a43e858ac0cc";
const publicKey = "122f4337a2079d90e2ad8473b2b9845a";
const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();

const store = createStore({
  state() {
    return {
      movies: [],
      isOpenModal: false,
      selectedMoviesCard: [],
      favMovie: [],
    };
  },
  mutations: {
    fetchMarvels(state) {
      fetch(
        `${BASE_URL}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
      ).then((res) =>
        res.json().then((response) => {
          state.movies = response.data.results;
        })
      );
    },
  },
  getters: {
    getMarvelCharacters: (state) => () => {
      return state.movies;
    },

    handleModal: (state) => (payload) => {
      state.isOpenModal = !state.isOpenModal;
      state.selectedMoviesCard = payload;
    },

    addFavouriteMovie: (state) => (payload) => {
      const oldLength = state.favMovie.length;
      state.favMovie.push(payload);
      state.favMovie = [...new Set(state.favMovie)];
      const newLength = state.favMovie.length;

      if (oldLength === newLength) {
        const removeItem = state.favMovie.filter(
          (item) => item.id !== payload.id
        );
        state.favMovie = removeItem;
      }
    },

    getStoreVariable: (state) => {
      return {
        selectedMoviesCard: state.selectedMoviesCard,
        isOpenModal: state.isOpenModal,
      };
    },
  },
});

export default store;
