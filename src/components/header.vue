<template>
  <div class="container">
    <div class="header">
      <!-- 左上角的部分 -->
      <div class="kuGou">
        <div class="circle">
        <div>K</div>
        </div>
          <ul>
            <li @click="login">登录</li>
            <li>|</li>
            <li>注册</li>
          </ul>
        </div>
      </div>
      <login v-show="show ? true : false" @close="close"></login>
      <register></register>
      <!-- 搜索框区域 -->
      <div class="searchBox">
        <input type="text" class="search" name="keyword" id="" placeholder="请输入歌曲进行搜索" @keydown="search" v-model="searchValue">
      <div class="searchImg"></div>
    </div>
  </div>
</template>

<script>
import login from '@/components/header/login/login'
import register from '@/components/header/register/register'
export default {
  props: {
    header: {
      type: String
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      info: [],
      searchValue: '',
      music_duration: '',
      hash: '123'
    }
  },
  components: {
    login,
    register
  },
  methods: {
    login () {
      this.$emit('show', this.isShow)
      this.show = true
    },
    close () {
      this.show = false
    },
    search (ev) {
      if (ev.keyCode === 13) {
        this.http.get('/mobilecdn/api/v3/search/song?format=json&keyword=' + this.searchValue + '&page=1&pagesize=20&showtype=1').then((res) => {
          let searchData = res.data.data.info
          this.$emit('update:getInfoData', searchData)
          // 计算音乐的总长度
          for (let i = 0; i < searchData.length; i++) {
            let endTimeMinute = parseInt(searchData[i].duration / 60)
            let endTimeSecond = parseInt(searchData[i].duration % 60)
            if (endTimeSecond <= 9) {
              endTimeSecond = '0' + parseInt(searchData[i].duration % 60)
            }
            if (endTimeMinute <= 9) {
              endTimeMinute = '0' + parseInt(searchData[i].duration / 60)
            }
            searchData[i].duration = endTimeMinute + ':' + endTimeSecond
          }
        })
      }
    }
  }
}
</script>
<style>
  .header{
    width: 100%;
    height: 55px;
    background: #0ca1f7;
  }

  .kuGou{
    padding: 10px;
    overflow: hidden;
  }
  .kuGou .circle{
    width: 35px;
    height: 35px;
    border: 2px solid white;
    border-radius: 50%;
    text-align: center;
    line-height: 35px;
    font-size: 22px;
    color: white;
  }
  .kuGou ul{
    font-family: sans-serif;
    position: absolute;
    top: 18px;
    left: 55px;
  }
  .kuGou ul li{
    float: left;
    color: white;
    margin: 0px 5px;
    font-family: SimSun;
  }
  /* 搜索框 */
  .searchBox{
    position: absolute;
    top: 13px;
    left: 400px;
  }

  .search{
    width: 450px;
    height: 28px;
    font-size: 13px;
    border: 0px solid transparent;
    padding-left: 10px;
    border-radius: 15px;
    position: absolute;
    left: 90px;
    top: 3px;
  }
  .searchImg{
    width: 20px;
    height: 20px;
    background: url('../../static/img/search.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 7px;
    left: 515px;
  }
  .searchBox ul{
    position: relative;
    top: 4px;
  }
  .searchBox ul li{
    margin: 0px 8px;
    float: left;
  }
  .searchBox ul .left{
    transform: scaleY(2) scaleX(1.5);
    font-weight: lighter;
    color: white;
  }
  .searchBox ul .right{
    transform: scaleY(2) scaleX(1.5);
    font-weight: lighter;
    color: white;
  }
  .renovate svg{
    vertical-align: middle;
  }
</style>
