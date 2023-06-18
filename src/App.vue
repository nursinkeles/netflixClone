<template>
  <div class="app-wrapper">
    <Navigation :favMovie="favMovie" />

    <div class="main-container">
      <div class="top-header">
        <span> <i class="fa-solid fa-magnifying-glass"></i></span>
        <span> <i class="fa-regular fa-user"></i></span>
      </div>
      <Carousel />
      <Cards
        :movies="getMarvelCharacters"
        :addFavMovie="addFavMovie"
        :removeFavMovie="removeFavMovie"
      />
    </div>

    <Modal v-if="isOpenModal" :selectedMovie="selectedMoviesCard" />
  </div>
</template>

<script>
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { Cards, Carousel, Navigation, Modal },

  mounted() {
    this.$store.commit("fetchMarvels");
  },

  computed: {
    getMarvelCharacters() {
      return this.$store.getters.getMarvelCharacters();
    },

    ...mapState(["isOpenModal", "selectedMoviesCard", "favMovie"]),
  },

  methods: {
    addFavMovie(payload) {
      return this.$store.getters.addFavouriteMovie(payload);
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  width: 100%;
  height: auto;
  font-family: "Roboto";
  background: #fff;

  padding: 30px;
  box-sizing: border-box;

  .app-wrapper {
    width: 100%;
    height: auto;
    display: flex;

    .main-container {
      width: 85%;
      height: auto;

      .top-header {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        & span {
          width: auto;
          color: #a1a1a1;
          font-weight: 300;
          display: flex;
          align-items: center;
          padding: 15px 0;
          border-radius: 10px;
          font-size: 14px;

          & i {
            width: 35px;
            height: 35px;
            display: flex;
            font-size: 16px;
            justify-content: center;
            align-items: center;
            color: #d2d2d2;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .main-container {
    width: 100% !important;
  }
}
</style>
