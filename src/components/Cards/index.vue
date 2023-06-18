<template>
  <div class="card-container">
    <h2>Movies</h2>
    <Card
      v-for="item in movies"
      :key="item.id"
      :movie="item"
      :addFavMovie="addFavMovie"
    />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  name: "MovieCards",
  props: ["movies", "addFavMovie"],
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 100%;
  height: auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    color: #3c3f4c;
    font-weight: 300;
    letter-spacing: 2px;
    padding: 15px 0;
    border-bottom: 1px solid #c9c9c9;
  }
}
@media screen and (max-width: 600px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    .card {
      width: 100%;
      margin: 10px 0;
    }
  }
}
</style>
