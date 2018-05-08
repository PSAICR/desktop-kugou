<template>
  <div class="menu">
    <div class="playList">播放列表</div>
    <div class="localMusic">本地音乐</div>
    <div class="uploadList">上传列表</div>
    <div class="downloadList">下载列表</div>
    <div class="recentlyPlayed">最近播放记录</div>
    <div class="collectionList">收藏列表</div>
  </div>
</template>
<script>

</script>
<style>
  .kgBox {
    width: 100%;
    height: calc(100% - (80px + 55px));
    background: white;
    position: absolute;
    left: 0;
    top: 55px;
  }
  .menu {
    width: 400px;
    height: 100%;
    border-right: 1px solid rgba(0,0,0,0.5);
  }
  .menu div {
    width: 380px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #cccccc;
    padding-left: 20px;
  }
</style>
