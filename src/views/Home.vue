<template>
  <div class="home">
    <h1>Enter Mood</h1>
    <form>
      <input type=text v-model="mood" placeholder="Type Mood Here">
      <br><button type="submit" @click.stop.prevent="submit()">Match Mood</button>
      <!-- \<button>Lean In</button> -->
    </form>
  </div>
</template>
<style>
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      mood: "",
    };
  },
  created: function () {
    console.log("in created...");
  },
  methods: {
    submit() {
      this.$router.push(`/titles/index?mood=${this.mood}`);
    },
  },
};
</script>
