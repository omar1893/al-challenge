<template>
  <div id="app" style="">
  
    <header class="points-info text-header d-flex align-items-center justify-content-between px-3">
      <div>
        <img src="./assets/aerolab-logo.svg" alt="">
      </div>
      <div class="d-inline-flex align-items-center">
        <span>John Kite</span>
        <div class="coin-container d-flex align-items-center text-center ml-3">
          <div class="mx-auto">
            6000
            <img src="./assets/icons/coin.svg" alt="">
          </div>
        </div>
      </div>
    </header>
  
    <section class="snap d-flex align-items-end snap-text px-5 py-5 mb-5">
      Electronics
    </section>
  
    <section class="container bd-bt pb-3">
      <div class="menu-container d-inline-flex align-items-center">
        <div class="text-header">
          <span>16 of 32 Products</span>
        </div>
        <div class="vl mx-4 "></div>
  
        <div class="sort">
          <span>Sort by:</span>
        </div>
        <button v-bind:class="{ active: active=='mr' }" class="btn-sort mx-3" @click="sort('mr')">Most Recent</button>
        <button v-bind:class="{ active: active=='lp' }" class="btn-sort mx-3" @click="sort('lp')">Lowest Price</button>
        <button v-bind:class="{ active: active=='hp' }" class="btn-sort mx-3" @click="sort('hp')">Highest Price</button>
      </div>
    </section>
  
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return{
        active: 'mr'
      }
    },
    methods:{
      sort: function(str){
        this.active = str
        console.log(str)
      }
    }
  }
</script>

<style lang="scss">
  body {
    padding: 0px;
    margin: 0px;
    background-color: #f8f8f8
  }
  
  .points-info {
    background-color: #ffffff;
    height: 80px;
    width: 100%;
  }
  
  .coin-container {
    width: 103px;
    height: 48px;
    border-radius: 21px;
    background-color: #ececec;
  }
  
  .text-header {
    font-size: 22px;
    color: #616161
  }
  
  .snap {
    background-image: url('./assets/header-x1.png');
    background-size: cover;
    width: 100%;
    height: 412px;
  }
  
  .snap-text {
    font-size: 64px;
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  
  .vl {
    width: 1px;
    height: 49px;
    background-color: #d9d9d9;
  }
  
  .bd-bt {
    border-bottom: 1px solid #d9d9d9
  }
  
  .sort {
    font-size: 22px;
    color: rgb(163, 163, 163);
  }
  
  .btn-sort {
    width: 178px;
    height: 48px;
    border-radius: 21px;
    background-color: #ececec;
    border: none;
    font-size: 22px;
    color: rgb(163, 163, 163);
  }

  .active{
    background-color: #09d4fa;
    color: #ffffff
  }

  
</style>
