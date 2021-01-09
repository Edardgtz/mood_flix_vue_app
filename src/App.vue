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
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

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
  padding-top: 25px;
  padding-bottom: 30px;
  text-align: center;
  /* background: #1abc9c; */
  color: white;
  font-size: 50px;
  /* font-family: kust; */
}
font {
  font-size: 250px;
}
.font_input {
  font-size: 100px;
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
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  /* height: 80px; */
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
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
</style>
