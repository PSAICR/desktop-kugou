<template>
  <!-- 搜索的内容展示区域 -->
  <div class="content" ref="content">
    <ul class="classify">
      <router-link to="/search" tag="li" >搜索</router-link>
      <router-link to="/musicLibrary" tag="li">乐库</router-link>
      <router-link to="/musicList" tag="li">歌单</router-link>
      <router-link to="/lrc" tag="li">歌词</router-link>
    </ul>
    <div class="inner">
      <search :info="info"></search>
      <!-- 模块列表 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import search from './search'
export default {
  components: {
    search
  },
  props: ['info']
}
</script>

<style>
  .router-link-active {
    color: #009FF3;
  }
  .kgBox .content{
    width: calc(100% - 400px);
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .inner {
    width: 100%;
    height: calc(100% - 40px);
    overflow-x: auto;
  }
  /* 列表 */
  .kgBox .content .classify {
    width: 100%;
    min-width: 600px;
    height: 40px;
    border-bottom: 1px solid #cccccc;
    line-height: 40px;
    display: flex;
    justify-content: center;
    position: absolute;
    background: white;
  }
  .kgBox .content .classify li {
    width: 100px;
    text-align: center;
    float: left;
  }
  .kgBox .content .classify li:hover {
    color: #009FF3;
  }
</style>
