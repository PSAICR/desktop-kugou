<template>
  <div class="controlBox">
    <div class="control" ref="control">
      <!-- 左边的按钮 -->
      <div class="left"></div>
      <div :class="isPlay ? 'play' : 'pause'" ref='playUrl' @click="play">
        <audio :src="play_url" autoplay="is_play" ref="music"  @canplay="canplay" @timeupdate="timeupdate" @seeked="seeked"></audio>
      </div>
      <div class="right"></div>
      <!-- logo -->
      <div class="logo">
        <img src="../../static/img/logo.png" alt="">
      </div>
      <!-- 进度条 -->
      <div class="controlBar" ref="controlBar" @click="clickBar" >
        <div class="moveBar" ref="moveBar"></div>
        <div class="Bar" ref="Bar" @mousedown.prevent="mousedown"></div>
      </div>
      <!-- 歌曲名称 -->
      <div class="musicName">
        <span>{{current_music_name}}</span>
      </div>
      <!-- 时间 -->
      <div class="time">
        <span class="currentTime">{{current_time}}</span>
        <span>/</span>
        <span class="endTime">{{duration_time}}</span>
      </div>
      <!-- 音量控制部分 -->
      <div class="volumeBox">
        <div class="volume" @click.self="VolumeShow = !VolumeShow">
          <img src="../../static/img/volume.png" alt="" v-show="VolumeShow ? true : false">
          <div class="volumeControlBg" @click="volumeControl" ref="volumeControlBg" v-show="VolumeShow ? true : false">
            <div class="volumeControl" ref="volumeControl"></div>
            <div class="circle" ref="volumeCircle" @mousedown.prevent="volumeDrop" @mouseup.prevent="volumeDropUp"></div>
          </div>
        </div>
      </div>
      <!-- 播放模式 -->
      <div class="playMode" @click.self="playModeShow = !playModeShow">
        <div class="playModeBox" v-show="playModeShow ? true : false">
          <img src="../../static/img/playModeBox.png" alt="" class="img">
          <ul class="loop">
            <li v-for="(value, key) in playMode" :key="key">
              <span :class="key"></span>
              <span>{{value}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  props: ['headers'],
  data () {
    return {
      current_time: '00:00',
      duration_time: '00:00',
      isPlay: false,
      VolumeShow: false,
      playModeShow: false,
      volumeClientY: 0,
      playMode: {
        listCycle: '列表播放',
        singCycle: '洗脑循环',
        randomPlay: '随机播放'
      }
    }
  },
  methods: {
    timeupdate (ev) {
      let currentTimeMinute = parseInt(this.$refs.music.currentTime / 60);
      let currentTimeSecond = parseInt(this.$refs.music.currentTime % 60);
      if (currentTimeSecond <= 9) {
        currentTimeSecond = '0' + parseInt(this.$refs.music.currentTime % 60)
      }
      if (currentTimeMinute <= 9) {
        currentTimeMinute = '0' + parseInt(this.$refs.music.currentTime / 60)
      }
      this.current_time = currentTimeMinute + ':' + currentTimeSecond;
      // 当前播放时间的进度条
      this.$refs.moveBar.style.width = parseInt(this.$refs.music.currentTime / this.$refs.music.duration * this.$refs.controlBar.offsetWidth) + 'px'
      // 进度条上的小圆球
      this.$refs.Bar.style.left = parseInt(this.$refs.music.currentTime / this.$refs.music.duration * this.$refs.controlBar.offsetWidth) + 'px'

      // this.http.get('/www/yy/index.php?r=play/getdata&hash=' + 'AEA8AE75A30932A30FD698F1BE3441A6').then((res) => {
      //   // 处理歌词
      //   var data = res.data.data.lyrics
      //   console.log(res)
      //   var arr = data.split('\n')
      //   var lrcArr = []
      //   for (var i = 0; i < arr.length; i++) {
      //     let geci = arr[i].split(']')
      //     lrcArr.push(geci[geci.length - 1])
      //   }
      //   for (let i = 0; i < lrcArr.length; i++) {
      //     let p = document.createElement('p')
      //     p.innerHTML = lrcArr[i]
      //     document.getElementsByClassName('music_lrc')[0].appendChild(p)
      //   }
        
      //   // 处理时间
      //   let reg = /\[\d*:\d*((\.|\\:)\d*)*\]/g
      //   let str = arr.toString()
      //   let time = str.match(reg)
      //   let lrcTimeArr = []
      //   for (let i = 0; i < time.length; i++) {
      //     let res = time[i].toString().substring(1, time[i].length - 1)
      //     let fen = parseInt(res.substring(0, 2))
      //     let miao = parseInt(res.substring(3, 5))
      //     let haomiao = parseFloat(res.substring(6, time[i].length - 1))
      //     let a = parseFloat((fen * 60) + miao + '.' + haomiao)
      //     lrcTimeArr.push(a)
      //   }
      //   for (let i = 0; i < lrcTimeArr.length; i++) {
      //     if (parseInt(this.$refs.music.currentTime) === parseInt(lrcTimeArr[i])) {
      //       let height = this.$parent.$refs.container.$refs.content.offsetHeight / 2 - 80
      //       height -= i * 40
      //       document.getElementsByClassName('music_lrc')[0].style.transition = '0.5s linear'
      //       document.getElementsByClassName('music_lrc')[0].style.top = height + 20 + 'px'
      //       document.getElementsByClassName('music_lrc')[0].children[i].style.color = 'blue'

      //       document.getElementsByClassName('music_lrc')[0].style.top = height + 20 + 'px'
      //       document.getElementsByClassName('music_lrc')[0].children[i - 1].style.color = 'black'
      //     }
      //   }
      // })
    },
    mousedown () {
      document.onmousemove = (ev) => {
        ev.preventDefault()
        let x = (ev.clientX - this.$refs.controlBar.offsetLeft - this.$refs.control.offsetLeft) - this.$refs.Bar.clientWidth / 2
        if (x >= this.$refs.controlBar.clientWidth) {
          x = this.$refs.controlBar.clientWidth
        }else if (x < 0) {
          x = 0
        }
        this.$refs.Bar.style.left = x + 'px'
        this.$refs.moveBar.style.width = x + 'px'
      }
    },
    clickBar (ev) {
      if (this.$refs.music.duration == NaN) {
        this.current_time = '00:00'
        return
      }
      
      // durationchange () {
      //   console.log('时常改变了')
      // }
      // 设置点击的时候 进度条走的位置
      this.$refs.moveBar.style.width = parseInt(ev.offsetX) + 'px';
      this.$refs.Bar.style.left = parseInt(ev.offsetX) + 'px';
      // 音乐的当前时间 = ev.offsetX / 进度条的宽度 * 音乐的总时长;
      this.current_time = ev.offsetX / this.$refs.controlBar.offsetWidth * this.$refs.music.duration;

      let currentTimeMinute = parseInt(this.current_time / 60);
      let currentTimeSecond = parseInt(this.current_time % 60);
      if (currentTimeSecond <= 9) {
        currentTimeSecond = '0' + parseInt(this.current_time % 60)
      }
      if (currentTimeMinute <= 9) {
        currentTimeMinute = '0' + parseInt(this.current_time / 60)
      }
      this.current_time = currentTimeMinute + ':' + currentTimeSecond;
      console.log(this.current_time)
      
     
    },
    
    volumeControl (ev) {
      this.$refs.music.volume = (ev.offsetY / this.$refs.volumeControlBg.clientHeight).toFixed(2);
      this.$refs.volumeControl.style.height = ev.offsetY + 'px'
      this.$refs.volumeCircle.style.top = ev.offsetY + 'px'
    },
    volumeDrop () {
      document.onmousemove = (ev) => {
        this.volumeClientY = ev.clientY - (document.getElementsByClassName('content')[0].clientHeight + document.getElementsByClassName('control')[0].clientHeight - document.getElementsByClassName('header')[0].clientHeight) - this.$refs.volumeCircle.clientHeight / 2;
        if (this.volumeClientY <= -this.$refs.volumeControlBg.clientHeight) {
          this.volumeClientY = -this.$refs.volumeControlBg.clientHeight
        }else if (this.volumeClientY > 0) {
          this.volumeClientY = 0
        }
        this.$refs.volumeCircle.style.top = -this.volumeClientY + 'px'
        this.$refs.volumeControl.style.height = -this.volumeClientY + 'px'
        //控制音量
        this.$refs.music.volume = (-this.volumeClientY / this.$refs.volumeControlBg.clientHeight).toFixed(2)
        console.log(this.$refs.music.volume)
      }
    },
    volumeDropUp () {
      this.$refs.volumeCircle.style.top = -this.volumeClientY + 'px'
      this.$refs.volumeControl.style.height = -this.volumeClientY + 'px'
      this.$refs.music.volume = (-this.volumeClientY / this.$refs.volumeControlBg.clientHeight).toFixed(2)
    },
    seeked () {
        console.log('时长更改了')
        clickBar(ev)
    },
    canplay () {
  		// 改变播放状态的图片
      this.$refs.playUrl.style.backgroundPosition = '0 -54px';
      
  		// 当前播放时间
      // 判断当前播放是否结束 清除掉当前的状态
      if (this.$refs.music.ended === true) {
        this.duration_time = '00:00'
        this.current_time = '00:00'
        this.$refs.moveBar.style.width = 0 + 'px'
        this.$refs.Bar.style.left = 0 + 'px'
        this.$refs.playUrl.style.backgroundPosition = '0 6px'
        this.current_music_name = '酷狗音乐'
      }
      
      // 结束时间
      let endTimeMinute = parseInt(this.$refs.music.duration / 60)
      let endTimeSecond = parseInt(this.$refs.music.duration % 60)
      if (endTimeSecond <= 9) {
      	endTimeSecond = '0' + parseInt(this.$refs.music.duration % 60)
      }
      if (endTimeMinute <= 9) {
      	endTimeMinute = '0' + parseInt(this.$refs.music.duration / 60)
      }
      this.duration_time = endTimeMinute + ':' + endTimeSecond
    },
    ...mapActions('controls', [
      'play'
    ]),
    play () {
      if (this.$refs.music.paused) {
        this.$refs.music.play()
        this.isPlay = false
      } else {
        this.$refs.music.pause()
        this.isPlay = true
      }
    }
  },
  computed: {
    ...mapState('musicLibrary', [
      'play_url'
    ]),
    ...mapGetters('musicLibrary', [
      'play_url',
      'current_music_name'
    ]),
    endTime:function() {
      let endTimeMinute = parseInt(this.$refs.music.duration / 60)
      let endTimeSecond = parseInt(this.$refs.music.duration % 60)
      if (endTimeSecond <= 9) {
      	endTimeSecond = '0' + parseInt(this.$refs.music.duration % 60)
      }
      if (endTimeMinute <= 9) {
      	endTimeMinute = '0' + parseInt(this.$refs.music.duration / 60)
      }
      this.duration_time = endTimeMinute + ':' + endTimeSecond
    },
    
  },
  // watch: {
  //   'play_url' (v) {
  //     console.log(v)
  //     const ad = this.$refs.music
  //     ad.src = v
  //     ad.play()
  //   }
  // }
}
</script>

