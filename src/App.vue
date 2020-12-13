<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: "Andika New Basic";
  src: local("AndikaNewBasic-Regular"),
   url(./fonts/AndikaNewBasic/AndikaNewBasic-Regular.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
}

#app {
  font-family: "Andika New Basic", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
