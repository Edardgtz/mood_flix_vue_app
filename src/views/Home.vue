<template>
  <div class="home">
    <div class="header">
      <h1 class="title" style="font-family: kust">
        <font color="black">M</font>
        <font color="black">o</font>
        <font color="black">o</font>
        <font color="black">d</font>
        <font color="black">F</font>
        <font color="black">l</font>
        <font color="black">i</font>
        <font color="black">x</font>
      </h1>
    </div>
    <h1 class="font_input" style="font-family: kust">Enter Mood</h1>
    <form>
      <input class="fix"
      type="text"
      v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" 
      v-model="user_input" 
      placeholder="Describe what you're in the mood for!" style="font-family: kust">
      <div class="mood_input" style="font-family: kust"><button type="submit" @click.stop.prevent="submit()">Match Mood</button></div>
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
