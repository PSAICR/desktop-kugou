<template>
  <div class="containter">
    <h2>{{ msg }}</h2>
    <div>{{$store.state.count}}</div>
    <button @click="$store.commit('increment')">增加</button>
    <button @click="$store.commit('decrement')">减少</button>
  </div>
</template>

<script>
// import store from '@/../static/store/index'
// export default {
//   name: 'HelloWorld',
//   data () {
//     return {
//       msg: 'hello Vuex'
//     }
//   },
//   store,
//   computed: {
//     count () {
//       return this.$store.state.count
//     }
//   }
// }
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello vuex'
    }
  },
  computed: mapState({
    count: state => state.count
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
