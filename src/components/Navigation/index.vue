<template>
  <div class="logo">
    <img :src="require('@/assets/logo.png')" alt="" />
  </div>
  <div class="navigation-container">
    <div class="section-navigation">
      <h4>Menu</h4>
      <div class="nav-list">
        <div class="item-list">
          <i class="fa-regular fa-chess-queen"></i>
          <span>Browse</span>
        </div>
        <div class="item-list">
          <span class="counter-list">{{ favMovie.length }} </span>
          <i class="fa-regular fa-heart"></i>

          WatchList
        </div>
        <div class="item-list">
          <i class="fa-regular fa-calendar"></i>
          <span>Comming soon</span>
        </div>
      </div>
      <h4>General</h4>
      <div class="nav-list">
        <div class="item-list">
          <i class="fa-regular fa-sun"></i>
          <span>Settings</span>
        </div>
        <div class="item-list">
          <i class="fa-regular fa-face-frown"></i>
          <span>Log out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation-Bar",
  props: ["favMovie"],
};
</script>

<style lang="scss" scoped>
.logo img {
  width: 95px;
  position: absolute;
  top: 55px;
}
.navigation-container {
  width: 15%;
  height: auto;
  box-sizing: border-box;

  .section-navigation {
    width: 100%;
    height: auto;
    color: #3c3f4c;
    margin-top: 50%;

    h4 {
      font-weight: 700;
      font-size: 12px;
    }
    .nav-list {
      width: 100%;
      height: auto;
      margin-bottom: 30px;

      .item-list {
        padding: 10px 0;
        box-sizing: border-box;
        font-weight: 300;
        font-size: 15px;
        position: relative;

        & .counter-list {
          position: absolute;
          top: 0;
          left: 10px;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          padding: 5px;
          display: flex;
          justify-content: center;
          font-size: 12px;
          align-items: center;
          background: rgba(255, 166, 0, 0.904);
          color: #fff;
        }

        & i {
          margin-right: 15px;
        }

        &:first-child {
          color: #d2d2d2;

          i {
            color: orange;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .navigation-container {
    display: none;
  }
  .logo img {
    position: absolute;
    width: 20%;
    top: 55px;
  }
}
</style>
