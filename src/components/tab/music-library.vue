<template>
  <div clsss="scroll">
    <div class="recommend">
      <div class="left">
        <div class="newSong">
          <p>新歌首发</p>
        </div>
        <ul class="new_song_list">
          <li v-for="(v,k) in newSong" :key="k">
            <span>{{v.filename}}</span>
            <span class="music_play" @click="play(v.hash)"></span>
            <span class="music_add"></span>
            <span>{{ music_duration(v) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      newSong: [],
      rank: []
    }
  },
  created () {
    this.http.get('/m/?json=true').then((res) => {
      let data = res.data.data
      this.newSong = data
    })
  },
  methods: {
    music_duration (data) {
      let minute = parseInt(data.duration / 60)
      let second = data.duration % 60
      let a = minute < 10 ? '0' + minute : parseInt(data.duration / 60)
      let b = second < 10 ? '0' + second : data.duration % 60
      return a + ':' + b
    },
    ...mapActions('musicLibrary', [
      'play'
    ])
  },
  computed: {
    ...mapGetters('controls',[
      'play_url'
    ])
  }
}
</script>

<style>
  .scroll {
    height: 507px;
  }
  .recommend {
    padding: 20px;
  }
  .newSong {
    display: inline-block;
  }
  .newSong p {
    border-left: 2px solid #009FF3;
    text-indent: 10px;
  }
  .country {
    display: inline-block;
    margin-left: 20px;
  }
  .country span {
    font-size: 12px;
    color: #999;
  }
  .country .color {
    color: #009FF3;
  }
  .new_song_list {
    width: calc(100% - 50%);
    min-width: 480px;
    border-top: 1px solid #e9e9e9;
    margin: 10px;
  }
  .new_song_list li {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .new_song_list li span {
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    text-align: center;
  }
  .new_song_list li span:nth-of-type(1) {
    width: calc(100% - 90px);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .new_song_list li span:nth-of-type(2) {
    width: 16px;
  }
  .new_song_list li span:nth-of-type(3) {
    width: 16px;
  }
  .new_song_list li span:nth-of-type(4) {
    width: 60px;
  }
</style>
