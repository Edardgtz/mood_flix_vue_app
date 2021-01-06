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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #008cff;
}

#nav a.router-link-exact-active {
  color: #7cc2fc;
}
p {
  /* font-family: "Montserrat Subrayada", sans-serif; */
  font-family: "Racing Sans One", cursive;
  font-size: 25px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 400;
  line-height: 23px;
  color: #bde0fd;
}
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

body {
  background-image: url("../src/assets/papyrus-dark.png");
}
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
.card-body {
  background-color: #071111;
}
.img {
  width: 100%;
  height: 50vh;
  object-fit: contain;
}
h1 {
  /* font-family: "Montserrat Subrayada", sans-serif; */
  font-family: "Racing Sans One", cursive;
  font-size: 35px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 400;
  line-height: 23px;
  color: #008cff;
}
h3 {
  font-family: Papyrus, fantasy;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}
/* p {
  font-family: "Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond,
    "Times New Roman", serif;
  font-size: 20px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
  color: #058dfc;
} */
blockquote {
  font-family: Papyrus, fantasy;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
pre {
  font-family: Papyrus, fantasy;
  font-size: 11px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
.title {
  font-size: 100px;
  color: yellow;
}
.header {
  padding: 100px;
  text-align: center;
  /* background: #1abc9c; */
  /* color: white; */
  font-size: 50px;
}
font {
  font-size: 200px;
}
.font_input {
  font-size: 75px;
}
</style>
