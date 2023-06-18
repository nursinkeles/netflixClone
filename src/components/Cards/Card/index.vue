<template>
  <div class="card">
    <img :src="path" alt="" @click="handleModal(movie)" />
    <div class="action-button">
      <h4>{{ movie.title }}</h4>
      <i class="fa-solid fa-play"></i>

      <i
        :class="{
          'fa-regular fa-heart': !isFav,
          'fa-solid fa-heart': isFav,
        }"
        @click="addFavMovie(movie), checkedFavList(movie)"
      ></i>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CardMovie",
  props: ["movie", "addFavMovie"],
  data() {
    return {
      path: this.movie.thumbnail.path + ".jpg",
      isFav: false,
    };
  },

  computed: {
    ...mapState(["favMovie"]),
  },

  methods: {
    handleModal(payload) {
      this.$store.getters.handleModal(payload);
    },
    checkedFavList(payload) {
      if (this.favMovie) {
        const checkedItem = this.favMovie.find(
          (item) => item.id === payload.id
        );
        this.isFav = checkedItem ? true : false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 22%;
  height: 450px;
  position: relative;
  margin-top: 30px;
  box-sizing: border-box;
  margin: 20px;
  box-shadow: 0 2px 20px 2px #1b1b1b60;
  border-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  & img {
    width: 100%;
    height: 448px;
    object-fit: cover;
    transition: 500ms;
  }

  .action-button {
    width: 100%;
    height: 85px;
    position: absolute;
    bottom: 0;
    background: rgb(33, 35, 40);
    background: linear-gradient(
      180deg,
      rgba(33, 35, 40, 0) 0%,
      rgba(0, 0, 0, 1) 79%
    );
    display: flex;
    padding: 50px 0;
    flex-wrap: wrap;
    justify-content: space-between;

    h4 {
      width: 100%;
      color: #f2f2f2;
      letter-spacing: 2px;
      font-weight: 300;
      font-size: 17px;
      margin-left: 20px;
    }

    i {
      color: #e6e6e6;
      margin: 0 20px;
      font-size: 20px;
    }
  }
}
</style>
