<template>
  <div class='lyrics'>
    <div class='music_lrc' ref='lrc'>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
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
    // })
  }
}
</script>
<style>
  .lyrics {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .music_lrc {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
  }
  .music_lrc p {
    height: 40px;
    line-height: 40px;
  }
</style>
