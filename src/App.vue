<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/mintui.css'
import '@/assets/css/weui.css'
export default {
  name: 'app'
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  max-width: 640px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  width: 100%;
  height: 100%;
}
</style>
