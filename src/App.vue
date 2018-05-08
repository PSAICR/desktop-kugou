<template>
  <div class="box">
    <div class="mask" v-show="isShow"></div>
    <my-header :getInfoData.sync="data" :hash="hash" :show="isShow" @show="show"></my-header>
    <div class="kgBox">
      <my-menu></my-menu>
      <my-content :info="data" ref="container"></my-content>
    </div>
    <my-controls ref="controls"></my-controls>
  </div>
</template>
<script>
import header from '@/components/header'
import menu from '@/components/menu'
import content from '@/components/content'
import controls from '@/components/controls'

export default {
  components: {
    'myHeader': header,
    'myMenu': menu,
    'myContent': content,
    'myControls': controls
  },
  data () {
    return {
      data: [],
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
    }
  },
  created () {
    console.log(this)
  }
}
</script>
<style>
  .box{
    width: 100%;
    height: 100%;
    min-width: 1200px;
    background: url('../static/img/skin/2.png') no-repeat;
    background-size: 100% 100%;
  }
  .kgBox{
    background: white;
  }
  .mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    position: absolute;
  }
</style>
