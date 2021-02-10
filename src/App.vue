<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Subrayada&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap");
/* @import url("assets/fonts/kust.woff"); */
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #223142;
}

#nav {
  padding: 30px;
}

#nav a {
  font-family: "kust";
  font-weight: bold;
  font-size: 50px;
  color: black;
}

#nav a.router-link-exact-active {
  font-family: "kust";
  color: black;
  font-size: 50px;
}
p {
  /* font-family: "Montserrat Subrayada", sans-serif; */
  font-family: "Racing Sans One", cursive;
  font-size: 35px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 400;
  line-height: 35px;
  color: white;
  /* background-color: black; */
}
/* .card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
} */

body {
  background-image: url("../src/assets/steve-johnson-5MTf9XyVVgM-unsplash.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #464646;
  /* font-family: kust; */
}
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
.card-body {
  /* background-image: url("../src/assets/steve-johnson-5MTf9XyVVgM-unsplash.jpg"); */
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(0, 0, 0);
}
img {
  /* width: 100%; */
  /* height: 50vh; */
  /* object-fit: contain; */
  padding-bottom: 20px;
}
h1 {
  /* font-family: "Montserrat Subrayada", sans-serif; */

  font-family: kust;
  font-size: 35px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 400;
  line-height: 23px;
  color: white;
  /* background-color: white; */
}

.header {
  /* padding: 100px; */
  padding-top: 10px;
  padding-bottom: 100px;
  text-align: center;
  /* background: #1abc9c; */
  color: white;
  font-size: 50px;
  /* font-family: kust; */
  letter-spacing: 15px;
}
.home_title {
  font-size: 22vw;
  color: black;
}
.font_input {
  font-size: 50px;
  color: black;
  padding-bottom: 5px;
}

button {
  background-color: black;
  border-block-color: white;
  padding: 8px;
  color: white;
}

input,
select,
textarea {
  background-color: white;
  color: black;
}

::placeholder {
  color: black;
  font-family: kust;
  /* font-size: 17px; */
}
form {
  border: 5px;
  margin: 10px;
  padding: 5px;
}
.mood_input {
  margin-top: 30px;
}
.index_header {
  font-size: 150px;
  color: black;
}

@font-face {
  font-family: "kust";
  src: url("assets/fonts/kust.otf") format("opentype");
}

.card_title {
  font-family: "Racing Sans One", cursive;
  font-size: 35px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 400;
  line-height: 23px;
  color: white;
}
.art_credit {
  margin-left: 10px;
  position: relative;
  float: left;
  padding-top: 48%;
  /* font-weight: bold; */
  font-family: "kust";
  font-size: 20px;
}
</style>
