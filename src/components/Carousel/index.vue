<template>
  <div class="dynamic-container">
    <div class="cover-photo">
      <img src="@/assets/spiderman.jpg" alt="" />

      <div class="label-image">
        <h1>Amazing Spiderman 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima soluta
          dignissimos eveniet corporis illo aperiam, natus cumque sunt veniam
          cum suscipit dolorem ex eum distinctio, enim temporibus vel, ducimus
          tempore.
        </p>
        <div class="action-button">
          <span class="play"><i class="fa-solid fa-play"></i></span>
          <span><i class="fa-regular fa-heart"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselMovie",
};
</script>

<style lang="scss" scoped>
.dynamic-container {
  width: 100%;
  height: auto;

  .cover-photo {
    width: 100%;
    height: 600px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 20px 2px #1b1b1b;
    border-radius: 20px;

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
      border-radius: 20px;
      left: 0;
      top: 0;
      position: absolute;
    }

    .label-image {
      width: 100%;
      height: auto;
      position: absolute;
      z-index: 10;
      color: #d2d2d2;
      bottom: 0px;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 20px;
      background: rgb(33, 35, 40);
      background: rgb(33, 35, 40);
      background: rgb(33, 35, 40);
      background: linear-gradient(
        180deg,
        rgba(33, 35, 40, 0) 0%,
        rgba(0, 0, 0, 1) 79%
      );
      p {
        width: 40%;
        height: auto;
        font-size: 14px;
        font-weight: 300;
      }
      .action-button {
        width: 20%;
        height: auto;
        margin: 30px 0;

        & span {
          width: auto;
          height: auto;
          color: #d2d2d2;
          font-size: 24px;
          cursor: pointer;

          i {
            padding: 10px 40px;
            border-radius: 10px;
            margin-right: 20px;
          }

          i.fa-play {
            background: rgb(0, 0, 0);
            border: 1px solid orange;
          }

          i:hover {
            color: orange;
          }
        }
      }
    }
  }
}
</style>
