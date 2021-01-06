<template>
  <div class="home">
    <div class="header"><h1 class="title"><font color="yellow">M</font><font color="blue">o</font><font color="green">o</font><font color="red">d</font> <font color="yellow">F</font><font color="blue">l</font><font color="green">i</font><font color=red>x</font></h1></div>
    <h1 class="font_input">Enter Mood</h1>
    <form>
      <input class="fix"
      type="text"
      v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" 
      v-model="user_input" 
      placeholder="Describe what your in the mood for!">
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
