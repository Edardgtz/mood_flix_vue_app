<template>
  <div class="home">
    <div class="header" style="font-size: 50vw">
      <h1 class="home_title" style="font-family: kust ;">
       Mood Flix
      </h1>
    </div>
    <!-- <h1 class="font_input" style="font-family: kust">Describe What you're in the mood for. use single words or write a sentence. The more descriptive the better.</h1> -->
    <form>
      <input class="fix"
      type="text"
      v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" 
      v-model="user_input" 
      placeholder="Enter the types of things you would like to see" style="font-family: kust">
      <div class="mood_input" style="font-family: kust"><button type="submit" @click.stop.prevent="submit()">Find Movies</button></div>
      <!-- \<button>Lean In</button> -->
    </form>
    <div class="art_credit">Photo by Steve Johnson on Unsplash</div>
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
      user_input: "",
    };
  },
  created: function () {
    console.log("in created...");
  },
  methods: {
    submit() {
      this.$router.push(`/titles/index?user_input=${this.user_input}`);
    },
  },
};
</script>
