<template>
  <div class="music-list" >
    <ul>
      <div is="li" v-for="(v,id) in musicList" :key="id">
        <router-link :to='{path: "/musicList/musicListDetail", query:{id:id, specialid:v.specialid}}' >
          <img :src='imgUrl(v)' alt="" />
          <div class="title">{{specialname(v)}}</div>
          <span class="username">{{v.username}}</span>
          <span class="all-music"></span>
          <div class="opacity">
            <span>播放次数：</span>
            <span class="playCount">{{v.playcount}}</span>
          </div>
        </router-link>
      </div>
    </ul>
  </div>
</template>
<script>
// import music from '@/components/tab/music-list/music'
// import introduce from '@/components/tab/music-list/introduce'
export default {
  props: [],
  data () {
    return {
      musicList: []
    }
  },
  created () {
    this.http.get('/m/plist/index&json=true').then((res) => {
      let data = res.data.plist.list.info
      this.musicList = data
      console.log(data)
    })
  },
  methods: {
    imgUrl (data) {
      var imgUrl = data.imgurl.replace('{size}', '150')
      return imgUrl
    },
    specialname (data) {
      var splice = data.specialname.substr(0, 10)
      return splice + '...'
    }
  }
}
</script>

<style>
  .music-list{
    height: 100%;
  }
  .music-list ul{
    overflow: hidden;
  }
  .music-list ul li img{
    width: 170px;
  }
  .music-list ul li{
    width: 170px;
    height: 230px;
    float: left;
    position: relative;
    margin: 20px;
  }
  .music-list ul li .username{
    font-size: 12px;
    color: #999999;
  }
  .music-list ul li .username:hover{
    color: #0CA1F7;
  }
  .music-list ul li .title{
    font-size: 14px;
    margin: 5px 0;
  }
  .music-list ul li .title:hover{
    color: #0CA1F7;
  }
  .all-music{
    width: 16px;
    height: 16px;
    background: url('http://static.kgimg.com/common/images/pc_temp_v2/icon_splice.png?20150814');
    background-position: 0px -147px;
    display: inline-block;
    vertical-align: middle;
  }
  .all-music:hover{
    background-position: 0px -207px;
  }
  .opacity{
    width: 100%;
    height: 25px;
    background: rgba(0,0,0,0.3);
    line-height: 25px;
    position: absolute;
    top: 0;
    color: white;
    overflow: hidden;
  }
</style>
