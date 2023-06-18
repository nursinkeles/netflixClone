<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="close-button" @click="handleModal">X</div>
      <div class="image-cover">
        <img :src="path" alt="" />
      </div>
      <div class="content">
        <h3>{{ selectedMovie.title }}</h3>
        <p v-if="selectedMovie.description?.length > 0">
          {{ selectedMovie.description }}
        </p>
        <p v-else>Açıklama alanı boş bir alandır.</p>

        <h3>Creators</h3>
        <div v-for="item in selectedMovie.creators.items" :key="item.name">
          Name:{{ item?.name }}, Role:{{ item?.role }}
        </div>
      </div>

      <div class="action-button">
        <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
        <span><i class="fa-solid fa-bookmark"></i></span>
      </div>

      <div class="video-player">
        <img src="@/assets/video-player.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieModal",
  props: ["selectedMovie"],
  data() {
    return {
      path: this.selectedMovie.thumbnail.path + ".jpg",
    };
  },
  methods: {
    handleModal() {
      this.$store.getters.handleModal(this.selectedMovie);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100%;
  height: 100vh;
  background: rgba(51, 51, 51, 0.788);
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  .modal-container {
    width: 50%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 20px 5px #1a1a1a;
    overflow: hidden;
    background-size: cover;
    background-color: #f9f9f9;
    padding: 40px 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;

    .close-button {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 20px;
      right: 15px;
      cursor: pointer;
    }

    .image-cover {
      width: 200px;
      height: 300px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px 3px #1b1b1b60;

      & img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }

    .video-player {
      width: 96%;
      height: auto;
      margin: 10px 0;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;

        border-radius: 10px;
      }
    }
    .content {
      width: 70%;
      height: auto;
      font-size: 14px;
      line-height: 22px;
      font-weight: 300;
    }

    .action-button {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 20px;
      color: rgb(63, 63, 63);

      & span {
        margin: 0 10px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .modal-container {
    width: 90% !important;
    height: 500px !important;
    overflow-y: scroll !important;
    .image-cover {
      width: 95% !important;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
