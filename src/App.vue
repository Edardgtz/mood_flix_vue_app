<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
       <router-link to="/titles/index">Index</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-image: url("../src/assets/old_map.png");
}
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}
.img {
  width: 100%;
  height: 30vh;
  object-fit: contain;
}
h1 {
  font-family: Papyrus, fantasy;
  font-size: 23px;
  font-style: normal;
  font-variant: small-caps;
  font-weight: 400;
  line-height: 23px;
}
h3 {
  font-family: Papyrus, fantasy;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}
p {
  font-family: "Bodoni MT", Didot, "Didot LT STD", "Hoefler Text", Garamond,
    "Times New Roman", serif;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
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
</style>