<style>
  /* 控制条 */
  .controlBox{
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
	}
  .control{
    width: 1200px;
    height: 80px;
    position: relative;
    margin: auto;
  }
  .control .left{
    width: 36px;
    height: 36px;
    background: url('../../static/img/sprite.png');
    background-position: -36px -143px;
    position: absolute;
    top: 22px;
    left: 54px;
	}
  .play{
    width: 60px;
    height: 60px;
    background: url('../../static/img/sprite.png');
    background-position: 0px 6px;
    position: absolute;
    top: 5px;
    left: 120px;
	}
  .pause{
    width: 60px;
    height: 60px;
    background: url('../../static/img/sprite.png');
    background-position: 0px -54px;
    position: absolute;
    top: 5px;
    left: 120px;
  }
  .control .right{
    width: 36px;
    height: 36px;
    background: url('../../static/img/sprite.png');
    background-position: 120px -143px;
    position: absolute;
    top: 22px;
    left: 210px;
	}
  .logo img{
    position: absolute;
    top: 13px;
    left: 290px;
	}
	.control .controlBar{
    width: 600px;
    height: 4px;
    background: #1ba3f1;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 55px;
    left: 380px;
    border-radius: 10px;
	}
  .moveBar{
    width: 0px;
    height: 4px;
    background: #00ffbe;
    border-radius: 10px;
    position: absolute;
	}
	.Bar{
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    left: 0;
	}
	.musicName{
    width: 420px;
    height: 20px;
    color: white;
    font-size: 14px;
    position: absolute;
    top: 15px;
    left: 380px;
	}
	.time{
    width: 120px;
    height: 20px;
    position: absolute;
    top: 15px;
    left: 885px;
	}
	.time span{
	  color: white;
	  font-size: 14px;
	}
	.volume{
		width: 16px;
		height: 16px;
		background: url('../../static/img/sprite.png');
		background-position: -64px -195px;
		position: absolute;
		top: 32px;
		left: 1050px;
	}
	.volumeLogo:hover .volumeBox{
		display: block;
	}
	
	.volumeBox{
		position: relative;
	}
	.volumeBox img{
		position: absolute;
		top: -146px;
		left: -6px;
	}
	.volumeBox .circle{
		width: 12px;
		height: 12px;
		background: white;
		border-radius: 50%;
		position: absolute;
		left: -4px;
		top: 40px;
	}
	.volumeControlBg{
		width: 3px;
		height: 90px;
		background: #51555c;
		position: absolute;
		top: -136px;
		left: 7px;
		z-index: 0;
		transform: rotate(180deg);
	}
	.volumeControl{
		width: 3px;
		height: 40px;
		background: #1ba3f1;
		position: absolute;
		border-radius: 5px;
	}
	/* 播放模式 */
	.playModeBox{
		display: block;
	}
	.playMode{
		width: 16px;
		height: 16px;
		background: url('../../static/img/sprite.png');
		background-position: -64px -179px;
		position: absolute;
		top: 32px;
		left: 1145px;
	}
  .playModeBox img{
    width: 115px;
    height: 115px;
		position: absolute;
		top: -146px;
		left: -50px;
	}
	.loop{
		width: 118px;
		height: 106px;
		position: absolute;
		top: -145px;
		left: -50px;
	}
	.loop div{
		display: inline-block;
	}
	.loop .listCycle{
		width: 16px;
		height: 16px;
		background: url('../../static/img/sprite.png');
		background-position: -64px -179px;
	}
	.loop .listCycle:hover{
		background: url('../../static/img/sprite.png');
		background-position: -80px -179px;
	}
	.loop .singCycle{
		width: 16px;
		height: 16px;
		background: url('../../static/img/sprite.png');
		background-position: 0px -179px;
	}
	.loop .singCycle:hover{
		background: url('../../static/img/sprite.png');
		background-position: -16px -179px;
	}
	.loop .randomPlay{
		width: 16px;
		height: 16px;
		background: url('../../static/img/sprite.png');
		background-position:-128px -179px;
	}
	.loop .randomPlay:hover{
		background: url('../../static/img/sprite.png');
		background-position: -144px -179px;
	}
	.loop li{
		width: 100%;
		height: 35px;
		text-align: center;
		line-height: 35px;
	}
	.loop span{
		color: white;
		display: inline-block;
		vertical-align: middle;
		font-size: 14px;
	}
</style>
