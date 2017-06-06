<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  .fade-transition
    transition: opacity .2s ease
  .fade-enter, .fade-leave
    opacity :0;
</style>
