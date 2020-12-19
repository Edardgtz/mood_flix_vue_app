<template>
  <div class="titles-index">
    <h1>You're Movies</h1>
      <div v-for="title in titles">
        <!-- <div class="card mb-3">
          <img v-bind:src="title.images" v-bind:alt="title.title" />
          <div class="card-body">
            <h5 class="card-title">{{ title.title }}</h5>
            <p class="card-title">Rating: {{ title.rating }}<p/>
            <p class="card-title">Plot: {{title.plot}}</p>
            <p class="card-title">Run Time: {{ title.run_time }}</p>
            <p class="card-title">Release Date: {{ title.year }}</p>
            <p class="card-title">Movie Rating: {{ title.movie_rating }}</p>
          </div>
        </div> -->
      <div class="card" style="width: 75%;">
        <img v-bind:src="title.images" v-bind:alt="title.title" />
        <div class="card-body">
          <h5 class="card-title">{{ title.title }}</h5>
          <p class="card-title">Rating: {{ title.rating }}<p/>
          <p class="card-title">Plot: {{title.plot}}</p>
          <p class="card-title">Run Time: {{ title.run_time }}</p>
          <p class="card-title">Release Date: {{ title.year }}</p>
          <p class="card-title">Movie Rating: {{ title.movie_rating }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      titles: [],
      mood: "",
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
        .get(`/api/movies?mood=${this.$route.query.mood}`)
        .then((response) => {
          console.log(response.data);
          this.titles = response.data;
        });
    },
  },
};
</script>