<template>
  <div class="searchContent" v-show="is_show">
    <!-- 搜索的歌曲部分 -->
    <ul class="music_list">
      <li v-for="(v,k) in info" :key="k">
        <div class="music_message">
          <label>
            <input type="checkbox" name="" class="select_btn">
            <span class="select_btn"></span>
          </label>
          <div class="column">
            <span class="music_name">{{v.songname}}</span>
            <span class="description">{{v.topic}}</span>
        </div>
        </div>
        <div class="music_message">
          <span>{{v.singername}}</span>
        </div>
        <div class="music_message">
          <span class="duration">{{v.duration}}</span>
        </div>
        <div class="music_message">
          <span class="music_play" @click="play(k,v.hash)"></span>
          <span class="music_add"></span>
          <span class="music_collection"></span>
          <span class="music_download"></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchValue: '',
      is_play: false,
      is_show: true
    }
  },
  props: ['info'],
  methods: {
    play (key, hash) {
      this.http.get('/www/yy/index.php?r=play/getdata&hash=' + hash).then((res) => {
        this.music_play = res.data.data.play_url
        this.is_play = true
        this.currrent_music_name = res.data.data.audio_name
      })
    }
  }
}
</script>
<style>
  .searchContent {
    overflow-y: auto;
    /* height: 100%; */
  }
  .kgBox .content .inner {
    position: absolute;
    top: 40px;
  }
  .searchContent ul li {
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    color: black;
    font-size: 12px;
    font-family: "微软雅黑";
    padding: 2.5px;
  }
  .searchContent ul li:last-child {
    border-bottom: 0px solid transparent;
  }
  label span {
    display: inline-block;
    vertical-align: middle;
  }
  input[type="checkbox"] {
    display: none;
  }
  .searchContent ul li label .select_btn {
    width: 14px;
    height: 14px;
    background: url('../../static/img/select.png');
    background-position: -64px -56px;
    margin: 0 20px;
  }
  .searchContent ul li label input[type="checkbox"]:checked+.select_btn {
    width: 14px;
    height: 14px;
    background: url('../../static/img/select.png');
    background-position: -64px -86px;
  }

  .music_list li .music_message {
    display: inline-flex;
    flex-direction: row;
  }
  .music_message:nth-of-type(1) {
    flex: 5;
  }
  .music_message:nth-of-type(2) {
    flex: 1.5;
  }
  .music_message:nth-of-type(3) {
    flex: 1;
  }
  .music_message:nth-of-type(4) {
    flex: 1.5;
  }
  .music_message:nth-of-type(4) span {
    margin: 0px 10px;
  }
  .music_message:nth-of-type(4) span:nth-child(1) {
    margin: 0px 5px;
  }
  .music_list li .music_message .column {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .music_list li .music_message .column span {
    margin: 2.5px 0;
  }
  .music_list li .music_message .description {
    color: #999999;
  }

  .music_play {
    width: 16px;
    height: 16px;
    background: url('http://static.kgimg.com/common/images/pc_temp_v2/icon_splice.png?20150814');
    background-position: 0px 0px;
  }
  .music_play:hover {
    background-position: 0px -60px;
  }
  .music_add {
    width: 16px;
    height: 16px;
    background: url('http://static.kgimg.com/common/images/pc_temp_v2/icon_splice.png?20150814');
    background-position: -57px 0px;
  }
  .music_add:hover {
    background-position: -57px -60px;
  }

  .music_collection {
    width: 16px;
    height: 16px;
    background: url('http://static.kgimg.com/common/images/pc_temp_v2/icon_splice.png?20150814');
    background-position: 256px -180px;
  }
  .music_collection:hover {
    background-position: 226px -180px;
  }
  .music_download {
    width: 16px;
    height: 16px;
    background: url('http://static.kgimg.com/common/images/pc_temp_v2/icon_splice.png?20150814');
    background-position: -90px 0px;
  }
  .music_download:hover {
    background-position: -90px -60px;
  }
</style>
