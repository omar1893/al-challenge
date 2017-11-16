<template>
  <div id="app">
  <header class="points-info"></header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" >
body{
  padding: 0px;
  margin: 0px;
}

.points-info{
  background-color: blue;
  height: 100px;
  width: 100%;
}
</style>
