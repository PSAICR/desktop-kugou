<template>
  <div class="musicListDetail">
    <div class="back">
      <span class="gray" @click="back">全部歌单</span>
      <span class="gray"> > </span>
      <span>{{ info.specialname }}</span>
    </div>
    <div class="messageBox">
      <img class="img" :src='imgUrl()' alt="" />
      <ul class="right">
        <li>
          {{ info.specialname }}
        </li>
        <li class="center">
          创建人：{{ info.nickname }}
        </li>
        <li class="center">
          分类：<span v-for="(v,k) in info.tags" :key="k" class="tags">{{ v.tagname }}</span>
        </li>
        <li class="center">
          更新时间：{{ info.publishtime.substr(0,10) }}
        </li>
        <li>
          <span class="square"></span>
          <span>全部播放</span>
        </li>
      </ul>
    </div>
    <div class="list">
      <ul class="class">
        <li class="active">歌曲</li>
      </ul>
      <div class="detailModule">
        <!-- 歌单 -->
        <ul class="music_list" ref="music_list">
          <li>
            <div class="music_filename">歌曲名称</div>
            <div class="music_album">专辑名称</div>
            <div class="music_duration">时长</div>
            <div class="music_set">操作</div>
          </li>
          <li v-for="(v, k) in list" :key="k">
            <div class="music_select">
              <label>
                <input type="checkbox" name="" class="select_btn">
                <span class="select_btn"></span>
              </label>
            </div>
            <div class="music_filename">
              <span>{{ v.filename }}</span>
            </div>
            <div class="music_album">
              <span>{{ v.remark }}</span>
            </div>
            <div class="music_duration">
              <span>{{ duration(v) }}</span>
            </div>
            <div class="music_message">
              <span class="music_play" @click="play(k, v.hash)"></span>
              <span class="music_add"></span>
              <span class="music_collection"></span>
              <span class="music_download"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      info: [],
      list: []
    }
  },
  created () {
    this.http.get('/m/plist/list/' + this.$route.query.specialid + '?json=true').then((res) => {
      this.info = res.data.info.list
      this.list = res.data.list.list.info
    }).catch((err) => {
      throw err
    })
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    imgUrl () {
      let imgUrl = this.info.imgurl
      return imgUrl.replace('{size}', '150')
    },
    duration (data) {
      let minute = parseInt(data.duration / 60)
      let second = data.duration % 60
      let a = minute < 10 ? '0' + minute : parseInt(data.duration / 60)
      let b = second < 10 ? '0' + second : data.duration % 60
      return a + ':' + b
    }
  }
}
</script>

<style>
  .musicListDetail {
    padding: 20px;
    min-width: 800px;
    height: calc(100% - 42px);
    overflow-y: scroll;
  }
  .back span:nth-child(1) {
    color:#999999;
  }
  .back span:nth-child(2) {
    color: #999999;
    transform: scaleY(1.5);
    display: inline-block;
    font-weight: 200;
  }
  .messageBox {
    margin: 20px 0;
    position: relative;
    overflow: hidden;
  }
  .img {
    width: 200px;
    height: 200px;
    float: left;
  }
  .right {
    float: left;
    margin-left: 10px;
  }
  .right li {
    margin: 18px 0;
  }
  .tags {
    width: 45px;
    height: 30px;
    display: inline-block;
    margin: 0 10px;
    border: 1px solid #e6e6e6;
    text-align: center;
    line-height: 30px;
    color: #999999;
  }
  .right li:first-child {
    margin-top:0;
  }
  .right li:last-child {
    width: 90px;
    height: 30px;
    background: #169Af3;
    color: white;
    line-height: 30px;
    margin-top: 40px;
  }
  .square {
    display: inline-block;
    width: 0px;
    height: 0px;
    border-top: 8px solid transparent;
    border-right: 8px solid transparent;
    border-left: 8px solid white;
    border-bottom: 8px solid transparent;
    vertical-align: middle;
    margin-left: 10px;
    background: transparent;
    margin-top: -3px;
  }
  .right li:last-child span:nth-child(2) {
    font-size: 14px;
    margin-left: -5px;
  }
  .center {
    font-size: 14px;
    color: #999999;
  }
  .list .class {
    border-bottom: 1px solid #e5e5e5;
    display: flex;
  }
  .list .class li {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: -1px;
  }
  .detailModule {
    width: 100%;
  }
  .active {
    border-bottom: 2px solid #0CA1F7;
    color: #0CA1F7;
  }
  .detailModule ul li {
    height: 30px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    color: black;
    font-size: 12px;
    font-family: "微软雅黑";
    padding: 2.5px;
  }
  .detailModule ul li:last-child {
    border-bottom: 0px solid transparent;
  }
  label span {
    display: inline-block;
    vertical-align: middle;
  }
  input[type="checkbox"]{
    display: none;
  }
  .detailModule ul li label .select_btn{
    width: 14px;
    height: 14px;
    background: url('../../../../static/img/select.png');
    background-position: -64px -56px;
    margin: 0 20px;
  }
  .detailModule ul li label input[type="checkbox"]:checked+.select_btn{
    width: 14px;
    height: 14px;
    background: url('../../../../static/img/select.png');
    background-position: -64px -86px;
  }
  .music_list li:first-child{
    text-align: center;
  }
  .music_list li .music_filename{
    flex: 4;
  }
  .music_list li .music_album{
    flex: 3;
  }
  .music_list li .music_duration{
    flex: 3;
    text-align: center;
  }
  .music_list li .music_set{
    flex: 1;
  }
  .detailModule .music_list li .music_message{
    display: inline-flex;
    flex-direction: row;
  }
  .music_message span{
    margin-left: 5px;
  }
</style>
