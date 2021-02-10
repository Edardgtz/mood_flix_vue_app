<template>
  <div class="titles-index">
    <h1 class="header index_header">Your Movies</h1>
    <div v-bind:class="{ldsRipple:ldsStatus}"><div></div><div></div></div>
      <div v-for="title in titles">
        <div class="card " style="width: 75%;">
          <div class="card-body" >
            <h1 class="card-title card_title">{{ title.title }}</h1>
          <img v-bind:src="title.images" v-bind:alt="title.title" class="card-img-top img-fluid">
            <p class="card-title">Rating: {{ title.rating }}<p/>
            <p class="card-title">Plot: {{title.plot}}</p>
            <p class="card-title">Run Time: {{ title.run_time }}</p>
            <p class="card-title">Release Date: {{ title.year }}</p>
            <p class="card-title">Movie Rating: {{ title.movie_rating }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
      </div>
  </div>
</template>
<style>
.ldsRipple {
  display: inline-block;
  position: relative;
  width: 80px;
  /* height: 80px; */
}
.ldsRipple div {
  position: absolute;
  border: 5px solid rgb(0, 0, 2);
  opacity: 1;
  border-radius: 60%;
  animation: ldsRipple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.ldsRipple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes ldsRipple {
  0% {
    top: 50px;
    left: 50px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 100px;
    height: 100px;
    opacity: 1;
  }
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      titles: [],
      mood: "",
      ldsStatus: true,
    };
  },
  created: function () {
    // console.log(this.$route);
    this.titlesIndex();
  },
  methods: {
    titlesIndex: function () {
      console.log("in Index...");
      console.log(this.$route.query);
      axios
        .get(`/api/movies?user_input=${this.$route.query.user_input}`)
        .then((response) => {
          console.log(response.data);
          this.titles = response.data;
          this.ldsStatus = false;
        });
    },
  },
};
</script>